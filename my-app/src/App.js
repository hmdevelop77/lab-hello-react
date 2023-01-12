// import logo from './logo.svg';
import myLogo from "./images/ironhack-logo-xs.png";
import myMenu from "./images/menu-top-xs.png";
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
      <div></div>
    </div>
  );
}

export default App;
