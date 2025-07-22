import React from "react";
import Link from "next/link";
import { person, social, home, about, blog, techStack, services, work, gallery, resources, store, tools } from "@/app/resources/content";
import { Column, Flex, Text, Heading } from "@/once-ui/components";

const Footer = () => {
  const pages = [
    { name: home.label, path: home.path },
    { name: about.label, path: about.path },
    { name: blog.label, path: blog.path },
    { name: work.label, path: work.path },
    { name: gallery.label, path: gallery.path },
    { name: techStack.label, path: techStack.path },
    { name: resources.label, path: resources.path },
    { name: store.label, path: store.path },
    { name: tools.label, path: tools.path },
  ];

  const legalLinks = [
    { name: "Terms & Conditions", path: "/terms" },
    { name: "Privacy Policy", path: "/privacy" },
    { name: "Refund & Cancellation", path: "/refund" },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300 p-8 mt-16">
      <div className="container mx-auto flex flex-wrap justify-between items-start gap-8">

        {/* Logo and Description */}
        <Column className="w-full md:w-1/4 mb-6 md:mb-0">
          {/* Assuming you have a Logo component or an image for the logo */}
          {/* <img src="/path/to/your/logo.png" alt="Logo" className="mb-4" /> */}
          <Heading as="h6" variant="heading-default-s" className="text-white mb-4 uppercase font-bold">
            {person.name}
          </Heading>
          <Text variant="body-default-s">
            {home.subline} {/* Using the subline from home as a description */}
          </Text>
          <Flex className="mt-4 space-x-4">
            {social.map((item) => (
              <a key={item.name} href={item.link} className="text-gray-400 hover:text-white transition-colors duration-200">
                <i className={`fab fa-${item.icon} text-xl`}></i>
              </a>
            ))}
          </Flex>
        </Column>

        {/* Pages Column */}
        <Column className="w-full md:w-1/6 mb-6 md:mb-0">
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
        <Column className="w-full md:w-1/6 mb-6 md:mb-0">
          <Heading as="h6" variant="heading-default-s" className="text-white mb-4 uppercase font-bold">
            Services
          </Heading>
          <ul className="space-y-2">
            <li><Link href={services.path} className="hover:underline">{services.label}</Link></li>
            {/* Add more specific services if available in content.js or define them here */}
            <li><Link href="#!" className="hover:underline">AI Solutions</Link></li>
            <li><Link href="#!" className="hover:underline">Automation</Link></li>
            <li><Link href="#!" className="hover:underline">Web Development</Link></li>
          </ul>
        </Column>

        {/* Legal Links Column */}
        <Column className="w-full md:w-1/6 mb-6 md:mb-0">
          <Heading as="h6" variant="heading-default-s" className="text-white mb-4 uppercase font-bold">
            Legal
          </Heading>
          <ul className="space-y-2">
            {legalLinks.map((link) => (
              <li key={link.name}><Link href={link.path} className="hover:underline">{link.name}</Link></li>
            ))}
          </ul>
        </Column>

        {/* Contact Info Column */}
        <Column className="w-full md:w-1/4 mb-6 md:mb-0">
          <Heading as="h6" variant="heading-default-s" className="text-white mb-4 uppercase font-bold">
            Contact
          </Heading>
          <Text variant="body-default-s" className="mb-2">
            <i className="fas fa-map-marker-alt mr-3"></i> {person.location}
          </Text>
          <Text variant="body-default-s" className="mb-2">
            <i className="fas fa-envelope mr-3"></i> {person.email}
          </Text>
          <Text variant="body-default-s" className="mb-2">
            <i className="fas fa-phone mr-3"></i> + 01 234 567 88 {/* Placeholder phone number */}
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