import React from "react";
import Link from "next/link";
import { person, social, home, services } from "@/app/resources/content";
import { Column, Flex, Text, Heading } from "@/once-ui/components";

const Footer = () => {
  // Define navigation links dynamically from content.js or explicitly
  const pages = [
    { name: "Home", path: home.path },
    { name: "About", path: "/about" },
    { name: "Blog", path: "/blog" },
    { name: "Work", path: "/work" },
    { name: "Gallery", path: "/gallery" },
  ];

  const serviceLinks = [
    { name: "AI Solutions", path: "/services" }, // Example, link to services page
    { name: "Automation Tools", path: "/services" },
    { name: "Web Development", path: "/services" },
    { name: "Digital Marketing", path: "/services" },
  ];

  const legalLinks = [
    { name: "Terms & Conditions", path: "/terms" },
    { name: "Privacy Policy", path: "/privacy" },
    { name: "Refund & Cancellation", path: "/refund" },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300 p-8 mt-16">
      {/* Social Media Section */}
      <section className="flex flex-col md:flex-row justify-between items-center p-4 border-b border-gray-700 mb-8">
        <div className="mb-4 md:mb-0">
          <span className="text-lg">Get connected with us on social networks:</span>
        </div>
        <div className="flex space-x-6">
          {social.map((item) => (
            <a key={item.name} href={item.link} className="text-gray-400 hover:text-white transition-colors duration-200">
              {/* Assuming Font Awesome or similar is globally available for these classes */}
              <i className={`fab fa-${item.icon.toLowerCase()} text-2xl`}></i>
            </a>
          ))}
        </div>
      </section>

      {/* Main Footer Content */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

        {/* Company Information */}
        <Column>
          {/* Replace with your actual logo if available, otherwise use text */}
          <Heading as="h6" variant="heading-default-s" className="text-white mb-4 uppercase font-bold">
            {person.name}
          </Heading>
          <Text variant="body-default-s" className="mb-4">
            Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit
            amet, consectetur adipisicing elit.
          </Text>
        </Column>

        {/* Pages Column */}
        <Column>
          <Heading as="h6" variant="heading-default-s" className="text-white mb-4 uppercase font-bold">
            Pages
          </Heading>
          <ul className="space-y-2">
            {pages.map((page) => (
              <li key={page.name}><Link href={page.path} className="hover:underline">{page.name}</Link></li>
            ))}
          </ul>
        </Column>

        {/* Services Column */}
        <Column>
          <Heading as="h6" variant="heading-default-s" className="text-white mb-4 uppercase font-bold">
            Services
          </Heading>
          <ul className="space-y-2">
            {serviceLinks.map((service) => (
              <li key={service.name}><Link href={service.path} className="hover:underline">{service.name}</Link></li>
            ))}
          </ul>
        </Column>

        {/* Contact Information */}
        <Column>
          <Heading as="h6" variant="heading-default-s" className="text-white mb-4 uppercase font-bold">
            Contact
          </Heading>
          <Text variant="body-default-s" className="mb-2">
            <i className="fas fa-home mr-3"></i> New York, NY 10012, US
          </Text>
          <Text variant="body-default-s" className="mb-2">
            <i className="fas fa-envelope mr-3"></i> info@example.com
          </Text>
          <Text variant="body-default-s" className="mb-2">
            <i className="fas fa-phone mr-3"></i> + 01 234 567 88
          </Text>
          <Text variant="body-default-s" className="mb-2">
            <i className="fas fa-print mr-3"></i> + 01 234 567 89
          </Text>
        </Column>

      </div>

      {/* Copyright Section */}
      <div className="border-t border-gray-700 pt-6 mt-6 text-center">
        <p>&copy; {new Date().getFullYear()} {person.name}. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
