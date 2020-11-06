import React from "react";

function Activity({ id, name, duration }) {
  return (
    <div className="activity-wrapper">
      <p>
        Activity: {name}, Duration: {duration}
      </p>
      <button>Delete</button>
    </div>
  );
}

export default Activity;
