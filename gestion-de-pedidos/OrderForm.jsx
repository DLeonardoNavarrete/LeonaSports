import { useState } from 'react';

const OrderForm = ({ onAddOrder }) => {
  const [customer, setCustomer] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!customer || !amount) return;
    onAddOrder({ customer, amount: parseFloat(amount), status: 'Pendiente', date: new Date() });
    setCustomer('');
    setAmount('');
  };

  return (
    <form onSubmit={handleSubmit} className="order-form">
      <input 
        type="text" 
        placeholder="Nombre del Cliente" 
        value={customer} 
        onChange={(e) => setCustomer(e.target.value)} 
      />
      <input 
        type="number" 
        placeholder="Total $" 
        value={amount} 
        onChange={(e) => setAmount(e.target.value)} 
      />
      <button type="submit">Registrar Pedido</button>
    </form>
  );
};

export default OrderForm;