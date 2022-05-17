import { Col, Container, Row } from "react-bootstrap";
import { Component } from "react/cjs/react.development";
import chevron from "../chevron.svg";
import Quote from "./Quote";

class QuotesLoop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      quotes: [],
      quoteNumber: 0,
    };
  }

  componentDidMount() {
    fetch("http://localhost:5000/data")
      .then((result) => result.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            quotes: result,
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }

  subtractFromQuoteNumber() {
    this.setState((prevState) => {
      return {
        quoteNumber:
          prevState.quoteNumber - 1 < 0
            ? prevState.quotes.length - 1
            : prevState.quoteNumber - 1,
      };
    });
  }

  addToQuoteNumber() {
    this.setState((prevState) => {
      return {
        quoteNumber:
          prevState.quoteNumber + 1 > prevState.quotes.length - 1
            ? 0
            : prevState.quoteNumber + 1,
      };
    });
  }

  render() {
    const { error, isLoaded, quotes, quoteNumber } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div className="quotesLoop">
          <button
            className="column leftButton"
            type="button"
            onClick={this.subtractFromQuoteNumber.bind(this)}
          >
            <img src={chevron} className="w-auto" alt="Scroll Left" />
          </button>

          <Quote className="column quote" {...quotes[quoteNumber]} />

          <button
            className="column rightButton"
            type="button"
            onClick={this.addToQuoteNumber.bind(this)}
          >
            <img
              src={chevron}
              className="w-auto transform rotate-180"
              alt="Scroll right"
            />
          </button>
        </div>
      );
    }
  }
}

export default QuotesLoop;
