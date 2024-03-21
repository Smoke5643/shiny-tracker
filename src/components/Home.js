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
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 20px;
  justify-content: center;
  margin-top: 100px;
  padding: 0 20px; 
`;

const CardLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const Card = styled.div`
  background-color: #9f9f9f;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  text-align: center;
  height: 100%; 

  &:hover {
    background-color: #ccc; 
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
        <CardLink to="/shiny-tracker/shiny">
          <Card>
            <h3>Shiny Dex</h3>
            <p>Track your shiny National Dex completion.</p>
          </Card>
        </CardLink>
        <CardLink to="/shiny-tracker/dex">
          <Card>
            <h3>Dex</h3>
            <p>Track your National Dex completion.</p>
          </Card>
        </CardLink>
        <CardLink to="/shiny-tracker/godex">
          <Card>
            <h3>Go Dex</h3>
            <p>Track your Pokémon Go Dex completion.</p>
          </Card>
        </CardLink>
        <CardLink to="/shiny-tracker/unown">
          <Card>
            <h3>Unown Dex</h3>
            <p>Track all your Unown.</p>
          </Card>
        </CardLink>
        <CardLink to="/shiny-tracker/shinyunown">
          <Card>
            <h3>Shiny Unown Dex</h3>
            <p>Track all you shiny Unown variants.</p>
          </Card>
        </CardLink>
        <CardLink to="/shiny-tracker/lucky">
          <Card>
            <h3>Pogo Lucky Dex</h3>
            <p>Track all your lucky Pokemon in Go.</p>
          </Card>
        </CardLink>
        <CardLink to="/shiny-tracker/shadow">
          <Card>
            <h3>Pogo Shadow Dex</h3>
            <p>Track all your shadow Pokemon in Go.</p>
          </Card>
        </CardLink>
      </Container>
    </React.Fragment>
  );
};

export default Home;

