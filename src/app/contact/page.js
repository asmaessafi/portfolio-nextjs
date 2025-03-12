// components/Contact.js
import styles from './Contact.module.css';

const Page = () => {
  return (
    <section className={styles.contact}>
      <div className={styles.contactWrapper}>
        <h2 className={styles.title}>Get in Touch</h2>
        <p className={styles.subtitle}>
          Have a project in mind? Let’s connect—I’d love to hear from you!
        </p>
        <form className={styles.form}>
          <div className={styles.inputGroup}>
            <input
              type="text"
              placeholder="Your Name"
              className={styles.input}
              required
            />
          </div>
          <div className={styles.inputGroup}>
            <input
              type="email"
              placeholder="Your Email"
              className={styles.input}
              required
            />
          </div>
          <div className={styles.inputGroup}>
            <textarea
              placeholder="Your Message"
              className={styles.textarea}
              rows="5"
              required
            ></textarea>
          </div>
          <button type="submit" className={styles.submitButton}>
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Page;


