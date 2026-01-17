import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getImage } from '../../../utils/imageMapper';
import './ImageSelector.css';

export const ImageCard = ({ item, onIncrement, onDecrement }) => {
    const imgSrc = item.img || getImage(item.image_path);

    return (
        <div className="item-card">
            <img src={imgSrc} alt={item.name} className="item-card-img" />
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

export const ImageSelector = ({ itemsSelector, statusSelector, fetchAction, incrementAction, decrementAction, label = "Total Cost" }) => {
    const dispatch = useDispatch();
    
    const items = useSelector(itemsSelector);
    const status = useSelector(statusSelector);

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchAction());
        }
    }, [status, dispatch, fetchAction])

    const safeItems = items || [];
    const totalCost = safeItems.reduce((total, item) => total + (item.cost * item.quantity), 0);

    return (
        <div className="card-selector-wrapper">
            <div className="item-grid">
                {safeItems.map((item) => (
                    <ImageCard
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