"use client";

import React from 'react';
import { Column, Heading, Text } from '@/once-ui/components';
import { ToolCard } from '@/components/tools/ToolCard';
import toolsData from './tools.json';

interface Tool {
  id: string;
  name: string;
  description: string;
  link: string;
}

const ToolsPage = () => {
  return (
    <Column maxWidth="l" gap="xl" horizontal="center">
      <Column fillWidth paddingY="24" gap="m">
        <Column maxWidth="s">
          <Heading variant="display-strong-l">Our Custom Tools</Heading>
          <Text variant="heading-default-xl" onBackground="neutral-weak">
            Explore a collection of custom-built tools designed to streamline your workflows and enhance productivity.
          </Text>
        </Column>
      </Column>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', width: '100%' }}>
        {(toolsData as Tool[]).map((tool) => (
          <ToolCard
            key={tool.id}
            name={tool.name}
            description={tool.description}
            link={tool.link}
          />
        ))}
      </div>
    </Column>
  );
};

export default ToolsPage;
