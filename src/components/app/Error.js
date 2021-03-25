import React from 'react';
import './styles.css';
import PropTypes from 'prop-types';

const Error = ({mensaje}) => {
    return ( 
        <p className="error">{mensaje}</p>
     );
}

Error.propTypes = {
    mensaje: PropTypes.string.isRequired
}
 
export default Error;