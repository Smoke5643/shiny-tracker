// import React from "react";
// import { Link } from "react-router-dom";
// import styled from "styled-components";
// import '../App.css'

// import Header from "./Header";

// const List = styled.ul`
//   font-size: 1.25em;
//   color: white;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   text-align: center;
//   padding-inline-start: 0px;
//   margin-top: 100px;

//   ul {
//     font-size: 0.8em;
//     margin: 20px;
//   }
//   ul li {
//     margin: 0;
//   }
// `;

// function Home() {
//   React.useEffect(() => {
//     document.title = "Shiny Tracker: Up-to-date checklists for all your Pokémon";
//   }, []);

//   return (
//     <React.Fragment>
//       <Header title="Shiny Tracker"></Header>
//       <div>
//         <List>
//         <Link to="/shiny-tracker/shiny">Shiny Dex</Link>
//           <ul>
//             <li>Track your shiny National Dex completion.</li>
//           </ul>
//           <Link to="/shiny-tracker/dex">Dex</Link>
//           <ul>
//             <li>Track your National Dex completion.</li>
//           </ul>
//           <Link to="/shiny-tracker/godex">Go Dex</Link>
//           <ul>
//             <li>Track your Pokémon Go Dex completion.</li>
//           </ul>
//           <Link to="/shiny-tracker/unown">Unown Dex</Link>
//           <ul>
//             <li>Track how many Unown you own.</li>
//           </ul>
//           <Link to="/shiny-tracker/shinyunown">Shiny Unown Dex</Link>
//           <ul>
//             <li>Track how many shiny Unown you own.</li>
//           </ul>

//           <Link to="/shiny-tracker/lucky">Lucky Dex</Link>
//           <ul>
//             <li>Track how many lucky Pokémon you’ve acquired.</li>
//           </ul>
//           <Link to="/shiny-tracker/shadow">Shadow Dex</Link>
//           <ul>
//             <li>Track how many shadow Pokémon you have.</li>
//           </ul>
//         </List>
//       </div>
//     </React.Fragment>
//   )
// }

// export default Home;

import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Header from "./Header";

const Container = styled.div`
  background-color: #303030;
  padding: 20px 0;
`;

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, calc((2/3 * 100vw - 40px) / 3)));
  grid-gap: 20px;
  justify-content: center;
  margin: 100px auto 0; /* Center the container horizontally */
  max-width: calc(2/3 * 100vw); /* Limit container width to 2/3 of viewport width */

  @media (max-width: 1024px) {
    grid-template-columns: repeat(auto-fit, minmax(300px, calc((1/2 * 100vw - 40px) / 2)));
  }

`;




const Card = styled(Link)`
  display: block;
  background-color: #a9a9a9;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  text-align: center;
  transition: transform 0.3s ease;
  cursor: hand;
  text-decoration: none;

  &:hover {
    transform: translateY(-5px);
  }

  &:hover h2 {
    color: #445ba1;
  }

  h2 {
    color: #333;
    font-weight: bold;
    font-size: 1.5em;
    margin-bottom: 10px;
  }

  p {
    color: #333;
    font-size: 1.3em;
  }
`;

const Home = () => {
  React.useEffect(() => {
    document.title = "Shiny Tracker: Up-to-date checklists for all your Pokémon";
  }, []);

  return (
    <React.Fragment>
      <Header title="Shiny Tracker" />
      <Container>
      <CardContainer>
        <Card to="/shiny-tracker/shiny">
          <h2>Shiny Dex</h2>
          <p>Track your shiny National Dex completion.</p>
        </Card>
        <Card to="/shiny-tracker/dex">
          <h2>Dex</h2>
          <p>Track your National Dex completion.</p>
        </Card>
        <Card to="/shiny-tracker/godex">
          <h2>Go Dex</h2>
          <p>Track your Pokémon Go Dex completion.</p>
        </Card>
        <Card to="/shiny-tracker/unown">
          <h2>Unown Dex</h2>
          <p>Track how many Unown you own.</p>
        </Card>
        <Card to="/shiny-tracker/shinyunown">
          <h2>Shiny Unown Dex</h2>
          <p>Track how many shiny Unown you own.</p>
        </Card>
        <Card to="/shiny-tracker/lucky">
          <h2>Lucky Dex</h2>
          <p>Track how many lucky Pokémon you’ve acquired.</p>
        </Card>
        <Card to="/shiny-tracker/shadow">
          <h2>Shadow Dex</h2>
          <p>Track how many shadow Pokémon you have.</p>
        </Card>
      </CardContainer>
      </Container>
    </React.Fragment>
  );
};

export default Home;



