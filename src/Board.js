import StorageCell from "./StorageCell";

import classes from "./Board.module.css";
import Cell from "./Cell";
import CellCluster from "./CellCluster";

function Board() {
  let cellCount = 5;
  const p1Cells = renderCells("p1");
  const p2Cells = renderCells("p2");

  function renderCells(playStr) {
    let tempPlayer = [];
    for (let index = 0; index < cellCount; index++) {
      tempPlayer.push(<Cell player={playStr} index={index} beadCount={6} />);
    }
    return tempPlayer;
  }

  return (
    <div className={classes.board}>
      <table>
        <tr>
          <>
            <CellCluster player={"p1"} cellCount={cellCount} />
          </>
        </tr>
        <tr>
          <>
            <CellCluster player={"p2"} cellCount={cellCount} />
          </>
        </tr>
      </table>
    </div>
  );
}

export default Board;
