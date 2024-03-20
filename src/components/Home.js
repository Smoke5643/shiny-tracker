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
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
`;

const Card = styled.div`
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin: 20px;
  text-align: center;
  width: 300px;

  a {
    color: #333;
    text-decoration: none;
    font-weight: bold;
  }

  p {
    margin-top: 10px;
    color: #666;
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
        <Card>
          <Link to="/shiny-tracker/shiny">Shiny Dex</Link>
          <p>Track your shiny National Dex completion.</p>
        </Card>
        <Card>
          <Link to="/shiny-tracker/dex">Dex</Link>
          <p>Track your National Dex completion.</p>
        </Card>
        <Card>
          <Link to="/shiny-tracker/godex">Go Dex</Link>
          <p>Track your Pokémon Go Dex completion.</p>
        </Card>
        <Card>
          <Link to="/shiny-tracker/unown">Unown Dex</Link>
          <p>Track how many Unown you own.</p>
        </Card>
        <Card>
          <Link to="/shiny-tracker/shinyunown">Shiny Unown Dex</Link>
          <p>Track how many shiny Unown you own.</p>
        </Card>
        <Card>
          <Link to="/shiny-tracker/lucky">Lucky Dex</Link>
          <p>Track how many lucky Pokémon you’ve acquired.</p>
        </Card>
        <Card>
          <Link to="/shiny-tracker/shadow">Shadow Dex</Link>
          <p>Track how many shadow Pokémon you have.</p>
        </Card>
      </Container>
    </React.Fragment>
  );
};

export default Home;

