import styles from "@/components/Contacts.module.css";
import Image from "next/image";

const my_logo = "/icons/my_logo.svg";
const github = "/icons/github.svg";
const instagram = "/icons/instagram.svg";
const linkedin = "/icons/linkedin.svg";
const x = "/icons/x.svg";
const youtube = "/icons/youtube.svg";
const hashnode = "/icons/icons8-hashnode.svg";

export default function Footer() {
  return (
    <>
      <div className={styles.container}>
        <p className={styles.iconsTitle}>My profiles in social media</p>
        <div className={styles.iconsBlock}>
          <a
            className={styles.social_icon}
            href="https://www.instagram.com/asatryan_hov/"
            target="_blank"
            rel="noreferrer">
            {/* <Image src={instagram} alt="Instagram" width={100} height={100} /> */}
            <img src={instagram} alt="Instagram" width={100} height={100} />
          </a>

          <a
            className={styles.social_icon}
            href="https://x.com/AsatryanHov/"
            target="_blank"
            rel="noreferrer">
            {/* <Image
              src={x}
              alt="X (formerly Twitter)"
              width={100}
              height={100}
            /> */}
            <img src={x} alt="X (formerly Twitter)" width={100} height={100} />
          </a>

          <a
            className={styles.social_icon}
            href="https://www.linkedin.com/in/asatryanhov/"
            target="_blank"
            rel="noreferrer">
            {/* <Image src={linkedin} alt="LinkedIn" width={100} height={100} /> */}
            <img src={linkedin} alt="LinkedIn" width={100} height={100} />
          </a>

          <a
            className={styles.social_icon}
            href="https://github.com/AsatryanHov"
            target="_blank"
            rel="noreferrer">
            {/* <Image src={github} alt="GitHub" width={100} height={100} /> */}
            <img src={github} alt="Github" width={100} height={100} />
          </a>

          <a
            className={styles.social_icon}
            href="https://www.youtube.com/@asatryanhov"
            target="_blank"
            rel="noreferrer">
            {/* <Image src={youtube} alt="YouTube" width={100} height={100} /> */}
            <img src={youtube} alt="youtube" width={100} height={100} />
          </a>

          <a
            className={styles.social_icon}
            href="https://hashnode.com/@asatryanhov"
            target="_blank"
            rel="noreferrer">
            {/* <Image src={hashnode} alt="Hashnode" width={100} height={100} /> */}
            <img src={hashnode} alt="Hashnode" width={100} height={100} />
          </a>
        </div>
        <div className={styles.mailContainer}>
          {/* <p>mail@asatryanhov.pl</p> */}
          <a href="mailto:asatryanhov@wp.pl" className={styles.mailbutton}>
            asatryanhov@wp.pl
          </a>
        </div>
        <div className={styles.containerLogo}>
          <a
            href="https://asatryanhov.github.io/AsatryanHov/"
            className={styles.logo}
            target="_blank"
            rel="noreferrer">
            <Image src={my_logo} alt="logo" width={200} height={170} />
          </a>
          <div className={styles.logoText}>
            <p>created by @asatryanhov</p>
          </div>
        </div>
      </div>
    </>
  );
}
