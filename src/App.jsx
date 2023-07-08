import React from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
import ProductList from './components/ProductList';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <Provider store={store}>
      <Navbar />
      <ProductList />
    </Provider>
  );
};

export default App;
