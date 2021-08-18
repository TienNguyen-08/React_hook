import React from 'react';
import PropTypes from 'prop-types';
import useMagicColor from '../../Customes_Hook/useMagicColor';
import './Magicbox.scss'

MagicBox.propTypes = {
    
};

function MagicBox(props) {
    const color = useMagicColor();
    return (
        <div className="magic_box" style={{backgroundColor: color}}></div>
    );
}

export default MagicBox;