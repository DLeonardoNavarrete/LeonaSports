import React from 'react';

const OrderItem = ({ order, onUpdateStatus, onDelete }) => {
  return (
    <div className={`order-card status-${order.status.toLowerCase()}`}>
      <div className="order-info">
        <strong>{order.customer}</strong>
        <span>${order.amount}</span>
      </div>
      <div className="order-actions">
        <select 
          value={order.status} 
          onChange={(e) => onUpdateStatus(order.id, e.target.value)}
        >
          <option value="Pendiente">Pendiente</option>
          <option value="Preparando">En Preparación</option>
          <option value="Enviado">Enviado</option>
        </select>
        <button onClick={() => onDelete(order.id)}>✕</button>
      </div>
    </div>
  );
};

export default OrderItem;