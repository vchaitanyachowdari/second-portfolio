import React from "react";
import Link from "next/link";
import { person, social } from "@/app/resources/content";
import { Column, Flex, Text, Heading } from "@/once-ui/components";
import styles from "./Footer.module.scss";

const Footer = () => {
  const products = [
    { name: "Angular", path: "#" },
    { name: "React", path: "#" },
    { name: "Vue", path: "#" },
    { name: "Laravel", path: "#" },
  ];
  const usefulLinks = [
    { name: "Pricing", path: "#" },
    { name: "Settings", path: "#" },
    { name: "Orders", path: "#" },
    { name: "Help", path: "#" },
  ];
  return (
    <footer className={styles.footer}>
      {/* Top Bar: Social Media */}
      <div className={styles.topbar}>
        <span>Get connected with us on social networks:</span>
        <div className={styles.socials}>
          {social.map((item) => (
            <a key={item.name} href={item.link} aria-label={item.name} target="_blank" rel="noopener noreferrer">
              <i className={`fab fa-${item.icon.toLowerCase()}`}></i>
            </a>
          ))}
        </div>
      </div>
      {/* Main Footer Content */}
      <div className={styles.main}>
        {/* Company Info */}
        <div className={styles.col}>
          <div className={styles.logo}>{person.name}</div>
          <p className={styles.desc}>
            Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
        </div>
        {/* Products/Services */}
        <div className={styles.col}>
          <h6 className={styles.heading}>PRODUCTS</h6>
          <ul className={styles.list}>
            {products.map((p) => (
              <li key={p.name}><a href={p.path}>{p.name}</a></li>
            ))}
          </ul>
        </div>
        {/* Useful Links */}
        <div className={styles.col}>
          <h6 className={styles.heading}>USEFUL LINKS</h6>
          <ul className={styles.list}>
            {usefulLinks.map((l) => (
              <li key={l.name}><a href={l.path}>{l.name}</a></li>
            ))}
          </ul>
        </div>
        {/* Contact */}
        <div className={styles.col}>
          <h6 className={styles.heading}>CONTACT</h6>
          <ul className={styles.contact}>
            <li><i className="fas fa-home"></i> New York, NY 10012, US</li>
            <li><i className="fas fa-envelope"></i> info@example.com</li>
            <li><i className="fas fa-phone"></i> + 01 234 567 88</li>
            <li><i className="fas fa-print"></i> + 01 234 567 89</li>
          </ul>
        </div>
      </div>
      {/* Copyright */}
      <div className={styles.bottom}>
        © {new Date().getFullYear()} Copyright: <a href="https://mdbootstrap.com/">MDBootstrap.com</a>
      </div>
    </footer>
  );
};

export default Footer;