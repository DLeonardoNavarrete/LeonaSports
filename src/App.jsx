import { useState } from 'react';
import OrderForm from './components/OrderForm';
import OrderItem from './components/OrderItem';
import './diseño/App.css';

const App = () => {
  const [orders, setOrders] = useState([]);

  const addOrder = (newOrder) => {
    setOrders([...orders, { ...newOrder, id: Date.now() }]);
  };

  const updateStatus = (id, newStatus) => {
    setOrders(orders.map(order => 
      order.id === id ? { ...order, status: newStatus } : order
    ));
  };

  const deleteOrder = (id) => {
    setOrders(orders.filter(order => order.id !== id));
  };

  return (
    <div className="container">
      <h1>Gestión de Pedidos</h1>
      <OrderForm onAddOrder={addOrder} />
      
      <div className="orders-list">
        {orders.map(order => (
          <OrderItem 
            key={order.id} 
            order={order} 
            onUpdateStatus={updateStatus} 
            onDelete={deleteOrder}
          />
        ))}
      </div>
    </div>
  );
};

export default App;