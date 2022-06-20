
function DropdownList(props) {
  let styles = {
    width: '40%',
    height: '38px',
    border: 'none'
  }
  return (
    <>
      <select style={styles}>
        <option>All</option>
      </select>
    </>
  );
}

export default DropdownList;