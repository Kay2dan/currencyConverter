import React from "react";


const FXTable = ({ rates }) => {
   const fxKeys = Object.keys( rates ),
         fxValues = Object.values( rates );
   return(
      <div className = "container row gray">
         { fxValues.map(( rate, i ) => {

            return(
               <div className = "col s1" key = { `${ fxKeys[ i ]}` }>
                  <h5 className = "">{ fxKeys[ i ]}</h5>
                  <span className = "">{ rate }</span>
               </div>
            );
         })}
      </div>
   );
};

export default FXTable;