import React from 'react';
import { useSelector } from 'react-redux';
import { ItemsDisplay } from './components/ItemsDisplay';
import { selectGrandTotal } from '../Conference.selectors';
import "./TotalCost.css";

export const TotalCost = () => {
  const total_amount = useSelector(selectGrandTotal);

  return (
    <div className="pricing-app">
      <div className="header">
        <h3>Total cost for the event</h3>
      </div>
      <div className="price-body">
        <h2 className="price">${total_amount}</h2>
        <div className="render_items">
          <ItemsDisplay />
        </div>
      </div>
    </div>
  );
};