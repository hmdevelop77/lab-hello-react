// import logo from './logo.svg';
import myLogo from "./images/ironhack-logo-xs.png";
import myMenu from "./images/menu-top-xs.png";
import declarative from "./images/icon1.png";
import components from "./images/icon2.png";
import single from "./images/icon3.png";
import JSX from "./images/icon4.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="first-div">
        <img className="logo" src={myLogo} alt="logo" />
        <img className="menu" src={myMenu} alt="menu" />
        <div className="insider">
          <h1 className="title">Say hello to ReactJS</h1>
          <p className="paragraphe">
            {" "}
            you will learn how to use the most ........
          </p>
          <button className="button">Awesome!</button>
        </div>
      </div>
      <div className="container">
      <div className="box">
      <img className="Declarative" src={declarative} alt="Declarative" />
      <h1>Declarative</h1>
      <p>sorry but i'm too lazy to write each paragraph, but i made it</p>
      </div>
      <div className="box">
      <img className="Components" src={components} alt="Components" />
      <h1>Components</h1>
      <p>sorry but i'm too lazy to write each paragraph, but i made it</p>
      </div>
      <div className="box">
      <img className="Single-Way" src={single} alt="Single-Way" />
      <h1>Single-Way</h1>
      <p>sorry but i'm too lazy to write each paragraph, but i made it</p>
      </div>
      <div className="box">
      <img className="JSX" src={JSX} alt="JSX" />
      <h1>JSX</h1>
      <p>sorry but i'm too lazy to write each paragraph, but i made it</p>
      </div>
    </div>
    </div>
  );
}

export default App;
