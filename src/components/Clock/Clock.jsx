import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import useClock from '../../Customes_Hook/useClock';

Clock.propTypes = { };

function formatDate(date) {
    

    const hours = `0${date.getHours()}`.slice(-2);
    const minutes = `0${date.getMinutes()}`.slice(-2);
    const seconds = `0${date.getSeconds()}`.slice(-2);
    return `${hours}:${minutes}:${seconds}`;
}

function Clock(props) {
   const {timeString} = useClock();
    return (
        <p style={{fontSize: '42px'}}>{timeString}</p>
    );
}

export default Clock;