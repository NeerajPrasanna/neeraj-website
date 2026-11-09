import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaArrowRight, FaCheck } from "react-icons/fa";

const formEndpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT;

export default function ContactForm() {
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    if (!formEndpoint) {
      setStatus("error");
      setError("The form endpoint has not been configured yet. You can still email me directly.");
      return;
    }
    setStatus("sending");
    setError("");
    const form = event.currentTarget;
    try {
      const response = await fetch(formEndpoint, { method: "POST", body: new FormData(form), headers: { Accept: "application/json" } });
      if (!response.ok) throw new Error("Unable to send message");
      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
      setError("Something went wrong. Please try again or email me directly.");
    }
  }

  return (
    <div className="contact-layout">
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <label>Name<input name="name" type="text" autoComplete="name" placeholder="Your name" required /></label>
          <label>Email<input name="email" type="email" autoComplete="email" placeholder="you@example.com" required /></label>
        </div>
        <label>Message<textarea name="message" rows="5" placeholder="Tell me a little about what you have in mind." required /></label>
        <input type="text" name="_gotcha" className="honeypot" tabIndex="-1" autoComplete="off" />
        <motion.button className="primary-button form-submit" type="submit" disabled={status === "sending"} whileHover={{ y: -3 }} whileTap={{ scale: 0.98 }}>{status === "sending" ? "Sending…" : "Send message"} <FaArrowRight /></motion.button>
        <AnimatePresence mode="wait">
          {status === "success" && <motion.p className="form-message success" initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}><FaCheck /> Thanks — your message is on its way.</motion.p>}
          {status === "error" && <motion.p className="form-message error" role="alert" initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>{error}</motion.p>}
        </AnimatePresence>
      </form>
      <p className="direct-email">Prefer email? <a href="mailto:neerajpv2005@gmail.com">neerajpv2005@gmail.com</a></p>
    </div>
  );
}
