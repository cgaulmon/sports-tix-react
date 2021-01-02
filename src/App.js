
import Footer from './layout/Footer';
import Header from './layout/Header'

import './App.css';
import Navbar from './layout/Navbar';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom'
import SearchBar from './components/SearchBar';
function App() {
  return (
    <div className="App">
     <Header/>
     <Navbar/>
     <SearchBar/>
     <Router>
       <Route exact={true} path="/">
         <div>Welcome Home</div>
         <Link to={'/sports/45'}>Test Link 45</Link><br/>
         <Link to={'/blahblah'}>BlahBlah</Link>
       </Route>
       <Route path="/sports/:sportId" render={({match}) => (
         <h3 className="text-danger">Hello Sport: {match.params.sportId}</h3>
        )}/>
        <Route path="/pages/404" render={() => (
          <h1 className="text-warning">404 Not Found</h1>
        )}></Route>     
      </Router>
     <Footer/>
    </div>
  );
}

export default App;
