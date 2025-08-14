import React from 'react';
import './ItemCard.css';

export const ItemCard = ({ item, onIncrement, onDecrement }) => {
  return (
    <div className="item-card">
      <img src={item.img} alt={item.name} className="item-card-img" />
      <div className="item-card-name">{item.name}</div>
      <div className="item-card-cost">${item.cost}</div>
      <div className="item-card-controls">
        <button onClick={onDecrement} className="control-btn" disabled={item.quantity === 0}>-</button>
        <span className="item-card-quantity">{item.quantity}</span>
        <button onClick={onIncrement} className="control-btn">+</button>
      </div>
    </div>
  );
};