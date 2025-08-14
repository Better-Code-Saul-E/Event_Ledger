import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { incrementVenueQuantity, decrementVenueQuantity } from '../slices/venueSlice';
import { ItemCard } from './ItemCard';
import './Selector.css';

export const VenueSelector = () => {
    const venueItems = useSelector((state) => state.venue);
    const dispatch = useDispatch();
    const totalCost = venueItems.reduce((total, item) => total + (item.cost * item.quantity), 0);

    return (
        <div id="venue" className="selection-container">
            <h2>Venue Room Selection</h2>
            <div className="item-grid">
                {venueItems.map((item) => (
                    <ItemCard
                        key={item.id}
                        item={item}
                        onIncrement={() => dispatch(incrementVenueQuantity(item.id))}
                        onDecrement={() => dispatch(decrementVenueQuantity(item.id))}
                    />
                ))}
            </div>
            <div className="section-total">Total Venue Cost: ${totalCost}</div>
        </div>
    );
};