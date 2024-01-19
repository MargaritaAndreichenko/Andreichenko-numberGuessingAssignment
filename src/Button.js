const buttonStyle = {
  margin: "1em",
  borderRadius: "5px",
  minHeight: "2em",
};

const Button = ({ onClick, children }) => {
  return (
    <button style={buttonStyle} onClick={onClick} type="button">
      {children}
    </button>
  );
};
export default Button;
