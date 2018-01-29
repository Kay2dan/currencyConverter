flatten([1, 2, [3, [[4], 5]], 6]); // [1, 2, 3, 4, 5, 6]
flatten({ hello: 1, world: [2, 3, { foo: [[4]]}] }); // [1, 2, 3, 4]

function flatten( arg ){
   let result = [];
   const values = getValues( arg );
   const append = function( arr ){
      arr.forEach(( val ) => {
         if( typeof( val ) === "object" ){
            const objValues = getValues( val );
            append( objValues );
         } else {
            result.push( val );
         }
      });
   };
   append( values );
   return result;
}

function getValues( obj ){
   return Object.values( obj );
}
