import React from "react";

const Total = ({ baseCurrency, targetCurrency, inputAmount, targetRate }) => {
   return(
      <div className = "container row">
         <h4 className = "col s4">{ `${ baseCurrency } ${ inputAmount }` }</h4>
         <h4 className = "col s4"> = </h4>
         <h4 className = "col s4">{ `${ targetCurrency } ${ inputAmount * targetRate }`}</h4>
      </div>
   );
};

export default Total;