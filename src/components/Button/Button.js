const Button = (props) => (
  <button 
    className={`btn ${props.type}`}
    onClick={props.buttonHandler}
  >
    {props.text}
  </button>
)

export default Button