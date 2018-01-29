import '../styles/App.css';
import React, { Component } from 'react';
import CurrencyForm from "./CurrencyForm";
import Total from "./Total";
import FXTable from "./FXTable";


class App extends Component{

  constructor(){
    super();
    this.state = {
      baseCurrency : "GBP",
      targetCurrency : "EUR",
      inputAmount : 1,
      fxData : {}
    }
    this.getFXData = this.getFXData.bind( this );
    this.selectCurrency = this.selectCurrency.bind( this );
    this.switchCurrency = this.switchCurrency.bind( this );
    this.recordInputAmount = this.recordInputAmount.bind( this );
  }

  componentDidMount(){
    this.getFXData( this.state.baseCurrency );
  }

  // fetch fx data from fixer api & store in state
  getFXData( base ){
    fetch( `https://api.fixer.io/latest?base=${ base }` )
        .then(( res ) => res.json())
        .then(( data ) => this.setState({
          fxData : data
        }));
  }

  // input amount stored in state
  recordInputAmount( inputAmount ){
    this.setState({
      inputAmount
    })
  }

  // record the currency
  selectCurrency( baseOrTarget, currency ){
    this.setState({
      [ baseOrTarget ] : currency,
    });
  }

  // switch the two (base & target) currencies around
  switchCurrency(){
    let targetCurrency = this.state.targetCurrency;
    this.setState({
      baseCurrency : targetCurrency,
      targetCurrency : this.state.baseCurrency
    });
    this.getFXData( targetCurrency );
  }

  render(){
    let propsForCurrencyForm = {
      fxData : this.state.fxData,
      baseCurrency : this.state.baseCurrency,
      targetCurrency : this.state.targetCurrency,
      inputAmount : this.state.inputAmount,
      recordInputAmount : this.recordInputAmount,
      getFXData : this.getFXData,
      selectCurrency : this.selectCurrency,
      switchCurrency : this.switchCurrency
    }
    return(
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Currency Converter</h1>
        </header>
        <div className = "container">
          <CurrencyForm currencyProps = { propsForCurrencyForm }/>
          { this.state.fxData.rates ? 
              <Total baseCurrency = { this.state.baseCurrency }
                     targetCurrency = { this.state.targetCurrency }
                     inputAmount = { this.state.inputAmount }
                     targetRate = { this.state.fxData.rates[ this.state.targetCurrency ]}/> : false }
        </div>
        { this.state.fxData.rates ? 
            <FXTable rates = { this.state.fxData.rates }/> : false }
      </div>
    );
  }
}

export default App;
