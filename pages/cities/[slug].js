import { useRouter } from "next/router";
import { cities } from "@/lib/data";
import Image from "next/image";
import styled from "styled-components";

const Card = styled.div`
  max-width: 600px;
  margin: 100px auto;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  text-align: center;
`;

const Title = styled.h1`
  margin-bottom: 10px;
`;

const Paragraph = styled.p`
  margin-bottom: 8px;
`;

const HomeLink = styled.a`
  display: block;
  color: #0070f3;
  text-align: left;
  text-decoration: none;
  font-weight: bold;
  &:hover {
    text-decoration: underline;
  }
`;

export default function City() {
  const router = useRouter();

  if (!router.query) {
    return null;
  }
  const { slug } = router.query;
  const city = cities.find((city) => city.slug === slug);

  if (!city) {
    return null;
  }

  return (
    <Card>
      <HomeLink href="/cities">Back</HomeLink>
      <Title>{city.name}</Title>
      <Paragraph>Country: {city.country}</Paragraph>
      <Paragraph>Description: {city.description}</Paragraph>
      <Paragraph>Population: {city.population}</Paragraph>
      <Image src={city.picture} alt={city.name} width={400} height={300} />
    </Card>
  );
}
