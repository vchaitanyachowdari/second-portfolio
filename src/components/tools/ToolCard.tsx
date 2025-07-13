"use client";

import React from 'react';
import { Column, Flex, Heading, Text, Button } from '@/once-ui/components';

interface ToolCardProps {
  name: string;
  description: string;
  link: string;
}

export const ToolCard: React.FC<ToolCardProps> = ({
  name,
  description,
  link,
}) => {
  return (
    <div style={{
      background: 'rgba(255, 255, 255, 0.1)',
      backdropFilter: 'blur(10px)',
      borderRadius: '12px',
      padding: '1.5rem',
      border: '1px solid rgba(255, 255, 255, 0.2)',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
    }}>
      <Column gap="m">
        <Heading as="h3" variant="heading-strong-l">
          {name}
        </Heading>
        <Text variant="body-default-m" onBackground="neutral-weak">
          {description}
        </Text>
      </Column>
      <Flex paddingTop="l">
        <Button
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          variant="primary"
          size="m"
          suffixIcon="arrowUpRightFromSquare"
        >
          Access Tool
        </Button>
      </Flex>
    </div>
  );
};
