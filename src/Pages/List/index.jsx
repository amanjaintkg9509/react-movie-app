import React, { useEffect, useState } from "react";
import CardDetail from "../../Components/CardDetail";
import { Container, Row, Col } from "react-bootstrap";
import Header from "../../Components/Header";
import Search from "../../Components/Search";
import DropdownList from "../../Components/DropdownList";
import Loader from '../../Components/Loader';

const axios = require("axios").default;

const List = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("hello");
  const [loader, setLoader] = useState(true);

  function onKeyUp(event) {
    if (event.keyCode === 13) {
      setSearch(event.target.value);
    }
  }

  useEffect(() => {
    setLoader(true);
    axios
      .get("http://www.omdbapi.com/?apikey=b9bd48a6&s=" + search)
      .then((_res) => {
        setLoader(false);
        if (_res.data.Response !== "False") setData(_res.data.Search);
        else setData([]);
      })
      .catch((error) => {
        setLoader(false);
        setData([]);
        setError(error.message);
      });
  }, [search]);

  return (
    <>
      <Header title={"Search"} />
      <Search onKeyUp={onKeyUp} />
      <DropdownList />
      <Container>
        <Row>
          {loader === true ? (
            <Loader/>
          ) : data.length > 0 ? (
            data.map((el) => {
              return (
                <Col xs={6} md={4} lg={3} key={el.imdbID}>
                  <CardDetail title={el.Title} img={el.Poster} keyId={el.imdbID}/>
                </Col>
              );
            })
          ) : (
            <img src="./images/noData.png" alt="" height={500} width={500} />
          )}
        </Row>
      </Container>
    </>
  );
};

export default List;
