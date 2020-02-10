import React from "react";
import "./App.scss";
//Component
import Header from "./component/header/Header";
import LargeHero from "./component/LargeHero/LargeHero";
import Card from "./component/card/Card";
import SectionForm from "./component/sectionForm/SectionForm";

function App() {
  return (
    <div>
      <Header></Header>
      <LargeHero></LargeHero>
      <Card></Card>
      <SectionForm></SectionForm>
    </div>
  );
}

export default App;
