import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
const page = () => {
  return (

    <main className={styles.bodyContainer}>
      <div className={styles.contentWrapper}>
        <section className={`${styles.hero} ${styles.section}`}>
          <div className={styles.heroWrapper}>
            {/* Left Content */}
            <div className={styles.heroContent}>
              <h1 className={styles.heroTitle}>Hi, I’m Asma</h1>
              <p className={styles.heroSubtitle}>
                A Full Stack Developper .
              </p>
              <a href="/contact" className={styles.heroButton}>
                Get in Touch
              </a>
            </div>

            {/* Right Image */}
            <div className={styles.heroImage}>
              <Image
                src="/asma.png"
                alt="asma"
                width={400}
                height={400}
                className={styles.profileImage}
                priority
              />
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.title}>Overview :</h2>
          <p className={styles.text}>
            "As a passionate MERN stack developer,
            I specialize in crafting seamless,
            responsive web applications by leveraging the power of MongoDB,
            Express.js, React, and Node.js.. With a strong focus on clean,
            efficient code and user-friendly interfaces,
            I bring ideas to life with robust back-end functionality and dynamic front-end experiences.
            My goal is to deliver impactful digital solutions that combine creativity, functionality, and performance."
          </p>

        </section>
        
      </div>
    </main>
  )
}

export default page
