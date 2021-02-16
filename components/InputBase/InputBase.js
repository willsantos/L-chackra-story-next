import "./Input.css";

function InputBase(props) {
  const { size = "sm", color = "red", ...rest } = props;
  return (
    <input
      placeholder="Digite seu texto aqui"
      className={`Input-text ${size} ${color}`}
    />
  );
}

export default InputBase;
