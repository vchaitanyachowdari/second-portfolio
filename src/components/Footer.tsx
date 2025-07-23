import React from "react";
import Link from "next/link";
import { person, social } from "@/app/resources/content";
import { Column, Flex, Text, Heading } from "@/once-ui/components";
import styles from "./Footer.module.scss";

const Footer = () => {
  const products = [
    { name: "About", path: "/about" },
    { name: "Work", path: "/work" },
    { name: "Blog", path: "/blog" },
    { name: "Resources", path: "/resource" },
    { name: "Tech Stack", path: "/tech-stack" },
    { name: "Services", path: "/services" },
    { name: "Store", path: "/store" },
  ];
  const usefulLinks = [
    { name: "AI Automation", path: "#" },
    { name: "AI Solutions", path: "#" },
    { name: "AI Integration", path: "#" },
    { name: "App Development", path: "#" },
    { name: "Web Development", path: "#" },
  ];
  const moreLinks = [
    { name: "Privacy Policy", path: "/privacy " },
    { name: "Refund & Cancellation", path: "/refund" },
    { name: "Contact", path: "/contact" },
  ];
  return (
    <Column as="footer" className={styles.footer}>
      {/* Top Bar: Social Media */}
      <Flex className={styles.topbar} horizontal="space-between" vertical="center" wrap>
        
        <Flex className={styles.socials}>
          {social.map((item) => (
            <a key={item.name} href={item.link} aria-label={item.name} target="_blank" rel="noopener noreferrer">
              <i className={`fab fa-${item.icon.toLowerCase()}`}></i>
            </a>
          ))}
        </Flex>
      </Flex>
      {/* Main Footer Content */}
      <Flex className={styles.main} wrap horizontal="space-between">
        {/* Company Info */}
        <Column className={styles.col}>
          <Text as="div" className={styles.logo}>{person.name}</Text>
          <Text as="p" className={styles.desc}>
            Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </Text>
        </Column>
        {/* Products/Services */}
        <Column className={styles.col}>
          <Heading as="h6" className={styles.heading}></Heading>
          <ul className={styles.list}>
            {products.map((p) => (
              <li key={p.name}><a href={p.path}>{p.name}</a></li>
            ))}
          </ul>
        </Column>
        {/* Useful Links */}
        <Column className={styles.col}>
          <Heading as="h6" className={styles.heading}>Services</Heading>
          <ul className={styles.list}>
            {usefulLinks.map((l) => (
              <li key={l.name}><a href={l.path}>{l.name}</a></li>
            ))}
          </ul>
        </Column>
        {/* More Links */}
        <Column className={styles.col}>
          <Heading as="h6" className={styles.heading}></Heading>
          <ul className={styles.list}>
            {moreLinks.map((l) => (
              <li key={l.name}><a href={l.path}>{l.name}</a></li>
            ))}
          </ul>
        </Column>
        {/* Contact */}
        <Column className={styles.col}>
          <Heading as="h6" className={styles.heading}>CONTACT</Heading>
          <ul className={styles.contact}>
            <li><i className="fas fa-home"></i>Davangere, Karnataka, India</li>
            <li><i className="fas fa-envelope"></i> vchaitanya@chowdari.in</li>
            <li><i className="fas fa-phone"></i> + 91 94826 87922</li>
            <li><i className="fas fa-print"></i></li>
          </ul>
        </Column>
      </Flex>
      {/* Copyright */}
      <Flex className={styles.bottom} horizontal="center">
        <Text>© {new Date().getFullYear()} Copyright: <a href="https://chowdari.in/">Chowdari.in</a></Text>
      </Flex>
    </Column>
  );
};

export default Footer;
