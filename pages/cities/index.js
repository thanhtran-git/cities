import { cities } from "@/lib/data";
import styled from "styled-components";

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
  margin-bottom: 40px;
`;

const List = styled.ul`
  list-style: none;
`;

const ListItem = styled.li`
  margin-bottom: 10px;
`;

const StyledLink = styled.a`
  color: #0070f3;
  font-size: 1.5rem;
  text-decoration: none;
  font-weight: bold;
  &:hover {
    text-decoration: underline;
  }
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

function Cities() {
  return (
    <Card>
      <HomeLink href="/">Home</HomeLink>
      <Title>Cities</Title>
      <List>
        {cities.map((city) => (
          <ListItem key={city.id}>
            <StyledLink href={`/cities/${city.slug}`}>{city.name}</StyledLink>
          </ListItem>
        ))}
      </List>
    </Card>
  );
}
export default Cities;
