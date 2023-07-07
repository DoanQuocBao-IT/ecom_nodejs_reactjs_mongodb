import React from 'react'
import {Container} from 'react-bootstrap'
import Header from './component/Header';
import Footer from './component/Footer';
import HomeScreen from './screeens/HomeScreen';
import {BrowserRouter as Router, Route,Routes} from 'react-router-dom'
import ProductScreen from './screeens/ProductScreen';

function App() {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
          <Routes>
            <Route path='/' element={<HomeScreen />} />
            <Route path='/product/:id' element={<ProductScreen />} />
          </Routes>
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
