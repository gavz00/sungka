import Cell from "./Cell";
import StorageCell from "./StorageCell";

import classes from "./CellCluster.module.css";
import { useState, useEffect } from "react";

function CellCluster(props) {
  const [beadCount, setBeadCount] = useState(5);
  const { key, player, cells } = props;
  const [storedBeads, setStoredBeads] = useState(0);

  const [playerCells, setPlayerCells] = useState();

  let initCells = renderCells(player, cells);

  useEffect(() => {
    return () => {
      initCells = renderCells(player, cells);
    };
  }, [cells]);

  function btn_move(index) {
    let tempCells = [...cells];
    tempCells[index] = 0;
    setPlayerCells((prevPlayerCells) => ({
      cells: tempCells,
      ...prevPlayerCells,
    }));
    console.log(playerCells);
    props.btn_move(index, player, tempCells);
  }
  function renderCells(player, cells) {
    let tempPlayer = [];
    for (let index = 0; index < cells.length; index++) {
      tempPlayer.push(
        <td
          className={
            props.player === "p2" ? props.player + "_cell" : classes.p1_cell
          }
          key={index}
        >
          <Cell
            className={classes.cell_container}
            player={player}
            key={index}
            beadCount={cells[index]}
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
    if (player === "p1") {
      tempPlayer.reverse();
    }
    return tempPlayer;
  }

  return <>{initCells}</>;
}

export default CellCluster;
