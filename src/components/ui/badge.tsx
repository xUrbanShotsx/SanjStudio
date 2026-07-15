import { HTMLAttributes } from "react";

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: "accent" | "subtle" | "outline";
}

export function Badge({ variant = "subtle", className = "", children, ...props }: BadgeProps) {
  const variants: Record<string, string> = {
    accent: "bg-[#C5FF2B] text-[#0B0B0B]",
    subtle: "bg-[rgba(197,255,43,0.12)] text-[#C5FF2B]",
    outline: "border border-[rgba(255,255,255,0.14)] text-[rgba(240,238,233,0.7)]",
  };

  return (
    <span
      className={`inline-flex items-center text-[0.6875rem] font-semibold tracking-[0.1em] uppercase px-3 py-1 ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </span>
  );
}
