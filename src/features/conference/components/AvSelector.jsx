import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { incrementAvQuantity, decrementAvQuantity } from '../slices/avSlice';
import { ItemCard } from './ItemCard';
import './Selector.css'

export const AvSelector = () => {
    const avItems = useSelector((state) => state.av);
    const dispatch = useDispatch();
    const totalCost = avItems.reduce((total, item) => total + (item.cost * item.quantity), 0);

    return (
        <div id="addons" className="selection-container">
            <h2>Add-ons Selection</h2>
            <div className="item-grid">
                {avItems.map((item) => (
                    <ItemCard
                        key={item.id}
                        item={item}
                        onIncrement={() => dispatch(incrementAvQuantity(item.id))}
                        onDecrement={() => dispatch(decrementAvQuantity(item.id))}
                    />
                ))}
            </div>
            <div className="section-total">Total Add-ons Cost: ${totalCost}</div>
        </div>
    );
};