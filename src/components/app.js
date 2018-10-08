import React, {Component} from 'react';
import ReactDOM from 'react-dom';

const symbol = 'FB';

class StockChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      bid: '',
      ask: '',
      instrument: '',
      popularity: ''
    };
  }

  componentDidMount() {
    const stockQuoteUrl = 'https://api.robinhood.com/quotes/?symbols=FB';
    fetch(stockQuoteUrl)
     .then(data => {return data.json()})
     .then(results => this.setState({ bid: results.results[0].bid_price, ask: results.results[0].ask_price, instrument: results.results[0].instrument.split('instruments/')[1].replace(/\/$/, "")}))
     event.preventDefault();
  }

  componentDidUpdate() {
    const popularityUrl = `https://api.robinhood.com/instruments/popularity/?ids=${this.state.instrument}`;
    fetch(popularityUrl)
     .then(data => {return data.json()})
     .then(results => this.setState({ popularity: results.results.num_open_positions}))
     event.preventDefault();
    console.log(this.state.instrument)
  }

  render() {
    const {bid, ask, instrument, popularity} = this.state;
    return (
      <div>
      <div>
      Bid: {bid}<br />
      Ask: {ask}<br />
      Instrument: {instrument}<br />
      Popularity: {popularity}
      </div>
      </div>

    );
  }


}

export default StockChart;
