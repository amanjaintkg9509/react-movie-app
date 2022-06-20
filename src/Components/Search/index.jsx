import React from 'react';
import PropTypes from 'prop-types';

const Search = (props) => {
  let styles ={
    'margin': '12px 0 4px 8px',
    'width': '56%',
    'height': '38px',
    'outline': 'none',
    'paddingLeft': '12px',
    'border': 'none'
  }
  return (
    <>
        <input type={'search'} placeholder={'Movie Name'} style={styles} onKeyUp={props.onKeyUp}/>
    </>
  )
}

export default Search;

Search.defaultProps = {
  onKeyUp: function(){},
}

Search.propTypes = {
  onKeyUp: PropTypes.func.isRequired
};