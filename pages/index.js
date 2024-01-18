import styled from "styled-components";
import Image from "next/image";
import { imgUrl } from "@/lib/frontImage";

const Card = styled.div`
  max-width: 450px;
  height: 600px;
  margin: 100px auto;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  text-align: center;
`;

const Title = styled.h1`
  font-size: 2.5rem;
`;

const StyledLink = styled.a`
  font-size: 1.5rem;
  display: block;
  color: #0070f3;
  text-decoration: none;
  font-weight: bold;
  &:hover {
    text-decoration: underline;
  }
`;

function HomePage() {
  return (
    <Card>
      <Title>Cities App</Title>
      <StyledLink href="/cities">Show Cities</StyledLink>
      <Image src={imgUrl} alt="cities" width={320} height={450} />
    </Card>
  );
}

export default HomePage;
