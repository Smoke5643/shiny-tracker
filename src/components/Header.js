import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const HeaderContainer = styled.h1`
  display: flex;
  align-items: center;
  background-color: #445ba1;
  color: white;
  margin: 0;
  padding: 0;
  font-size: 1.5em;
  text-align: center;

  span {
    display: inline-block;
    margin: 0.4em 0;
  }
  button {
    text-indent: -9999px;
    white-space: nowrap;
    border: none;
    background-color: transparent;
    background-repeat: no-repeat;
    background-size: 2.5em;
    background-position: 0.7em 0.3em;
    height: 3em;
    width: 4em;
    padding: 1em;
    outline: none;
    filter: invert(100%) sepia(0%) saturate(109%) hue-rotate(329deg)
      brightness(105%) contrast(102%);
    cursor: pointer;
  }
  .home {
    background-image: url(/shiny-tracker/images/home.svg);
  }
  .settings {
    background-image: url(/shiny-tracker/images/settings.svg);
  }
  .title {
    flex-grow: 2;
  }
  .filler {
    width: 2em;
  }
  .charm {
    height: 1.5em;
    margin-left: 8px;
    margin-right: 8px;
  }
`;

export default function Header({ title, settingsClick }) {
  const navigate = useNavigate();

  const navigateHome = () => {
    navigate("/shiny-tracker");
  };

  return (
    <HeaderContainer>
      {settingsClick && (
        <button className="home" onClick={navigateHome}>
          Home
        </button>
      )}

      <span className="title">
        
      <img className="charm" src="/shiny-tracker/images/shinycharm.png" alt="shiny charm"/>
        {title}
      <img className="charm" src="/shiny-tracker/images/shinycharm.png" alt="shiny charm"/>
      
      </span>

      {settingsClick && (
        <button className="settings" onClick={settingsClick}></button>
      )}
    </HeaderContainer>
  );
}
