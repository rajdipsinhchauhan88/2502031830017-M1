function Hello(props) {

  function getName() {
    return props.name;
  }

  function handleclick() {
    alert("clicked successfully");
  }

  const handleInput = (event) => {
    console.log(event.target.value);
  };

  return (
    <>
      <h2>Hello {getName()}</h2>

      <button onClick={handleclick}>
        Click Me
      </button>

      <br /><br />

      <input
        type="text"
        placeholder="Type Something"
        onChange={handleInput}
      />
    </>
  )
}

export default Hello