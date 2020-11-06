import React, { useState } from "react";

const AddActivity = () => {
  const [info, setInfo] = useState({});

  const handleChange = (e) => {
    e.preventDefault();
    setInfo((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    console.log(info)
  };
  return (
    <div className="add">
      <div className="input-section">
        <p>Activity:</p>
        <input
          name="{name}"
          onChange={(e) => handleChange(e)}
          placeholder="Add an activity"
        />
      </div>
      <div className="input-section">
        <p>Duration:</p>
        <input
          name="{duration}"
          onChange={(e) => handleChange(e)}
          placeholder="Add Duration"
        />
      </div>
    </div>
  );
};

export default AddActivity;
