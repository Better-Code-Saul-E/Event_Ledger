import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { FaMapMarkerAlt, FaPlug, FaUtensils } from 'react-icons/fa';
import {
    selectFilteredVenueItems, selectFilteredAvItems,
    selectFilteredMealsItems, selectNumberOfPeople,
    selectGrandTotal
} from '../../../store/Conference.selectors';
import './BillSummary.css';

const BillHeader = () => (
    <div className="bill-header">
        <span>Item</span>
        <span>Qty</span>
        <span>Cost</span>
    </div>
);

const BillRow = ({ icon: Icon, iconClass, name, quantity, cost }) => {
    return (
        <div className="bill-row">
            <span className="item-name">
                <Icon className={iconClass} />
                {name}
            </span>
            <span className="item-qty">x{quantity}</span>
            <span className="item-cost">${cost.toLocaleString()}</span>
        </div>
    );
};

const BillFooter = ({ total }) => (
    <div className="grand-total">
        <span>Total:</span>
        <span>${total.toLocaleString()}</span>
    </div>
);

export const BillSummary = () => {
    const selectedVenues = useSelector(selectFilteredVenueItems);
    const selectedAv = useSelector(selectFilteredAvItems);
    const selectedMeals = useSelector(selectFilteredMealsItems);

    const numberOfPeople = useSelector(selectNumberOfPeople);
    const grandTotal = useSelector(selectGrandTotal);

    return (
        <div className="bill-container">
            <h3>Event Estimate</h3>

            <div className="bill-table">
                <BillHeader />

                {selectedVenues.map((item) => (
                    <BillRow
                        key={item.id}
                        icon={FaMapMarkerAlt}
                        iconClass="bill-icon venue-icon"
                        name={item.name}
                        quantity={item.quantity}
                        cost={item.cost * item.quantity}
                    />
                ))}

                {selectedAv.map((item) => (
                    <BillRow
                        key={item.id}
                        icon={FaPlug}
                        iconClass="bill-icon av-icon"
                        name={item.name}
                        quantity={item.quantity}
                        cost={item.cost * item.quantity}
                    />
                ))}

                {selectedMeals.map((item) => (
                    <BillRow
                        key={item.id}
                        icon={FaUtensils}
                        iconClass="bill-icon meal-icon"
                        name={item.name}
                        quantity={numberOfPeople}
                        cost={item.cost * numberOfPeople}
                    />
                ))}

                {grandTotal === 0 && (
                    <div className="empty-bill">
                        <p>No items selected yet.</p>
                    </div>
                )}
            </div>

            <BillFooter total={grandTotal.toLocaleString()} />
        </div>
    );
};