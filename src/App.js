
import React, { useEffect, useState } from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './Redux/store';
import axios from 'axios'
import ProductList from './Components/ProductList';
import Modal from './Components/PopUpModel';
import { MdShoppingCartCheckout } from 'react-icons/md';


function App() {
  const [product, setProduct] = useState();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    axios.get('https://boppotech.github.io/react-task-json.github.io/reactjob.json')
      .then(response => setProduct(response.data))

      .catch(error => console.error('Error fetching data:', error));
  }, []);

  console.log(product)
  return (
    <Provider store={store}>
      <div className="App">
        <h1>E-Commerce Products </h1>

        <button onClick={openModal}><MdShoppingCartCheckout/></button>
        <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        content={ <ProductList products={product} />}
      />
        <ProductList products={product} />
      </div>
    </Provider>
  );
}

export default App;
