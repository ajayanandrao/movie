import './App.scss';
import Navbar from './Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import MoviePagePorps from './Pages/Movies/Fifth shades dark/MoviePagePorps';
import ThorProps from './Pages/Movies/Thor/ThorProps';
import VikingProps from './Pages/Movies/Vikings/VikingProps';
import SpiderProps from './Pages/Movies/spider man/SpiderProps';
import SheHulkProps from './Pages/Movies/She Hulk/SheHulkProps';
import ExtractionProps from './Pages/Movies/Extraction/ExtractionProps';
import BlondeProps from './Pages/Movies/Blonde/BlondeProps';
import MinionsProps from './Pages/Movies/Minions/MinionsProps';
import ScrollToTop from './ScrollTop';

function App() {

  return (
    <>
      <Router basename='/movie'>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='default' element={<MoviePagePorps />} />

          <Route path="thor" element={<ThorProps />} />
          <Route path="vikings" element={<VikingProps />} />
          <Route path="spider" element={<SpiderProps />} />
          <Route path="sheHulk" element={<SheHulkProps />} />
          <Route path="extraction" element={<ExtractionProps />} />
          <Route path="blonde" element={<BlondeProps />} />
          <Route path="minions" element={<MinionsProps />} />
        </Routes>
      </Router>

    </>
  );
}

export default App;
