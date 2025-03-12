import React from 'react'
import styles from './projects.module.css'
import projects from '../../projectsTable/projects.js'
import Image from 'next/image'

const Page = () => {

  return (
      <div className={styles.projectsContainer}>
  <h2 className={styles.title}>Some Projects Of Mine:</h2>
  <div className={styles.projectsGrid}>
    {projects.map((project, index) => (

      <div key={index} className={styles.card}>
        <Image src={project.image} alt={project.name} width={300} height={180} className={styles.Image} />
        <div className={styles.cardContent}>
          <h3 className={styles.projectTitle}>{project.name}</h3>
          <p className={styles.description}>{project.description}</p>
          <a href={project.link} target="_blank" rel="noopener noreferrer" className={styles.button}>
            View code
          </a>
        </div>
      </div>
    ))}
  </div>
</div>

  )
}


export default Page


