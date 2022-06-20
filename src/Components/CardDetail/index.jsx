import Card from 'react-bootstrap/Card';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
require('./style.css');
function CardDetail(props) {
  return (
    <>
      <Card>
        <Link to={"detail/"+props.keyId}>
        <Card.Img variant="top" src={props.img}/>
        <Card.Body>
          <Card.Text>
            {props.title}
          </Card.Text>
        </Card.Body>
        </Link>
      </Card>
    </>
  );
}

export default CardDetail;

CardDetail.defaultProps = {
  title: "Hello, My Name Is Doris",
  keyId: "tt3766394",
  img: "https://m.media-amazon.com/images/M/MV5BMTg0NTM3MTI1MF5BMl5BanBnXkFtZTgwMTAzNTAzNzE@._V1_SX300.jpg"
}

CardDetail.propTypes = {
  title: PropTypes.string,
  keyId: PropTypes.string,
  img: PropTypes.string
};