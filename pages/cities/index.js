import { cities } from "@/lib/data";
import Link from "next/link";
import styled from "styled-components";

const Card = styled.div`
  max-width: 400px;
  margin: 100px auto;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const Title = styled.h1`
  margin-bottom: 20px;
`;

const List = styled.ul`
  list-style: none;
`;

const ListItem = styled.li`
  margin-bottom: 10px;
`;

const StyledLink = styled.a`
  color: #0070f3;
  text-decoration: none;
  font-weight: bold;
`;

function Cities() {
  return (
    <Card>
      <Link href="/">Home</Link>
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
