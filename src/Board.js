import { useState, useEffect } from "react";

import classes from "./Board.module.css";
import CellCluster from "./CellCluster";

function Board() {
  let cellCount = 5;
  const [board, setBoard] = useState([
    {
      player: "Player 1",
      beadsInCell: [6, 6, 6, 6, 6],
      storageCell: "0",
    },
    {
      player: "Player 2",
      beadsInCell: [6, 6, 6, 6, 6],
      storageCell: "0",
    },
  ]);
  const [renderBoard, setRenderBoard] = useState();

  function move(id, player, cells) {
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
      if (pIindex === i) {
        playerSet.beadsInCell = cells;
        console.log(playerSet);
      }
      return playerSet;
    });
    console.log(updateBoard);

    setBoard(updateBoard, ...board);
    console.log(board);
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
