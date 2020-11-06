import React from "react";
import Activity from "./Activity.js";
import { useSelector } from "react-redux";
import { useState } from "react";
import AddActivity from "./AddActivity.js";

const Workouts = () => {
  const allActivities = useSelector((state) => state.activities);
  const [add, setAdd] = useState(false);
  return (
    <div className="workouts-wrapper">
      <h2>Personal Workouts</h2>
      <button onClick={() => setAdd(!add)}> Add Activity </button>
      {add && <AddActivity />}
      {allActivities.map((activity) => {
        console.log(activity);
        return (
          <Activity
            key={activity.id}
            id={activity.id}
            name={activity.name}
            duration={activity.duration}
          />
        );
      })}
    </div>
  );
};

export default Workouts;
