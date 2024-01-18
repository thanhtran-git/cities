import styled from "styled-components";

const Card = styled.div`
  max-width: 400px;
  margin: 100px auto;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  text-align: center;
`;

const Title = styled.h1`
  margin-bottom: 20px;
`;

const StyledLink = styled.a`
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
    </Card>
  );
}

export default HomePage;
