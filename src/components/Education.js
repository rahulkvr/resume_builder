import React, { useState, useContext } from "react";
import DataContext from "./GlobalContext";

const Education = () => {
  const context = useContext(DataContext)

  const initialValues = {
    institute: "",
    year: "",
    degree: "",
  };

  const [eduState, setEduState] = useState(initialValues);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEduState({
      ...eduState,
      [name]: value,
    });
  };

  return (
    <div>
      <h1>Educational Details </h1>
      <label>Institute</label>
      <input
        type="text"
        name="institute"
        id="institute"
        onChange={handleChange}
      />
      <label>Year </label>
      <input type="text" name="year" id="year" onChange={handleChange} />
      <label>Degree </label>
      <input type="text" name="degree" id="degree" onChange={handleChange} />
      <p>{context}</p>
    </div>
  );
};

export default Education;
