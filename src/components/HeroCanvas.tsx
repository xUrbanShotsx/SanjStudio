"use client";
import { useEffect, useRef } from "react";
import * as THREE from "three";

export function HeroCanvas() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    // ── Renderer ────────────────────────────────────────────
    const W = () => mount.offsetWidth  || window.innerWidth;
    const H = () => mount.offsetHeight || window.innerHeight;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(W(), H());
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    // ── Scene & camera ───────────────────────────────────────
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      55,
      mount.clientWidth / mount.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 38;

    // ── Particles ────────────────────────────────────────────
    const COUNT = 480;
    const positions = new Float32Array(COUNT * 3);
    const scales = new Float32Array(COUNT);

    for (let i = 0; i < COUNT; i++) {
      const r = 28 + Math.random() * 20;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      positions[i * 3]     = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = r * Math.cos(phi);
      scales[i] = 0.4 + Math.random() * 0.6;
    }

    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geo.setAttribute("aScale", new THREE.BufferAttribute(scales, 1));

    const mat = new THREE.ShaderMaterial({
      transparent: true,
      depthWrite: false,
      uniforms: {
        uTime:    { value: 0 },
        uOpacity: { value: 0 },
      },
      vertexShader: /* glsl */ `
        attribute float aScale;
        uniform float uTime;
        void main() {
          vec3 pos = position;
          // gentle drift
          pos.x += sin(uTime * 0.18 + position.z * 0.04) * 0.6;
          pos.y += cos(uTime * 0.14 + position.x * 0.04) * 0.5;
          pos.z += sin(uTime * 0.10 + position.y * 0.04) * 0.4;

          vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
          gl_PointSize = aScale * 1.8 * (38.0 / -mvPosition.z);
          gl_Position = projectionMatrix * mvPosition;
        }
      `,
      fragmentShader: /* glsl */ `
        uniform float uOpacity;
        void main() {
          float d = distance(gl_PointCoord, vec2(0.5));
          if (d > 0.5) discard;
          float alpha = (1.0 - d * 2.0) * uOpacity;
          gl_FragColor = vec4(1.0, 1.0, 1.0, alpha * 0.55);
        }
      `,
    });

    const points = new THREE.Points(geo, mat);
    scene.add(points);

    // ── Thin line rings (architectural depth) ───────────────
    function makeRing(radius: number, opacity: number) {
      const segments = 128;
      const ringGeo = new THREE.BufferGeometry();
      const verts = new Float32Array((segments + 1) * 3);
      for (let i = 0; i <= segments; i++) {
        const a = (i / segments) * Math.PI * 2;
        verts[i * 3]     = Math.cos(a) * radius;
        verts[i * 3 + 1] = Math.sin(a) * radius;
        verts[i * 3 + 2] = 0;
      }
      ringGeo.setAttribute("position", new THREE.BufferAttribute(verts, 3));
      const ringMat = new THREE.LineBasicMaterial({
        color: 0xffffff,
        transparent: true,
        opacity,
      });
      return new THREE.Line(ringGeo, ringMat);
    }

    const ring1 = makeRing(16, 0.06);
    const ring2 = makeRing(22, 0.04);
    const ring3 = makeRing(30, 0.025);
    ring1.rotation.x = 1.1;
    ring2.rotation.x = 0.4;
    ring2.rotation.y = 0.6;
    ring3.rotation.x = 0.9;
    ring3.rotation.z = 0.3;
    scene.add(ring1, ring2, ring3);

    // ── Mouse parallax ───────────────────────────────────────
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    const onMouse = (e: MouseEvent) => {
      targetX = (e.clientX / window.innerWidth  - 0.5) * 2;
      targetY = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("mousemove", onMouse);

    // ── Fade-in on mount ─────────────────────────────────────
    let opacity = 0;

    // ── Resize ───────────────────────────────────────────────
    const onResize = () => {
      camera.aspect = W() / H();
      camera.updateProjectionMatrix();
      renderer.setSize(W(), H());
    };
    const ro = new ResizeObserver(onResize);
    ro.observe(mount);
    window.addEventListener("resize", onResize);

    // ── Animate ──────────────────────────────────────────────
    let raf: number;
    const clock = new THREE.Clock();

    const animate = () => {
      raf = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();

      // fade in over 2 seconds
      opacity = Math.min(1, opacity + 0.008);
      mat.uniforms.uOpacity.value = opacity;
      mat.uniforms.uTime.value = t;

      // smooth mouse follow
      currentX += (targetX - currentX) * 0.025;
      currentY += (targetY - currentY) * 0.025;

      points.rotation.y = t * 0.03 + currentX * 0.18;
      points.rotation.x = currentY * 0.12;

      ring1.rotation.z = t * 0.08;
      ring2.rotation.z = -t * 0.05;
      ring3.rotation.y = t * 0.04 + currentX * 0.1;

      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMouse);
      window.removeEventListener("resize", onResize);
      ro.disconnect();
      geo.dispose();
      mat.dispose();
      renderer.dispose();
      mount.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{
        position: "absolute",
        inset: 0,
        pointerEvents: "none",
        zIndex: 0,
      }}
    />
  );
}
