import { useState } from "react";

function Cell(props) {
  function showBeads() {
    let beads = "";
    for (let x = 0; x < props.beadCount; x++) {
      beads += "o";
    }
    if (beads.length % 2 === 0) {
      let loc = beads.length / 2;
      beads = beads.slice(0, loc) + "\n" + beads.slice(loc);
    }
    return beads;
  }
  return (
    <div className={props.className} key={props.index}>
      <p className={"beads_count"}>{props.beadCount}</p>
      <div className={"beads"}>
        <span>{showBeads()}</span>
      </div>
    </div>
  );
}

export default Cell;
