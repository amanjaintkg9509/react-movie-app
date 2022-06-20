import PropTypes from 'prop-types';
require('./style.css');
function ColumData({field, value}) {
    return (
      <div className="d-flex flex-column">
        <span className="label">{field}</span>
        <span className="text">{value}</span>      
      </div>
    );
  }
  
  export default ColumData;

  ColumData.defaultProps = {
    field: "Title",
    value: "Hello, My Name Is Doris"
  }
  
  ColumData.propTypes = {
    field: PropTypes.string,
    value: PropTypes.string
  };