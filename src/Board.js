import { useState, useEffect } from "react";

import classes from "./Board.module.css";
import CellCluster from "./CellCluster";

function Board() {
  let cellCount = 5;
  const [board, setBoard] = useState([
    {
      player: "Player 1",
      beadsInCell: [6, 6, 6, 6, 6],
      storageCell: 0,
    },
    {
      player: "Player 2",
      beadsInCell: [6, 6, 6, 6, 6],
      storageCell: 0,
    },
  ]);
  const [renderBoard, setRenderBoard] = useState();

  function move(id, player, cells, storageCell) {
    console.log(player + " Move cell: " + id);
    console.log(cells);
    console.log(board.find((playerSet) => playerSet.player === player));
    // board.find((playerSet) => {
    //   if (playerSet.player === player) {
    //     console.log(
    //       "Prev beads in cell" + id + ": " + playerSet.beadsInCell[id]
    //     );
    //     setBoard((prevBoard) => ({
    //       beadsInCell: cells,
    //       ...prevBoard,
    //     }));
    //   }
    // });
    const updateBoard = board.map((playerSet, i) => {
      let pIindex = board.findIndex((playerSet) => playerSet.player === player);
      let prevBeads = 0;
      if (pIindex === i) {
        prevBeads = playerSet.beadsInCell[id];
        console.log(
          "Prev beads in cell" + id + ": " + playerSet.beadsInCell[id]
        );
        playerSet.beadsInCell = cells;
        playerSet.beadsInCell.forEach((x, i, arr) => {
          console.log("current [" + pIindex + "]:" + playerSet.beadsInCell);

          if (prevBeads !== 0) {
            if (i > id) {
              console.log("[" + i + "]:" + x);
              if (prevBeads !== 0) {
                arr[i] += 1;
              }
              --prevBeads;
            }
          }

          console.log("return [" + i + "]:" + x);
          return x;
        });
        console.log(playerSet);
      }
      if (prevBeads > 0) {
        playerSet.storageCell += 1;
      }

      return playerSet;
    });
    console.log(updateBoard);

    setBoard(updateBoard, ...board);
  }

  function getPlayerBeadsArray(cluster) {
    console.log(cluster);
  }

  useEffect(() => {
    function initRenderBoard() {
      let tempBoard = [];

      board.forEach((playerSet) => {
        tempBoard.push(
          <tr>
            <>
              <CellCluster
                key={playerSet.player}
                player={playerSet.player}
                cells={playerSet.beadsInCell}
                storageCell={playerSet.storageCell}
                btn_move={move}
                getPlayerBeadsArray={getPlayerBeadsArray}
              />
            </>
          </tr>
        );
      });
      return <table>{tempBoard}</table>;
    }

    return () => {
      setRenderBoard(initRenderBoard());
    };
  }, [board]);

  return <div className={classes.board}>{renderBoard}</div>;
}

export default Board;
