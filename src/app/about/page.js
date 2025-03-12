import React from 'react'
import styles from './About.module.css';

const page = () => {
  return (
    <section className={styles.about}>
      <h2 className={styles.title}>About Me</h2>
      <p className={styles.text}>
      "Hi, I’m Asma , a MERN stack developer who thrives on turning concepts into fully functional web applications.
          I kicked off my coding journey with a bootcamp, diving deep into JavaScript and the MERN ecosystem.
          I specialize in building responsive React frontends, RESTful APIs with Express and Node.js,
          and scalable MongoDB databases—plus I’m handy with tools like Git and Vercel.
          I’m driven by a love for clean code and seamless user experiences, whether
          I’m optimizing performance or designing intuitive interfaces. Some highlights? I’ve built a real-time task manager,
          deployed a portfolio site (you’re on it!), and even tackled a tricky authentication system with JWT. When I’m not coding,
          you’ll find me fighting in the Gym  or tinkering with new frameworks.
          Let’s connect—I’d love to bring your next project to life!"      </p>

          <div>
            <h2 className={styles.title}>Skills :</h2>
            <ul className={styles.skills}>
              <li className={styles.skill}>HTML</li>
              <li className={styles.skill}>CSS</li>
              <li className={styles.skill}>JavaScript</li>
              <li className={styles.skill}>React</li>
              <li className={styles.skill}>Node.js</li>
              <li className={styles.skill}>Express</li>
              <li className={styles.skill}>MongoDB</li>
              <li className={styles.skill}>Git</li>
              <li className={styles.skill}>Vercel</li>
            </ul>
          </div>
    </section>

  )
}

export default page
