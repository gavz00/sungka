import { useState, useEffect } from "react";

import classes from "./Board.module.css";
import CellCluster from "./CellCluster";

function Board() {
  let cellCount = 5;
  const [board, setBoard] = useState();

  function move(id) {
    console.log("Move cell: " + id);
  }

  function getPlayerBeadsArray(cluster) {
    console.log(cluster);
  }

  useEffect(() => {
    function initBoard() {
      return (
        <table>
          <tr>
            <>
              <CellCluster
                key="p1"
                player={"p1"}
                cellCount={cellCount}
                btn_move={move}
                getPlayerBeadsArray={getPlayerBeadsArray}
              />
            </>
          </tr>
          <tr>
            <>
              <CellCluster
                key="p2"
                player={"p2"}
                cellCount={cellCount}
                btn_move={move}
                getPlayerBeadsArray={getPlayerBeadsArray}
              />
            </>
          </tr>
        </table>
      );
    }
    return () => {
      setBoard(initBoard());
    };
  }, []);

  return <div className={classes.board}>{board}</div>;
}

export default Board;
