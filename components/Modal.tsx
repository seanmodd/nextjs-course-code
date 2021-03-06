function Modal(props) {
  function cancelHandler() {
    props.onCancel();
  }
  function confirmHandler() {
    props.onConfirm();
  }
  return (
    <>
      <div className="modal">
        <h2>OPTION 1</h2>
        <button className="btn btn--alt" onClick={cancelHandler}>
          Cancel
        </button>
        <h2>OPTION 2</h2>
        <button className="btn" onClick={confirmHandler}>
          CONFIRM
        </button>
      </div>
    </>
  );
}
export default Modal;
