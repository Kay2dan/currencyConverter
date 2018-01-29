import React from "react";

const InputForm = ({ inputAmount, recordInputAmount, getFXData, baseCurrency }) => {

   const handleSubmit = ( e ) => {
      e.preventDefault();
      getFXData( baseCurrency );
   };

   return(
      <form onSubmit = { handleSubmit }>
         <input type = "text"
                value = { inputAmount }
                onChange = { e => recordInputAmount( e.target.value )}
                className = ""/>
         <input type = "submit"
                value = "Submit"
                className = "waves-effect waves-light btn"/>
      </form>
   );
};

export default InputForm;