import Cell from "./Cell";
import StorageCell from "./StorageCell";

import classes from "./CellCluster.module.css";
import { useState, useEffect } from "react";

function CellCluster(props) {
  const [beadCount, setBeadCount] = useState(5);
  const [storedBeads, setStoredBeads] = useState(0);
  const [playerCells, setPlayerCells] = useState({
    player: props.player,
    cells: [beadCount, beadCount, beadCount, beadCount, beadCount],
    storageCell: "0",
  });

  function getPlayerBeadsArray(playerCells) {
    props.getPlayerBeadsArray(playerCells);
  }
  let initCells = renderCells(playerCells);

  useEffect(() => {
    return () => {
      initCells = renderCells(playerCells);
    };
  }, [playerCells.cells]);

  function btn_move(index) {
    let tempCells = playerCells.cells;
    tempCells[index] = 0;
    setPlayerCells((prePlayerCells) => ({
      cells: tempCells,
      ...prePlayerCells.cells,
    }));
    console.log(playerCells);
    props.btn_move(index);
  }
  function renderCells(playerCells) {
    let tempPlayer = [];
    for (let index = 0; index < playerCells.cells.length; index++) {
      tempPlayer.push(
        <td
          className={
            props.player === "p2" ? props.player + "_cell" : classes.p1_cell
          }
          key={index}
        >
          <Cell
            className={classes.cell_container}
            player={playerCells.player}
            key={index}
            beadCount={playerCells.cells[index]}
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
    if (playerCells.player === "p1") {
      tempPlayer.reverse();
    }
    return tempPlayer;
  }

  return <>{initCells}</>;
}

export default CellCluster;
