function StorageCell(props) {
  return (
    <div className="p1-storage" rowSpan={2}>
      <p>{props.storedBeads}</p>
      <p>{props.player}</p>
    </div>
  );
}

export default StorageCell;
