import React from "react";
import Profile from "./profile/profile";
import "./App.css";

function App() {
  let data = {
    fullname: "jaballah dorsaf",
    bio: "student",
    profession: "dev fullsatcK"
  };

  const handleName = e => {
     e.preventDefault();
    alert(data.fullname);
  };
  const style = {
    width: "600px",
    height: "600px",
    borderRadius: "10px",
    border: "1px solid black",
    marginTop: "10px"
  };
  
  return (
    <div className="App">
      <br/>
      <Profile data={data}>
        <img
          onClick={handleName}
          style={style}
          alt="img"
          src="/profile.jpg"
        />
      </Profile>
      <br/>
    </div>
  );
}

export default App;