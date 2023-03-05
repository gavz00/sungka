import Cell from "./Cell";
import StorageCell from "./StorageCell";

import classes from "./CellCluster.module.css";

function CellCluster(props) {
  let playerCells = renderCells(props.player);
  function renderCells(playStr) {
    let tempPlayer = [];
    for (let index = 0; index < props.cellCount; index++) {
      tempPlayer.push(
        <td
          className={
            props.player === "p2" ? props.player + "_cell" : classes.p1_cell
          }
        >
          <Cell
            className={classes.cell_container}
            player={playStr}
            index={index}
            beadCount={6}
          />
          <button className={classes.cell_btn}>move</button>
        </td>
      );
    }
    tempPlayer.push(
      <td>
        <StorageCell player={props.player} />
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
