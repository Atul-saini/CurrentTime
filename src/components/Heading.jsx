import React from "react";
function Heading() {
  const date = new Date();
  const currentTime = date.getHours();
  let hour = currentTime;
  const time = date.getMinutes();
  const status = hour >= 12 ? "pm" : "am";
  let greeting;

  const customStyle = {
    color: ""
  };

  if (currentTime < 12) {
    greeting = "Good Morning";
    customStyle.color = "red";
  } else if (currentTime < 18) {
    greeting = "Good Afternoon";
    customStyle.color = "green";
  } else {
    greeting = "Good Night";
    customStyle.color = "blue";
  }
  return (
    <div>
      <h2>
        Current Time is {currentTime}.{time} {status}
      </h2>
      <h1 className="heading" style={customStyle}>
        {greeting}
      </h1>
    </div>
  );
}
export default Heading;
