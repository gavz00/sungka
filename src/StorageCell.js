function StorageCell(props) {
  return (
    <div className="p1-storage" rowSpan={2}>
      <p>0</p>
      <p>{props.player}</p>
    </div>
  );
}

export default StorageCell;
