"use client";

export function ContactForm() {
  return (
    <form onSubmit={(e) => e.preventDefault()} style={{ display: "flex", flexDirection: "column" }}>
      <div className="form-field">
        <label className="form-label" htmlFor="name">Your name</label>
        <input className="form-input" id="name" type="text" placeholder="Jane Smith" autoComplete="name" />
      </div>
      <div className="form-field">
        <label className="form-label" htmlFor="email">Email address</label>
        <input className="form-input" id="email" type="email" placeholder="jane@yourbusiness.com.au" autoComplete="email" />
      </div>
      <div className="form-field">
        <label className="form-label" htmlFor="business">Business type</label>
        <input className="form-input" id="business" type="text" placeholder="e.g. Café, Tradie, Retail…" />
      </div>
      <div className="form-field">
        <label className="form-label" htmlFor="message">Tell us about your project</label>
        <textarea
          className="form-textarea"
          id="message"
          placeholder="What does your business do? Do you have an existing site? What's your goal?"
          rows={4}
        />
      </div>
      <button type="submit" className="btn btn-primary" style={{ alignSelf: "flex-start", marginTop: 8 }}>
        Send enquiry
      </button>
    </form>
  );
}
