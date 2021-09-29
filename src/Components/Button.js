import "../styles/Button.css";

const Button = ({icontext,image}) => {
  return (
    <div id="button">
      <div id="button-content">
        <img src={image} alt="" width="20px" height="20px" />
        <p>{icontext}</p>
      </div>
    </div>
  );
};

export default Button;
