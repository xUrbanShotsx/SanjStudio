"use client";
import { useState } from "react";

type Status = "idle" | "sending" | "sent" | "error";

export default function ContactPage() {
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({
    name: "",
    email: "",
    service: "",
    budget: "",
    message: "",
  });

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      await fetch("https://formspree.io/f/xpwzgvkb", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(form),
      });
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="contact-page">
      <header className="landing-nav" style={{ background: "#fff", borderBottomColor: "rgba(10,10,10,0.08)" }}>
        <a href="/"><img src="/Sanjlogo.png" alt="Sanj Studio" className="landing-logo-img" style={{ height: "60px", filter: "invert(1)" }} /></a>
        <a href="/contact" className="landing-quote landing-quote--active">FREE QUOTE</a>
      </header>

      <main className="contact-main">
        <div className="contact-inner">

          {status === "sent" ? (
            <div className="cf-sent">
              <span className="cf-sent-icon">✓</span>
              <h1 className="cf-sent-h1">Message sent.</h1>
              <p className="cf-sent-sub">I&apos;ll get back to you within 24 hours.</p>
              <a href="/" className="cf-sent-back">← Back to home</a>
            </div>
          ) : (
            <>
              <span className="contact-kicker">Let&apos;s talk</span>
              <h1 className="contact-h1">Get a free quote</h1>
              <p className="contact-sub">Fill in the form and I&apos;ll get back to you within 24 hours.</p>

              <form className="cf-form" onSubmit={handleSubmit} noValidate>
                <div className="cf-row">
                  <div className="cf-field">
                    <label className="cf-label" htmlFor="cf-name">Your name</label>
                    <input
                      id="cf-name"
                      className="cf-input"
                      type="text"
                      placeholder="Jane Smith"
                      value={form.name}
                      onChange={set("name")}
                      required
                    />
                  </div>
                  <div className="cf-field">
                    <label className="cf-label" htmlFor="cf-email">Email address</label>
                    <input
                      id="cf-email"
                      className="cf-input"
                      type="email"
                      placeholder="jane@business.com"
                      value={form.email}
                      onChange={set("email")}
                      required
                    />
                  </div>
                </div>

                <div className="cf-row">
                  <div className="cf-field">
                    <label className="cf-label" htmlFor="cf-service">What do you need?</label>
                    <select
                      id="cf-service"
                      className="cf-input cf-select"
                      value={form.service}
                      onChange={set("service")}
                      required
                    >
                      <option value="" disabled>Select a service</option>
                      <option value="design">Design — website design</option>
                      <option value="scale">Scale — SEO & performance</option>
                      <option value="create">Create — full build & deploy</option>
                      <option value="all">All three</option>
                      <option value="unsure">Not sure yet</option>
                    </select>
                  </div>
                  <div className="cf-field">
                    <label className="cf-label" htmlFor="cf-budget">Budget range</label>
                    <select
                      id="cf-budget"
                      className="cf-input cf-select"
                      value={form.budget}
                      onChange={set("budget")}
                    >
                      <option value="" disabled>Select a budget</option>
                      <option value="under-1k">Under $1,000</option>
                      <option value="1k-3k">$1,000 – $3,000</option>
                      <option value="3k-5k">$3,000 – $5,000</option>
                      <option value="5k+">$5,000+</option>
                      <option value="unsure">Not sure</option>
                    </select>
                  </div>
                </div>

                <div className="cf-field">
                  <label className="cf-label" htmlFor="cf-message">Tell me about your project</label>
                  <textarea
                    id="cf-message"
                    className="cf-input cf-textarea"
                    placeholder="What's your business, what do you need, any deadlines?"
                    value={form.message}
                    onChange={set("message")}
                    required
                    rows={4}
                  />
                </div>

                {status === "error" && (
                  <p className="cf-error">Something went wrong — email me directly at jyesanjurjo12@gmail.com</p>
                )}

                <button className="cf-submit" type="submit" disabled={status === "sending"}>
                  {status === "sending" ? "Sending…" : "Send message →"}
                </button>
              </form>
            </>
          )}
        </div>
      </main>
    </div>
  );
}
