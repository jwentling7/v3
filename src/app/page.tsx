import { gql } from "@apollo/client";
import { getClient } from "@/graphql/GraphQLProvider";
import { HomePageQuery } from "@/graphql/graphql";
import Section from "@/components/Section";
import Button from "@/components/Button";
import ResumeButton from "@/components/ResumeButton";

const Home = async () => {
  const { data } = await getClient().query<HomePageQuery>({
    query: HOME_PAGE_QUERY,
  });

  return (
    <>
      <Section>
        <h1>{data.webPage?.header}</h1>
        <p>{data.webPage?.description}</p>
        <div className="flex gap-12">
          <ResumeButton />
          <Button href="#contact" variant="text">
            Contact
          </Button>
        </div>
      </Section>
      <Section>
        <h1>{data.webPage?.header}</h1>
        <p>{data.webPage?.description}</p>
        <div className="flex gap-12">
          <ResumeButton />
          <Button href="#contact">Contact</Button>
        </div>
      </Section>
    </>
  );
};

// Better way to store this information?
const HOME_PAGE_QUERY = gql`
  query HomePage {
    webPage(where: { name: "Home" }) {
      name
      header
      description
      webPageSections {
        header
        description
        name
        subHeader
      }
    }
  }
`;

export default Home;
