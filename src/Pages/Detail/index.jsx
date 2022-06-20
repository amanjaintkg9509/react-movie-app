import React,{ useEffect,useState } from 'react';
import {useParams } from "react-router-dom";
import DetailBody from '../../Components/DetailBody';
import Header from '../../Components/Header';
import Image from '../../Components/Image';
import Loader from "../../Components/Loader";

const axios = require("axios").default;

const Detail = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [loader, setLoader] = useState(true);
  
  let { id } = useParams();
  useEffect(()=>{
    setLoader(true);
    axios
      .get('http://www.omdbapi.com/?apikey=b9bd48a6&i='+id)
      .then((_res) => {
        setData(_res.data)
        setLoader(false);
      })
      .catch((error) => {
        setData({});
        setLoader(false);
        setError(error.message);
      });
  },[id]);
  return (
    <>
        <Header title={'Detail'}/>
        {data && !loader ?<Image poster={data.Poster}/>:""}
        {data && !loader ?<DetailBody data={data}/>:<Loader/>}
    </>
  )
}

export default Detail;