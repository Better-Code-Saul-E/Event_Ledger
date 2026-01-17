import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './QuantitySelector.css';

export const QuantityCard = ({ item, onIncrement, onDecrement }) => {
    return (
        <div className={`simple-card ${item.quantity > 0 ? 'active-card' : ''}`}>
            <div className="simple-card-header">
                <h4 className="simple-card-title">{item.name}</h4>
                <p className="simple-card-cost">${item.cost}</p>
            </div>

            <div className="simple-card-actions">
                <button
                    className="simple-btn minus"
                    onClick={onDecrement}
                    disabled={item.quantity === 0}
                    aria-label="Decrease quantity">
                    -
                </button>
                <span className="simple-qty">{item.quantity}</span>
                <button
                    className="simple-btn plus"
                    onClick={onIncrement}
                    aria-label="Increase quantity"
                >
                    +
                </button>
            </div>
        </div>
    );
};

export const QuantitySelector = ({ itemsSelector, statusSelector, fetchAction, incrementAction, decrementAction, label = "Total Cost" }) => {
    const dispatch = useDispatch();

    const items = useSelector(itemsSelector);
    const status = useSelector(statusSelector);

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchAction());
        }
    }, [status, dispatch, fetchAction]);

    const safeItems = items || [];
    const totalCost = safeItems.reduce((total, item) => total + (item.cost * item.quantity), 0);

    return (
        <div className="selection-wrapper">
            <div className="simple-item-grid">
                {safeItems.map((item) => (
                    <QuantityCard
                        key={item.id}
                        item={item}
                        onIncrement={() => dispatch(incrementAction(item.id))}
                        onDecrement={() => dispatch(decrementAction(item.id))}
                    />
                ))}
            </div>
            <div className="section-total">{label}: ${totalCost}</div>
        </div>
    );
};