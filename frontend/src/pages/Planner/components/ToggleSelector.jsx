import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './ToggleSelector.css';

const ToggleCard = ({ item, onToggle }) => {
    return (
        <div
            className={`toggle-card ${item.selected ? 'active-card' : ''}`}
            onClick={onToggle}
        >
            <div className="checkbox-wrapper">
                <input
                    className="custom-checkbox"
                    type="checkbox"
                    checked={item.selected}
                    onChange={() => { }}
                />
                <div className="toggle-label">
                    <span className="item-name">{item.name}</span>
                    <span className="item-cost">${item.cost}</span>
                </div>
            </div>
        </div>
    );
};

export const ToggleSelector = ({ itemsSelector, quantitySelector, toggleAction, quantityAction, inputLabel = "Quantity" }) => {
    const dispatch = useDispatch();

    const items = useSelector(itemsSelector);
    const globalQuantity = useSelector(quantitySelector);

    const [localQuantity, setLocalQuantity] = useState(globalQuantity);

    useEffect(() => {
        dispatch(quantityAction(localQuantity));
    }, [localQuantity, dispatch, quantityAction]);

    const selectedTotal = items
        .filter(item => item.selected)
        .reduce((acc, item) => acc + item.cost, 0);

    const finalTotal = selectedTotal * localQuantity;

    return (
        <div className="generic-toggle-wrapper">
            <div className="global-input-container">
                <label htmlFor="global-qty">{inputLabel}: </label>
                <input
                    type="number"
                    id="global-qty"
                    value={localQuantity}
                    onChange={(e) => setLocalQuantity(parseInt(e.target.value, 10) || 0)}
                    min="1"
                    className="global-input"
                />
            </div>

            <div className="toggle-grid">
                {items.map((item) => (
                    <ToggleCard
                        key={item.id}
                        item={item}
                        onToggle={() => dispatch(toggleAction(item.id))}
                    />
                ))}
            </div>

            <div className="section-total">Total Cost: ${finalTotal}</div>
        </div>
    );
};