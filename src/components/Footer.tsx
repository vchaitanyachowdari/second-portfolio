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
    <Column as="footer" className={styles.footer}>
      {/* Top Bar: Social Media */}
      <Flex className={styles.topbar} horizontal="space-between" vertical="center" wrap>
        <Text>Get connected with us on social networks:</Text>
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
          <Heading as="h6" className={styles.heading}>PRODUCTS</Heading>
          <ul className={styles.list}>
            {products.map((p) => (
              <li key={p.name}><a href={p.path}>{p.name}</a></li>
            ))}
          </ul>
        </Column>
        {/* Useful Links */}
        <Column className={styles.col}>
          <Heading as="h6" className={styles.heading}>USEFUL LINKS</Heading>
          <ul className={styles.list}>
            {usefulLinks.map((l) => (
              <li key={l.name}><a href={l.path}>{l.name}</a></li>
            ))}
          </ul>
        </Column>
        {/* Contact */}
        <Column className={styles.col}>
          <Heading as="h6" className={styles.heading}>CONTACT</Heading>
          <ul className={styles.contact}>
            <li><i className="fas fa-home"></i> New York, NY 10012, US</li>
            <li><i className="fas fa-envelope"></i> info@example.com</li>
            <li><i className="fas fa-phone"></i> + 01 234 567 88</li>
            <li><i className="fas fa-print"></i> + 01 234 567 89</li>
          </ul>
        </Column>
      </Flex>
      {/* Copyright */}
      <Flex className={styles.bottom} horizontal="center">
        <Text>© {new Date().getFullYear()} Copyright: <a href="https://mdbootstrap.com/">MDBootstrap.com</a></Text>
      </Flex>
    </Column>
  );
};

export default Footer;