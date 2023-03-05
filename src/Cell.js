import { useState } from "react";

function Cell(props) {
  const [beadCount, setBeadCount] = useState(props.beadCount);
  const [player, setPlayer] = useState(props.player);
  return (
    <div className={props.className} key={props.index}>
      <p lassName={"beads_count"}>{beadCount}</p>
      <div className={"beads"}>
        ***
        <br />
        ***
      </div>
    </div>
  );
}

export default Cell;
