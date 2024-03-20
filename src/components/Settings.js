import React from "react";
import styled from "styled-components";

import DexModes from "../services/DexModes";
import SortModes from "../services/SortModes";

const Dialog = styled.div`
  position: absolute;
  top: 33em;
  border-color: black;
  border-width: 1px 0;
  border-style: solid;
  padding: 2em;
  width: 100%;
  background: white;
  box-sizing: border-box;

  h2 {
    margin: 0em;
    font-size: 1.75em;
  }
  p {
    margin: 0 0 1.5em 0;
  }
  > div {
    margin: 2em 0;
    display: flex;
  }
  label {
    margin-right: 10px;
    min-width: 10em;
  }
  select {
    flex: 2;
    font-size: 16px;
  }
  button {
    width: 100%;
    border: 1px solid black;
    padding: 1em;
    border: 1px solid #2AB3FF;
    background: white;
    color: #2AB3FF;
    font-size: 0.9em;
    cursor: pointer;
  }
  .primary {
    background-color: #2AB3FF;
    color: white;
    border: none;
    margin-bottom: 1em;
  }
`;

const CheckAllButton = styled.button`
  width: 100%;
  border: 1px solid black;
  padding: 2em;
  border: 1px solid #2AB3FF;
  background: white;
  color: #2AB3FF;
  font-size: 0.9em;
  cursor: pointer;
`;
const UncheckAllButton = styled.button`
  width: 100%;
  border: 1px solid black;
  padding: 2em;
  border: 1px solid #2AB3FF;
  background: white;
  color: #2AB3FF;
  font-size: 0.9em;
  cursor: pointer;
`;

export default function Settings(props) {
  const { visible, onVisibleChange, sortOrder,
      onSortOrderChange, pageMode } = props;

  const hideSettings = () => {
    onVisibleChange(false);
  }

  const changeSortOrder = (e) => {
    const newSortOrder = e.target.value;
    onSortOrderChange(newSortOrder);
  }

  const checkAllMons = () => {
    props.checkAllMons();
  }

  const uncheckAllMons = () => {
    props.uncheckAllMons();
  }

  return (
    <Dialog style={{ display: visible ? "block": "none" }}>
      <h2>Settings</h2>

      <div>
        <label htmlFor="sortOrder">Sort order:</label>
        <select id="sortOrder" value={sortOrder} onChange={changeSortOrder}>
          {pageMode !== DexModes.UNOWN &&
            <option value={SortModes.ID}>Pokédex Number</option>}
          <option value={SortModes.NAME}>Name</option>
          <option value={SortModes.CHECKED}>Checked</option>
        </select>
      </div>

      <CheckAllButton onClick={checkAllMons}>Check All</CheckAllButton>      
      <UncheckAllButton onClick={uncheckAllMons}>Check All</UncheckAllButton>      

      <button onClick={hideSettings}>Close</button>
    </Dialog>
  );
}
