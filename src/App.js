import "./App.css";
import officeLogo from "./the_office_logo.svg";
import QuotesLoop from "./quotes/QuotesLoop";

function App() {
  return (
    <div className="container">
      <img src={officeLogo} className="w-64" alt="The Office" />
      {<QuotesLoop />}
    </div>
  );
}

export default App;
