import React, { useState } from "react";
import Header from "./components/header";
import Main from "./components/main";
import Aside from "./components/aside";
import Footer from "./components/footer";

function App() {
  //title
  const helloThere = [
    "We swears to serve the master of the Precious!",
    "Good heavens, hello there!",
    "Third time pays for all!",
    "What in the Shire?",
    "Short cuts make long delays!",
    "Form ranks you maggots! Pikes in front, arches behind!"
  ];
  const pickGreeting =
    helloThere[Math.floor(Math.random() * helloThere.length)];

  //state
  const [isActive, setActive] = useState(false);
  const changeColor = () => {
    setActive(!isActive);
  };

  //days in a week
  const hobbitWeek = [
    "Monday",
    "Trewsday",
    "Hevensday",
    "Mersday",
    "Highday",
    "Sterday",
    "Sunday",
  ];
  const hobbitDay = hobbitWeek.map((day, index) => {
    return <li key={index}>{day}</li>;
  });

  return (
    <div className="App">
      <Header helloThere={pickGreeting} />
      <Main isActive={isActive} />
      <Aside hobbitDay={hobbitDay} />
      <Footer changeColor={changeColor} isActive={isActive} />
    </div>
  );
}

export default App;
