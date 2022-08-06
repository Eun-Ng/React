import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './components/home/Home';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import PageNotFound from './components/pageNotFound/PageNotFound';
import MovieDetail from './components/movieDetail/MovieDetail';
import './App.scss';

const App = () => {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Header />
          <div className='container'>
            <Route path='/' exact component={Home} />
            <Route path='/movie/:imdbID' component={MovieDetail} />
            <Route component={PageNotFound} />
          </div>
          <Footer />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default App;
