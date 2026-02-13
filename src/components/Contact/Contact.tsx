'use client';

import { useState } from 'react';
import styles from './Contact.module.css';

const Contact = () => {
  const [status, setStatus] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');
    
    // Simulate form submission
    setTimeout(() => {
      setStatus('success');
      (e.target as HTMLFormElement).reset();
    }, 1500);
  };

  return (
    <section id="contact" className={styles.contact}>
      <h2>Get In Touch</h2>
      <div className={styles.container}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.field}>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required placeholder="Your Name" />
          </div>
          <div className={styles.field}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required placeholder="your.email@example.com" />
          </div>
          <div className={styles.field}>
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" required rows={5} placeholder="How can I help you?"></textarea>
          </div>
          <button type="submit" className={styles.button} disabled={status === 'sending'}>
            {status === 'sending' ? 'Sending...' : 'Send Message'}
          </button>
          {status === 'success' && <p className={styles.success}>Message sent successfully!</p>}
        </form>
      </div>
    </section>
  );
};

export default Contact;
