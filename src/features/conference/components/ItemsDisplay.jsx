import React from 'react';
import { useSelector } from 'react-redux';
import './ItemsDisplay.css';
import {
    selectFilteredVenueItems,
    selectFilteredAvItems,
    selectFilteredMealsItems,
    selectNumberOfPeople
} from '../../Conference.selectors';

export const ItemsDisplay = () => {
    const venueItems = useSelector(selectFilteredVenueItems);
    const avItems = useSelector(selectFilteredAvItems);
    const mealsItems = useSelector(selectFilteredMealsItems);
    const numberOfPeople = useSelector(selectNumberOfPeople);

    const allItems = [...venueItems, ...avItems, ...mealsItems];

    if (allItems.length === 0) {
        return <p>No items selected. Go back to add some!</p>;
    }
 
    return (
        <div className="display_box1">
            {allItems.length === 0 ? <p>No items selected</p> : (
                <table className="table_item_data">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Unit Cost</th>
                            <th>Quantity</th>
                            <th>Subtotal</th>
                        </tr>
                    </thead>
                    <tbody>
                        {allItems.map((item) => (
                            <tr key={item.id}>
                                <td>{item.name}</td>
                                <td>${item.cost}</td>
                                <td>{item.selected ? `For ${numberOfPeople} people` : item.quantity}</td>
                                <td>${item.selected ? item.cost * numberOfPeople : item.cost * item.quantity}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};