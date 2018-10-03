import React, {Component} from 'react';
import ReactDOM from 'react-dom';

const symbol = 'FB';

class StockChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      bid: '',
      ask: ''
    };
  }

  componentDidMount() {
    const stockQuoteUrl = 'https://api.robinhood.com/quotes/?symbols=FB';
    fetch(stockQuoteUrl)
     .then(data => {return data.json()})
     .then(results => this.setState({ bid: results.results[0].bid_price, ask: results.results[0].ask_price}))
     event.preventDefault();
  }

  componentDidUpdate() {
    console.log(this.state.bid)
  }

  render() {
    const {bid, ask} = this.state;
    return (
      <div>
      <div>
      Bid: {bid}<br />
      Ask: {ask}
      </div>
      </div>

    );
  }


}

export default StockChart;
