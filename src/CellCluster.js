import Cell from "./Cell";
import StorageCell from "./StorageCell";

import classes from "./CellCluster.module.css";
import { useState } from "react";

function CellCluster(props) {
  const [beadCount, setBeadCount] = useState(6);
  const [storedBeads, setStoredBeads] = useState(0);
  const [playerCells, setPlayerCells] = useState(renderCells(props.player));

  function getPlayerBeadsArray(playerCells) {
    props.getPlayerBeadsArray(playerCells);
  }

  getPlayerBeadsArray(playerCells);

  function btn_move(index) {
    props.btn_move(index);
  }

  function renderCells(playStr) {
    let tempPlayer = [];
    for (let index = 0; index < props.cellCount; index++) {
      tempPlayer.push(
        <td
          className={
            props.player === "p2" ? props.player + "_cell" : classes.p1_cell
          }
          key={index}
        >
          <Cell
            className={classes.cell_container}
            player={playStr}
            key={index}
            beadCount={beadCount}
          />
          <button
            onClick={(e) => {
              e.preventDefault();
              btn_move(index);
            }}
            className={classes.cell_btn}
          >
            move
          </button>
        </td>
      );
    }
    tempPlayer.push(
      <td>
        <StorageCell player={props.player} storedBeads={storedBeads} />
      </td>
    );
    if (playStr === "p1") {
      tempPlayer.reverse();
    }
    return tempPlayer;
  }

  return <>{playerCells}</>;
}

export default CellCluster;
