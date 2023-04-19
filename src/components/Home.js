import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import '../App.css'

import Header from "./Header";

const List = styled.ul`
  font-size: 1.25em;
  color: white;

  li {
    margin: 20px;
  }
  ul {
    font-size: 0.8em;
    margin: 0;
  }
  ul li {
    margin: 0;
  }
`;

function Home() {
  React.useEffect(() => {
    document.title = "Shiny Tracker: Up-to-date checklists for shiny Pokémon";
  }, []);

  return (
    <React.Fragment>
      <Header title="Shiny Tracker"></Header>

      <List>
        <li>
          <Link to="/shiny-tracker/dex">Dex</Link>
          <ul>
            <li>Track your National Dex completion.</li>
          </ul>
        </li>
        <li>
          <Link to="/shiny-tracker/shiny">ShinyDex</Link>
          <ul>
            <li>Track your shiny National Dex completion.</li>
          </ul>
        </li>
        <li>
          <Link to="/shiny-tracker/unown">UnownDex</Link>
          <ul>
            <li>Track how many Unown you own.</li>
          </ul>
        </li>
        <li>
          <Link to="/shiny-tracker/shinyunown">ShinyUnownDex</Link>
          <ul>
            <li>Track how many shiny Unown you own.</li>
          </ul>
        </li>
        <li>
          <Link to="/shiny-tracker/godex">GoDex</Link>
          <ul>
            <li>Track your Pokémon Go Dex completion.</li>
          </ul>
        </li>
        <li>
          <Link to="/shiny-tracker/lucky">LuckyDex</Link>
          <ul>
            <li>Track how many lucky Pokémon you’ve acquired.</li>
          </ul>
        </li>
        <li>
          <Link to="/shiny-tracker/shadow">ShadowDex</Link>
          <ul>
            <li>Track how many shadow Pokémon you have.</li>
          </ul>
        </li>
      </List>
    </React.Fragment>
  )
}

export default Home;
