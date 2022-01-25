import React from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card";
import Data from "./components/Data";
import './style.css';

function App() {
  const cards = Data.map(item =>{
    return <Card
        key={item.id}
        item = {item}
      />
  })
  return (
    <div>
      <Navbar />
      <Hero />
      {/* <Card
        img="../images/katy-zaferes.png"
        rating="5"
        reviewCount="6"
        country="USA"
        title="Life lessons with Katie Zaferes"
        price={136} */}
      {/* /> */}
      <section className="card-list">
        {cards}
      </section>
    </div>
  );
}

export default App;
