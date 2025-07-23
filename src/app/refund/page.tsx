import React from "react";
import { Column, Heading, Text } from "@/once-ui/components";

export default function RefundPage() {
  return (
    <Column padding="l" horizontal="center" fillWidth>
      <Heading as="h1" size="xl" marginY="l">Refund & Cancellation Policy</Heading>
      <Text as="p" marginBottom="m">
        Thank you for choosing our services. We strive to provide the best possible experience. Please read our refund and cancellation policy carefully.
      </Text>
      <Heading as="h2" size="l" marginY="m">Refund Policy</Heading>
      <Text as="p" marginBottom="m">
        We offer a 30-day money-back guarantee for most of our services. If you are not satisfied with our service within 30 days of purchase, you may request a full refund. Refunds will be processed within 7-10 business days.
      </Text>
      <Heading as="h2" size="l" marginY="m">Cancellation Policy</Heading>
      <Text as="p" marginBottom="m">
        You may cancel your subscription or service at any time. For monthly subscriptions, cancellations will take effect at the end of the current billing cycle. For annual subscriptions, a pro-rata refund may be issued based on the unused portion of the service.
      </Text>
      <Heading as="h2" size="l" marginY="m">Exceptions</Heading>
      <Text as="p" marginBottom="m">
        Please note that some services may have different refund or cancellation terms, which will be clearly stated at the time of purchase. Custom development projects are generally non-refundable once work has commenced.
      </Text>
      <Heading as="h2" size="l" marginY="m">Contact Us</Heading>
      <Text as="p" marginBottom="m">
        If you have any questions about our refund and cancellation policy, please contact us at info@example.com.
      </Text>
    </Column>
  );
}
