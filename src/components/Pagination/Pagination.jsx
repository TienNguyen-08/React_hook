import React from 'react';
import PropTypes from 'prop-types';

Pagination.propTypes = {
    pagination: PropTypes.object.isRequired,
    onChangepage: PropTypes.func,
};

Pagination.defaultProps = {
    onChangepage: null
}


function Pagination(props) {
    const {pagination, onChangepage} = props;
    const {_page, _limit, _totalRows } = pagination;
    const totalPages = Math.ceil(_totalRows / _limit)

    function handlePagechange (newPage) {
        if(onChangepage) {
            onChangepage(newPage);
        }
    }
    return (
        <div>
            <button disabled={_page <= 1} onClick={()=>{
                handlePagechange(_page - 1)
            }}>
                Prev
            </button>
            <button disabled={_page >= totalPages} onClick={()=>{
                handlePagechange(_page + 1)
            }}>
                next
            </button>
        </div>
    );
}

export default Pagination;