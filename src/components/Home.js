import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import '../App.css'

import Header from "./Header";

const List = styled.ul`
  font-size: 1.25em;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding-inline-start: 0px;
  margin-top: 100px;

  ul {
    font-size: 0.8em;
    margin: 20px;
  }
  ul li {
    margin: 0;
  }
`;

function Home() {
  React.useEffect(() => {
    document.title = "Shiny Tracker: Up-to-date checklists for all your Pokémon";
  }, []);

  return (
    <React.Fragment>
      <Header title="Shiny Tracker"></Header>
      <div>
        <List>
        <Link to="/shiny-tracker/shiny">Shiny Dex</Link>
          <ul>
            <li>Track your shiny National Dex completion.</li>
          </ul>
          <Link to="/shiny-tracker/dex">Dex</Link>
          <ul>
            <li>Track your National Dex completion.</li>
          </ul>
          <Link to="/shiny-tracker/godex">Go Dex</Link>
          <ul>
            <li>Track your Pokémon Go Dex completion.</li>
          </ul>
          <Link to="/shiny-tracker/unown">Unown Dex</Link>
          <ul>
            <li>Track how many Unown you own.</li>
          </ul>
          <Link to="/shiny-tracker/shinyunown">Shiny Unown Dex</Link>
          <ul>
            <li>Track how many shiny Unown you own.</li>
          </ul>

          <Link to="/shiny-tracker/lucky">Lucky Dex</Link>
          <ul>
            <li>Track how many lucky Pokémon you’ve acquired.</li>
          </ul>
          <Link to="/shiny-tracker/shadow">Shadow Dex</Link>
          <ul>
            <li>Track how many shadow Pokémon you have.</li>
          </ul>
        </List>
      </div>
    </React.Fragment>
  )
}

export default Home;
