import styled from "styled-components";
import Navigation from "./components/Navigation.js";
import SearchBar from "./components/SearchBar.js";
import Dropdown from "./components/Dropdown.js";
import Card from "./components/Card.js";

const Container = styled.div`
  margin: 1.5rem;

  @media (min-width: 1000px) {
    margin: 0 4rem;

    .flex {
      display: flex;
      justify-content: space-between;
      margin: 1rem 0;
    }

    .grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 4rem;
    }
  }
`;

function App() {
  return (
    <>
      <Navigation />
      <Container>
        <div className="flex">
          <SearchBar />
          <Dropdown />
        </div>
        <div className="grid">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </Container>
    </>
  );
}

export default App;
