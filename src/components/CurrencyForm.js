import React from "react";
import SelectInput from "./SelectInput";
import InputForm from "./InputForm";

const CurrencyForm = ({ currencyProps }) => {
   const { fxData,
           baseCurrency,
           targetCurrency,
           inputAmount,
           recordInputAmount,
           getFXData,
           selectCurrency,
           switchCurrency } = currencyProps;
   const baseSelect = <SelectInput data = {{[ baseCurrency ] : 1 }}
                                 type = "baseCurrency"
                                 selected = { baseCurrency }
                                 selectCurrency = { selectCurrency }/>;
   const targetSelect = fxData.rates ? <SelectInput data = { fxData.rates }
                                                  type = "targetCurrency"
                                                  selected = { targetCurrency }
                                                  selectCurrency = { selectCurrency }/> : false;
   return(
      <div className = "formParent row">
         <div className = "selectorsContainer">
            { baseSelect }
            { targetSelect }
            <div className = "switch waves-effect waves-light btn"
                 onClick = { switchCurrency }>Switch</div>
         </div>
         <InputForm inputAmount = { inputAmount }
                    recordInputAmount = { recordInputAmount }
                    getFXData = { getFXData }
                    baseCurrency = { baseCurrency }/>
      </div>
   );
};

export default CurrencyForm;

