import React from 'react';
import styles from './Services.module.scss'; // We'll create this SCSS module next
// import { Heading } from '@/once-ui'; // Example of using existing UI component if available

const ServicesPage = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Services</h1>
        <p>We offer a range of services designed to meet your project needs, specializing in various aspects of software development and digital solutions.</p>
      </header>

      <section className={styles.section}>
        <h2>A. Core Service Offerings:</h2>
        <div className={styles.serviceGrid}>
          <div className={styles.serviceCard}>
            <h3>Web Development</h3>
            <ul>
              <li>Custom Website Design & Development (e.g., marketing sites, e-commerce stores)</li>
              <li>Full-Stack Development (Frontend & Backend)</li>
              <li>Responsive Web Design</li>
              <li>Website Maintenance & Support</li>
            </ul>
          </div>
          <div className={styles.serviceCard}>
            <h3>Mobile App Development</h3>
            <ul>
              <li>iOS App Development</li>
              <li>Android App Development</li>
              <li>Cross-Platform Development (e.g., React Native, Flutter)</li>
            </ul>
          </div>
          <div className={styles.serviceCard}>
            <h3>UI/UX Design</h3>
            <ul>
              <li>User Interface (UI) Design</li>
              <li>User Experience (UX) Research & Strategy</li>
              <li>Wireframing & Prototyping</li>
              <li>Usability Testing</li>
            </ul>
          </div>
          <div className={styles.serviceCard}>
            <h3>Consulting & Strategy</h3>
            <ul>
              <li>Technical Consultation</li>
              <li>Project Planning & Scoping</li>
              <li>Digital Transformation Strategy</li>
            </ul>
          </div>
          <div className={styles.serviceCardFull}>
            <h3>Additional Services (as applicable):</h3>
            <ul>
              <li>API Development & Integration</li>
              <li>Cloud Infrastructure Setup & Management</li>
              <li>Database Design & Optimization</li>
              <li>SEO Optimization</li>
            </ul>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2>B. Booking Slots & Engagement Process:</h2>
        <p>To streamline our collaboration, we've implemented a clear process for booking and project initiation.</p>
        <div className={styles.processSteps}>
          <div className={styles.step}>
            <h4>Initial Consultation:</h4>
            <p>Schedule a free 30-minute discovery call to discuss your project requirements and goals.</p>
            <p><em>Link to Calendar/Booking Tool:</em> <a href="[Your Calendly Link]" target="_blank" rel="noopener noreferrer">[e.g., Calendly link]</a></p>
          </div>
          <div className={styles.step}>
            <h4>Project Proposal & Estimation:</h4>
            <p>Following the consultation, we'll provide a detailed proposal outlining the scope, deliverables, timeline, and cost estimate.</p>
          </div>
          <div className={styles.step}>
            <h4>Contract & Agreement:</h4>
            <p>Upon agreement, a formal contract will be signed, detailing terms of service, intellectual property, and payment schedules.</p>
          </div>
          <div className={styles.step}>
            <h4>Secure Payment Workflow:</h4>
            <p><strong>Payment Gateways:</strong> We utilize secure and reliable payment gateways for all transactions. (e.g., Stripe, PayPal)</p>
            <p><strong>Payment Milestones:</strong> Projects are typically structured with milestone-based payments (e.g., 25% upfront, 25% at midway, 50% upon completion).</p>
            <p><strong>Invoicing:</strong> Professional invoices will be provided for all payments.</p>
            <p><strong>Payment Security:</strong> We prioritize security with measures like SSL encryption and PCI compliance for online transactions.</p>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2>C. Engagement Models (For Freelancing/Agency):</h2>
        <ul className={styles.engagementModels}>
          <li><strong>Project-Based:</strong> Fixed price for a defined scope of work.</li>
          <li><strong>Hourly Rate:</strong> Suitable for ongoing support, smaller tasks, or projects with evolving requirements.</li>
          <li><strong>Retainer Model:</strong> For long-term partnerships requiring consistent availability (e.g., monthly hours).</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2>D. What to Expect from Our Process:</h2>
        <ul className={styles.expectations}>
          <li><strong>Transparency:</strong> Clear communication at every stage of the project.</li>
          <li><strong>Regular Updates:</strong> Scheduled progress reports and client meetings.</li>
          <li><strong>Quality Assurance:</strong> Rigorous testing and quality checks before delivery.</li>
          <li><strong>Post-Launch Support:</strong> Assistance with deployment and initial support.</li>
        </ul>
      </section>
    </div>
  );
};

export default ServicesPage;
