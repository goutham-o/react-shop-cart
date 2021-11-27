import Header from './components/Header';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Product from './components/Product';
import Cart from './components/Cart';

function App() {
  return (
    <Router>
      <Header />
      <div className='container-fluid'>
        <Route path='/' component={Product} exact />
        <Route path='/cart' component={Cart} exact />
      </div>
    </Router>
  );
}

export default App;
