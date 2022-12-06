const StarbucksInput = ({ name, value, onChange, error }) => {
  return (
    <>
      <label htmlFor="starbuck"> {name} </label>
      <input
        type="text"
        id="starbuck"
        name={name}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      <span>{error}</span>
    </>
  );
};

export default StarbucksInput;
