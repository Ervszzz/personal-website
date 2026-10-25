import { useState, ChangeEvent, FormEvent } from "react";

const EMAIL = "ervsfernandez21@gmail.com";
import emailjs from "@emailjs/browser";
import SectionHeading from "./SectionHeading";
import { container } from "./ui";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface SubmitMessage {
  text: string;
  isError: boolean;
}

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const EMPTY_FORM: FormData = { name: "", email: "", subject: "", message: "" };

const Contact = () => {
  const [formData, setFormData] = useState<FormData>(EMPTY_FORM);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<SubmitMessage | null>(null);
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const showMessage = (text: string, isError: boolean) => {
    setSubmitMessage({ text, isError });
    setTimeout(() => setSubmitMessage(null), 5000);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Honeypot: bots fill hidden fields, humans don't
    const form = e.target as HTMLFormElement;
    if ((form.elements.namedItem("website") as HTMLInputElement)?.value) return;
    setIsSubmitting(true);

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      message: `Sender's Name: ${formData.name}\nSender's Email: ${formData.email}\nSender's Subject: ${formData.subject}\n${formData.message}`,
    };

    emailjs
      .send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams, EMAILJS_PUBLIC_KEY)
      .then(() => {
        setIsSubmitting(false);
        setFormData(EMPTY_FORM);
        showMessage("Message sent. I'll reply by email.", false);
      })
      .catch((error) => {
        setIsSubmitting(false);
        showMessage(
          `Message not sent: ${error.text || "the email service didn't respond"}. Try again, or email me directly.`,
          true
        );
      });
  };

  return (
    <section id="contact" className="py-16 md:py-24 border-t border-line">
      <div className={container}>
        <SectionHeading
          title="Get in touch"
          intro="Hiring for an SRE or platform role, or want to talk reliability? Send a message and I'll reply by email."
        />

        {/* Contact Grid */}
        <div className="grid md:grid-cols-5 gap-5">
          {/* Contact Info */}
          <div className="md:col-span-2">
            <div className="rounded-lg border border-line bg-surface p-6 h-full">

              <h3 className="text-xl font-semibold tracking-tight text-ink mb-6">
                Contact details
              </h3>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="rounded-md border border-line p-3 mr-4 text-accent">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-sm text-muted">Email</h4>
                    <button
                      onClick={copyEmail}
                      className="flex items-center gap-2 text-ink hover:text-accent transition-colors group"
                      title="Copy email address"
                    >
                      <span>{EMAIL}</span>
                      <svg className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {copied
                          ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                        }
                      </svg>
                      {copied && <span className="text-accent text-xs">Copied</span>}
                    </button>
                  </div>
                </div>

              </div>

              <div className="mt-8 pt-6 border-t border-line">
                <h4 className="text-sm text-muted mb-4">Elsewhere</h4>
                <div className="flex space-x-4">
                  <a
                    href="https://github.com/Ervszzz/Ervszzz"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-md border border-line hover:border-accent text-ink hover:text-accent p-2 transition-colors"
                    aria-label="GitHub"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/ervin-fernandez/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-md border border-line hover:border-accent text-ink hover:text-accent p-2 transition-colors"
                    aria-label="LinkedIn"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="md:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="rounded-lg border border-line bg-surface p-6 relative"
            >

              <h3 className="text-xl font-semibold tracking-tight text-ink mb-6">
                Send a message
              </h3>

              {/* Honeypot field — hidden from real users, bots fill it */}
              <input
                type="text"
                name="website"
                tabIndex={-1}
                autoComplete="off"
                className="absolute -left-full opacity-0 pointer-events-none"
                aria-hidden="true"
              />

              {submitMessage && (
                <div
                  role="status"
                  className={`p-4 mb-6 rounded-md border ${
                    submitMessage.isError
                      ? "border-red-500/40 bg-red-500/10 text-red-700 dark:text-red-300"
                      : "border-ok/40 bg-ok/10 text-ok"
                  }`}
                >
                  <div className="flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      {submitMessage.isError ? (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      ) : (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      )}
                    </svg>
                    {submitMessage.text}
                  </div>
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-ink text-sm font-medium mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full rounded-md bg-bg border border-line px-4 py-3 text-ink placeholder:text-muted/80 focus:outline-none focus:border-accent focus-visible:outline-none focus:ring-2 focus:ring-accent/25 transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-ink text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full rounded-md bg-bg border border-line px-4 py-3 text-ink placeholder:text-muted/80 focus:outline-none focus:border-accent focus-visible:outline-none focus:ring-2 focus:ring-accent/25 transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="subject" className="block text-ink text-sm font-medium mb-2">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full rounded-md bg-bg border border-line px-4 py-3 text-ink placeholder:text-muted/80 focus:outline-none focus:border-accent focus-visible:outline-none focus:ring-2 focus:ring-accent/25 transition-colors"
                  placeholder="What's this about?"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-ink text-sm font-medium mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full rounded-md bg-bg border border-line px-4 py-3 text-ink placeholder:text-muted/80 focus:outline-none focus:border-accent focus-visible:outline-none focus:ring-2 focus:ring-accent/25 transition-colors resize-none"
                  placeholder="Your message here..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-md bg-accent hover:bg-accent/85 disabled:opacity-60 text-accent-ink font-medium py-3 px-6 transition-colors flex justify-center items-center"
              >
                {isSubmitting ? (
                  <>
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Sending...
                  </>
                ) : (
                  "Send message"
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
