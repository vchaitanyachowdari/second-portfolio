import { Column, Heading, Flex, Text, SmartImage } from "@/once-ui/components";
import { Resources } from "@/components/resource/Resources";
import { baseURL } from "@/app/resources";
import { resources, person, resourcePages } from "@/app/resources/content";
import { Meta, Schema } from "@/once-ui/modules";

export async function generateMetadata() {
  return Meta.generate({
    title: resources.title,
    description: resources.description,
    baseURL: baseURL,
    image: `${baseURL}/og?title=${encodeURIComponent(resources.title)}`,
    path: resources.path,
  });
}

export default function ResourcePage() {
  return (
    <Column maxWidth="s">
      <Schema
        as="blog"
        baseURL={baseURL}
        title={resources.title}
        description={resources.description}
        path={resources.path}
        image={`${baseURL}/og?title=${encodeURIComponent(resources.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}/resource`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      {/* Resource Page Hero Section */}
      {resourcePages.map((item, idx) => (
        <Column
          key={idx}
          fillWidth
          align="center"
          style={{
            marginBottom: 40,
            background: "#f8fafc",
            borderRadius: 24,
            boxShadow: "0 4px 24px 0 rgba(0,0,0,0.06)",
            padding: 32,
          }}
        >
          {item.image && (
            <SmartImage
              src={item.image}
              alt={item.title}
              width={900}
              height={400}
              style={{
                borderRadius: 16,
                marginBottom: 24,
                objectFit: "cover",
                width: "100%",
                maxHeight: 220,
              }}
            />
          )}
          {item.tag && (
            <span
              style={{
                background: "#b2f5ea",
                color: "#234e52",
                borderRadius: 999,
                padding: "4px 18px",
                fontSize: 14,
                fontWeight: 700,
                letterSpacing: 0.5,
                marginBottom: 12,
                display: "inline-block",
              }}
            >
              {item.tag}
            </span>
          )}
          <Heading
            variant="display-strong-s"
            style={{
              marginBottom: 12,
              fontWeight: 800,
              fontSize: 32,
              color: "#22292f",
            }}
          >
            {item.title}
          </Heading>
          <Text
            variant="body-default-s"
            style={{ marginBottom: 16, color: "#4a5568", fontSize: 18 }}
          >
            {item.summary}
          </Text>
          {item.link && (
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                background: "linear-gradient(90deg, #38b2ac 0%, #4299e1 100%)",
                color: "#fff",
                borderRadius: 999,
                padding: "10px 22px",
                fontWeight: 700,
                fontSize: 16,
                textDecoration: "none",
                boxShadow: "0 2px 8px 0 rgba(56,178,172,0.10)",
                transition: "background 0.2s, color 0.2s",
                gap: 8,
                marginTop: 8,
              }}
            >
              Visit Resource
              <svg
                width="18"
                height="18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ marginLeft: 6 }}
              >
                <path
                  d="M7 11l5-5m0 0H8m4-0v4"
                  stroke="#fff"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          )}
        </Column>
      ))}
      {/* Resource Cards */}
      <Column fillWidth flex={1}>
        <Resources range={[1, 1]} columns="1" />
        <Resources range={[2, 3]} columns="2" />
        <Resources range={[4, 4]} columns="2" />
      </Column>
    </Column>
  );
} 
