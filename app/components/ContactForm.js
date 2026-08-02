"use client";

import { useState } from "react";
import styles from "./ContactForm.module.css";
import logo from "../assets/figma.svg";
import Image from "next/image";

/**
 * @param {{ onSubmit?: (data: { email: string; text: string }) => void }} props
 */
export default function ContactForm({ onSubmit }) {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    const trimmedEmail = email.trim();
    const trimmedMessage = message.trim();
    if (!trimmedEmail || !trimmedMessage) return;

    setIsSubmitting(true);
    setError("");
    setSuccess(false);

    try {
      const response = await fetch("/api/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          data: {
            email: trimmedEmail,
            text: trimmedMessage,
          },
        }),
      });

      if (!response.ok) {
        throw new Error("Message request failed");
      }

      setEmail("");
      setMessage("");
      setSuccess(true);
      if (typeof onSubmit === "function") {
        onSubmit({ email: trimmedEmail, text: trimmedMessage });
      }
    } catch {
      setError("Unable to send your message right now. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="contact" className={styles.outer} aria-labelledby="contact-form-title">
      <div className={styles.inner}>
        <header className={styles.header}>
          <h2 id="contact-form-title" className={styles.title}>
            Say hello.
          </h2>
          <p className={styles.subtitle}>
            {
              "I like trading notes with founders and other marketers. If that's you, get in touch."
            }
          </p>
        </header>

        <form className={styles.form} onSubmit={handleSubmit} noValidate>
          <input
            type="email"
            name="email"
            autoComplete="email"
            inputMode="email"
            placeholder="@ Email"
            className={styles.field}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            aria-label="Email"
          />
          <textarea
            name="message"
            placeholder="Message"
            className={`${styles.field} ${styles.textarea}`.trim()}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            aria-label="Message"
            rows={5}
          />
          <button
            type="submit"
            className={styles.submit}
            disabled={isSubmitting}
          >
            Get in touch
          </button>
        </form>

        {error ? <p className={styles.statusError}>{error}</p> : null}
        {success ? <p className={styles.statusSuccess}>Message sent.</p> : null}

        <footer className={styles.footer}>
          <p className={styles.chatLabel}>{"Prefer email?"}</p>
          <p className={styles.email}>
            <a className={styles.emailLink} href="mailto:luka@lukxce.com">
              luka@lukxce.com
            </a>
          </p>
          <p className={styles.copyright}>© Copyright 2026. All rights Reserved.</p>
        </footer>
      </div>
    </section>
  );
}
