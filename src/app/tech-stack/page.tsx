import React from 'react';
import techStackData from './tech-stack-data.json';
import styles from './TechStack.module.scss'; // We'll create this SCSS module next

interface TechItem {
  appName: string;
  category: string;
  type: string;
  description: string;
  usage: string;
  documentationLinks: {
    official?: string;
    communityTutorials?: string;
  };
  installationSetup: string;
  selfHostedOption: string;
  integrationExamples?: string[];
  keyServicesUsed?: string[];
  costManagementStrategies?: string[];
  collaborationFeatures?: string[];
}

const TechStackPage = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Tech Stack</h1>
        <p>Our technology stack is carefully chosen to ensure robust, scalable, and efficient solutions. We categorize our tools and platforms for better understanding:</p>
      </header>

      <section className={styles.coreCategories}>
        <h2>A. Core Categories & Usage:</h2>
        <ul>
          <li>
            <strong>Free/Open Source:</strong> Tools and platforms available without licensing costs, often with strong community support.
            <br />
            <em>Example Sub-categories: Development Tools, Libraries, Frameworks, Hosting Platforms (e.g., Linux, Apache, MySQL, PHP/Python/Node.js, Git, VS Code).</em>
          </li>
          <li>
            <strong>Subscription-Based:</strong> Services requiring ongoing payments, often offering managed solutions, enhanced features, and dedicated support.
            <br />
            <em>Example Sub-categories: Cloud Platforms (e.g., AWS, Google Cloud, Azure), SaaS Applications (e.g., project management, CRM, email marketing), Development Environments (e.g., JetBrains IDEs).</em>
          </li>
        </ul>
      </section>

      <section className={styles.applicationDeepDive}>
        <h2>B. Application Deep Dive:</h2>
        <div className={styles.grid}>
          {(techStackData as TechItem[]).map((item, index) => (
            <div key={index} className={styles.card}>
              <h3>{item.appName}</h3>
              <p><strong>Category:</strong> {item.category}</p>
              <p><strong>Type:</strong> {item.type}</p>
              <p>{item.description}</p>
              <p><strong>Usage:</strong> {item.usage}</p>
              {item.documentationLinks && (
                <div className={styles.docLinks}>
                  <strong>Documentation:</strong>
                  <ul>
                    {item.documentationLinks.official && (
                      <li>
                        <a href={item.documentationLinks.official} target="_blank" rel="noopener noreferrer">
                          Official Docs
                        </a>
                      </li>
                    )}
                    {item.documentationLinks.communityTutorials && (
                      <li>
                        <a href={item.documentationLinks.communityTutorials} target="_blank" rel="noopener noreferrer">
                          Community Tutorials
                        </a>
                      </li>
                    )}
                  </ul>
                </div>
              )}
              <p><strong>Installation/Setup:</strong> {item.installationSetup}</p>
              <p><strong>Self-Hosted Option:</strong> {item.selfHostedOption}</p>
              {item.integrationExamples && item.integrationExamples.length > 0 && (
                <div>
                  <strong>Integration Examples:</strong>
                  <ul>
                    {item.integrationExamples.map((example, i) => <li key={i}>{example}</li>)}
                  </ul>
                </div>
              )}
              {item.keyServicesUsed && item.keyServicesUsed.length > 0 && (
                <div>
                  <strong>Key Services Used:</strong>
                  <ul>
                    {item.keyServicesUsed.map((service, i) => <li key={i}>{service}</li>)}
                  </ul>
                </div>
              )}
              {item.costManagementStrategies && item.costManagementStrategies.length > 0 && (
                <div>
                  <strong>Cost Management Strategies:</strong>
                  <ul>
                    {item.costManagementStrategies.map((strategy, i) => <li key={i}>{strategy}</li>)}
                  </ul>
                </div>
              )}
              {item.collaborationFeatures && item.collaborationFeatures.length > 0 && (
                <div>
                  <strong>Collaboration Features:</strong>
                  <ul>
                    {item.collaborationFeatures.map((feature, i) => <li key={i}>{feature}</li>)}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default TechStackPage;
