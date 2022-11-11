// import { Link } from 'react-router-dom';

const Form = ({ location, setLocation, searchLocation }) => {

  const handleChange = (e) => {
    e.preventDefault();
    setLocation(e.target.value)
  }

  return (
    <form>
      {/* <Link to={'/details'}> */}
        <input
          value={location}
          onChange={(e) => handleChange(e)}
          onKeyPress={searchLocation}
          placeholder="Enter City Name"
          type="text"
        ></input>
      {/* </Link> */}
    </form>
  );
};

export default Form;
