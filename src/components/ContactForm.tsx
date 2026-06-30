"use client";

export function ContactForm() {
  return (
    <form onSubmit={(e) => e.preventDefault()} className="contact-form">
      <div className="form-field">
        <label className="form-label" htmlFor="name">Name</label>
        <input className="form-input" id="name" type="text" placeholder="Jane Smith" autoComplete="name" />
      </div>
      <div className="form-field">
        <label className="form-label" htmlFor="email">Email</label>
        <input className="form-input" id="email" type="email" placeholder="jane@yourbusiness.com.au" autoComplete="email" />
      </div>
      <div className="form-field">
        <label className="form-label" htmlFor="message">Message</label>
        <textarea
          className="form-textarea"
          id="message"
          placeholder="Tell us about your project — what you do, what you need, and when you want to go live."
          rows={5}
        />
      </div>
      <button type="submit" className="btn btn-primary contact-submit">
        Send enquiry
      </button>
    </form>
  );
}
