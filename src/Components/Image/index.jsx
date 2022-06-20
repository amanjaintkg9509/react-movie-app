import React from "react";
import PropTypes from 'prop-types';

const Image = ({poster}) => {
    let styles ={
            width: '100%',
            height: '650px'
    }
  return (
    <>
      <img src={poster} style={styles} alt={'Movie pic'}/>
    </>
  );
};

export default Image;

Image.defaultProps = {
  poster: "",
}

Image.propTypes = {
  poster: PropTypes.string.isRequired
};