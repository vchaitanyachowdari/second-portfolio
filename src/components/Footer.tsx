"use client";

import React, { useState } from "react";
import { person, social } from "@/app/resources/content";
import { Icon } from "@/once-ui/components";
import { IconName } from "@/once-ui/icons";
import { useTheme } from "@/once-ui/components";
import styles from "./Footer.module.scss";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Work", path: "/work" },
  { name: "Blog", path: "/blog" },
  { name: "Resources", path: "/resource" },
  { name: "Services", path: "/services" },
  { name: "Contact", path: "/contact" },
];

const legalLinks = [
  { name: "Privacy Policy", path: "/privacy" },
  { name: "Refund & Cancellation", path: "/refund" },
  { name: "Terms of Service", path: "/terms" },
];

const getIconName = (socialName: string): IconName => {
  const iconMap: Record<string, IconName> = {
    GitHub: "github",
    LinkedIn: "linkedin",
    X: "x",
    Email: "email",
    Twitter: "x",
    Instagram: "instagram",
    Facebook: "facebook",
    YouTube: "youtube",
    Discord: "discord",
  };
  return iconMap[socialName] || "globe";
};

const Footer = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [tooltip, setTooltip] = useState<string | null>(null);
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark");
  };

  return (
    <footer className={`${styles.footer} ${styles.glassmorphism}`}>
      {/* floating blobs */}
      <div className={styles["floating-element"]} />
      <div className={styles["floating-element"]} />
      <div className={styles["floating-element"]} />
      <div className={styles["floating-element"]} />

      <div className={styles.inner}>
        <div className={styles.grid}>

          {/* Newsletter */}
          <div className={styles.col}>
            <h2 className={styles.headline}>Stay Connected</h2>
            <p className={styles.desc}>
              Get the latest AI insights, automation tips, and updates delivered to your inbox.
            </p>
            {subscribed ? (
              <div className={styles.subscribed}>
                <Icon name="checkCircle" size="s" />
                <span>You&apos;re subscribed!</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className={styles.form}>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className={styles.input}
                  required
                />
                <button type="submit" className={styles.sendBtn} aria-label="Subscribe">
                  <Icon name="arrowRight" size="s" />
                </button>
              </form>
            )}
            <div className={styles.glow} />
          </div>

          {/* Quick Links */}
          <div className={styles.col}>
            <h3 className={styles.heading}>Quick Links</h3>
            <nav>
              <ul className={styles.list}>
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <a href={link.path}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Contact */}
          <div className={styles.col}>
            <h3 className={styles.heading}>Contact Us</h3>
            <address className={styles.contact}>
              <p>
                <Icon name="globe" size="s" />
                Davangere, Karnataka, India
              </p>
              <p>
                <Icon name="email" size="s" />
                vchaitanya@chowdari.in
              </p>
              <p>
                <Icon name="arrowUpRightFromSquare" size="s" />
                +91 94826 87922
              </p>
            </address>
          </div>

          {/* Social + Theme */}
          <div className={styles.col}>
            <h3 className={styles.heading}>Follow Us</h3>
            <div className={styles.socials}>
              {social.map((item) => (
                <div
                  key={item.name}
                  className={styles.socialWrapper}
                  onMouseEnter={() => setTooltip(item.name)}
                  onMouseLeave={() => setTooltip(null)}
                >
                  <a
                    href={item.link}
                    aria-label={item.name}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialBtn}
                  >
                    <Icon name={getIconName(item.name)} size="m" />
                  </a>
                  {tooltip === item.name && (
                    <div className={styles.tooltip}>{item.name}</div>
                  )}
                </div>
              ))}
            </div>

            {/* Theme toggle */}
            <div className={styles.themeRow}>
              <Icon name="sun" size="s" />
              <button
                className={`${styles.toggle} ${isDark ? styles.toggleOn : ""}`}
                onClick={toggleTheme}
                aria-label="Toggle dark mode"
              >
                <span className={styles.toggleThumb} />
              </button>
              <Icon name="moon" size="s" />
              <span className={styles.themeLabel}>
                {isDark ? "Dark" : "Light"}
              </span>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className={styles.bottom}>
          <p className={styles.copy}>
            © {new Date().getFullYear()} {person.name}. All rights reserved.
          </p>
          <nav className={styles.legalLinks}>
            {legalLinks.map((l) => (
              <a key={l.name} href={l.path}>
                {l.name}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
