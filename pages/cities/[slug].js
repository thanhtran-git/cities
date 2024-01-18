import { useRouter } from "next/router";
import { cities } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

const Card = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const Title = styled.h1`
  margin-bottom: 10px;
`;

const Paragraph = styled.p`
  margin-bottom: 8px;
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
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
      <Link href="/cities">Back</Link>
      <Title>{city.name}</Title>
      <Paragraph>Country: {city.country}</Paragraph>
      <Paragraph>Description: {city.description}</Paragraph>
      <Paragraph>Population: {city.population}</Paragraph>
      <ImageContainer>
        <Image src={city.picture} alt={city.name} width={400} height={300} />
      </ImageContainer>
    </Card>
  );
}
