// components/Button.jsx

const Button = () => {
  const buttonStyle = {
    padding: "10px 20px",
    fontSize: "16px",
    color: "#fff",
    backgroundColor: "#007bff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  };

  const handleClick = () => {
    alert("Button clicked!");
  };

  return (
    <button style={buttonStyle} onClick={handleClick}>
      Click Me
    </button>
  );
};

export default Button;
