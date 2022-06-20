import ColumData from "../ColumData";
import PropTypes from 'prop-types';

function DetailBody(props) {
  return (
    <>
      <h1 className="label p-2">
        {props.data.Title} - {props.data.Year}
      </h1>
      <div className="d-flex p-4 justify-content-between">
        <ColumData field={"Genre"} value={props.data.Genre} />
        <ColumData field={"Running Time"} value={props.data.Runtime} />
        <ColumData field={"IMDB Rating"} value={props.data.imdbRating} />
      </div>
      <div className="p-4">
        <ColumData field={"Released Date"} value={props.data.Released} />
        <ColumData field={"Language"} value={props.data.Language} />
        <ColumData field={"Country"} value={props.data.Country} />
        <ColumData field={"Plot"} value={props.data.Plot} />
        <ColumData field={"Director"} value={props.data.Director} />
        <ColumData field={"Actors"} value={props.data.Actors} />
        <ColumData field={"Writer"} value={props.data.Writer} />
      </div>
    </>
  );
}

export default DetailBody;

ColumData.defaultProps = {
  Genre: "",
  Runtime: "",
  imdbRating: "",
  Language: "",
  Plot: "",
  Director: "",
  Actors: "",
  Writer: ""
}

ColumData.propTypes = {
  Genre: PropTypes.string,
  Runtime: PropTypes.string,
  imdbRating: PropTypes.string,
  Language: PropTypes.string,
  Plot: PropTypes.string,
  Director: PropTypes.string,
  Actors: PropTypes.string,
  Writer: PropTypes.string
};