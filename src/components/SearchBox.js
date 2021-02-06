import React from 'react';

const SearchBox=({searchChange})=>{
    return(
        <input className='pa3 ba b--green bg-lightest-blue'
            type='seach' 
            placeholder='Search Robot'
            onChange={searchChange}
            
        />
    );
}

export default SearchBox;