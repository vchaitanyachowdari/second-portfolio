import { Column, Heading } from "@/once-ui/components";
import { Projects } from "@/components/work/Projects";
import { baseURL } from "@/app/resources";
import { resources, person } from "@/app/resources/content";
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

export default function Resources() {
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
          url: `${baseURL}/resources`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Heading marginBottom="l" variant="display-strong-s">
        {resources.title}
      </Heading>
      <Column
        fillWidth flex={1}>
        <Projects range={[1,1]} thumbnail direction="column"/>
        <Projects range={[2,3]} thumbnail/>
        <Projects range={[4]} columns="2"/>
      </Column>
    </Column>
  );
} 