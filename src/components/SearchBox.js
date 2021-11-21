import React from "react";



const SearchBox =({searchfield,search}) =>
{
    return(
        <div>
        <input
         className='pa3 ba--green bg-lightest-blue' 
         type='search'
         placeholder='search robots'
         onChange={search}
         />
         </div>
    );
}

export default SearchBox;