import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import List from "./Pages/List";
import Detail from "./Pages/Detail";
import NoPage from "./Pages/NoPage";
require('./index.css');

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<List />}/>
          <Route path="detail/:id" element={<Detail />} />
          <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
