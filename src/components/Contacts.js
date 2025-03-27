import styles from "@/components/Contacts.module.css";
import Image from "next/image";
import "@/app/globals.css";
//++++++++++++++++
import { FaGithub } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaHashnode } from "react-icons/fa6";
//++++++++++++++++
// svg icons
import InstagramIcon from "@/components/icons/Instagram";
import XIcon from "@/components/icons/X";
import LinkedInIcon from "@/components/icons/Linkedin";
import GithubIcon from "@/components/icons/Github";
import YoutubeIcon from "@/components/icons/Youtube";
import HashnodeIcon from "@/components/icons/Hashnode";
import MyLogo from "@/components/icons/MyLogo";
// import X from "@/components/icons/X";

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
            {/* <InstagramIcon /> */}
            <FaInstagram className="social-icon" />
          </a>

          <a
            className={styles.social_icon}
            href="https://x.com/AsatryanHov/"
            target="_blank"
            rel="noreferrer">
            {/* <XIcon /> */}
            <FaXTwitter className="social-icon" />
          </a>

          <a
            className={styles.social_icon}
            href="https://www.linkedin.com/in/asatryanhov/"
            target="_blank"
            rel="noreferrer">
            {/* <LinkedInIcon /> */}
            <FaLinkedinIn className="social-icon" />
          </a>

          <a
            className={styles.social_icon}
            href="https://github.com/AsatryanHov"
            target="_blank"
            rel="noreferrer">
            <FaGithub className="social-icon" />
          </a>

          <a
            className={styles.social_icon}
            href="https://www.youtube.com/@asatryanhov"
            target="_blank"
            rel="noreferrer">
            <FaYoutube className="social-icon" />
          </a>

          <a
            className={styles.social_icon}
            href="https://hashnode.com/@asatryanhov"
            target="_blank"
            rel="noreferrer">
            <FaHashnode className="social-icon" />
          </a>
        </div>
        <div className={styles.mailContainer}>
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
            <MyLogo />
          </a>
          <div className={styles.logoText}>
            <p>created by @asatryanhov</p>
          </div>
        </div>
      </div>
    </>
  );
}
