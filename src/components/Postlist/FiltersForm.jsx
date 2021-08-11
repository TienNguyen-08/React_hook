import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';

FiltersForm.propTypes = {
    onSubmit: PropTypes.func,
};

FiltersForm.defaultProps = {
    onSubmit: null,
}

function FiltersForm(props) {
    const {onSubmit} = props;
    const [searchItem, setSearchItem] = useState('');
    const typingTimeoutRef = useRef(null)

    function handleSearch(e){
        setSearchItem(e.target.value);

        if(!onSubmit) return;

        //set time out moi va clear time out cu di khi het trigger thi no submit
        if(typingTimeoutRef.current){
            clearTimeout(typingTimeoutRef.current);
        };

        typingTimeoutRef.current = setTimeout(()=>{
            const formValue = {
                searchItem: e.target.value,
            };
            onSubmit(formValue);
        }, 300)
    }
    return (
       <form >
           <input type='text' value = {searchItem} onChange={handleSearch}/>
       </form> 
    );
}

export default FiltersForm;