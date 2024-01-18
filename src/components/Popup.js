
function Popup(props) {
  return (props.trigger) ? (
    <div className='fixed top-0 left-0 w-screen h-screen flex justify-center items-center'>
      {props.children}
    </div>
  ) : ""
}

export default Popup
