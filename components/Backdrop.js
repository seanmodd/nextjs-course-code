function Backdrop(props) {
  function backdropHandler() {
    props.onBackdrop();
  }

  return (
    <div className="backdrop" onClick={backdropHandler} />
  );
}
export default Backdrop;
