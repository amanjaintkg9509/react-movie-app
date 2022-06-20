import React from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Container} from 'react-bootstrap';

const Header = ({title}) => {
  return (
    <Navbar collapseOnSelect expand="lg" style={{"backgroundColor": "gray" }} variant="dark">
        <Container>
            <Navbar.Brand href="#">{title}</Navbar.Brand>
        </Container>
    </Navbar>
  )
}

export default Header;

Header.defaultProps = {
  title: "Home",
}

Header.propTypes = {
  title: PropTypes.string
};