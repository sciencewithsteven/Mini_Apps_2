import React from 'react';
import axios from 'axios';
import DataChart from './DataChart.js';
import Loader from './Loader.js';


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      btcData: [],
      loading: true,
      currentPrice: '',
      currency: '',
      currencyCode: ''
    };

  }

  componentDidMount() {
    this.fetchCurrentPrice();
    this.fetchHistoricalPrice();
  }

  fetchCurrentPrice() {

    axios('/current')
    .then(btc => {
      let bit = btc.data.USD;

      this.setState({
      currentPrice: bit.rate,
      currency: bit.symbol,
      currencyCode: bit.code
      })

    })
    .catch(error => console.error(error));
  }

  fetchHistoricalPrice() {

    axios('/history')
    .then(btc => {

      this.setState({
      btcData: btc.data,
      loading: false
      })

    })
    .catch(error => console.error(error));
  }


  render() {
    const { btcData, currentPrice, currencyCode, loading } = this.state;
    const loadingStyles = {
      margin: "25% auto",
      textAlign: "center"
    };
    return (
      <React.Fragment>

        {loading
          ? <div style={loadingStyles}>
              <Loader />
            </div>
          : <DataChart
              historicalData={btcData}
              usd={currencyCode}
              currentValue={currentPrice} />}

      </React.Fragment>
    );
  }
}


export default App;