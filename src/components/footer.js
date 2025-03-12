// components/Footer.js
import Link from 'next/link';
import styles from './Footer.module.css';
import Image from 'next/image';

const Footer = () => {


  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.socialLinks}>
          <Link href={'mailto:asmaessafi137@gmail.com'}><Image src="/email.png" alt="Email" width={30} height={30} className={styles.icon} />
          </Link>
          <Link href={'https://github.com/asmaessafi'}><Image src="/githuB.webp" alt="github" width={30} height={30} className={styles.icon} />
          </Link>
          <Link href={'https://www.linkedin.com/in/asma-essafi-a60a43331/'}><Image src="/link.png" alt="linkidin" width={30} height={30} className={styles.icon} />
          </Link>

        </div>
        <p className={styles.copyright}>
          © {currentYear} Asma Essafi. All rights reserved.
        </p>
      
      </div>
    </footer>
  );
};

export default Footer;