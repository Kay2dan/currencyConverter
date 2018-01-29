import React from "react";

const SelectInput = ({ data, type, selected, selectCurrency }) => {
   return(
      <div className = " selectContainer col s3">
        <select name = "currency"
                value = { selected }
                onChange = {( e ) => selectCurrency( type, e.target.value )}
                className = "select">
           { Object.keys( data ).map(( currency, i ) => {
              return(
                 <option className = ""
                         value = { currency }
                         key = { `${ currency }-${ i }` }>
                    { currency }
                 </option>
              );
           })}
        </select>
      </div>
   );
};

export default SelectInput;
