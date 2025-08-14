import React, {useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleMealSelection, setNumberOfPeople} from '../slices/mealsSlice';
import './MealsSelector.css';

export const MealsSelector = () => {
    const dispatch = useDispatch();
    const { items: mealsItems, numberOfPeople, totalCost } = useSelector((state) => state.meals);
    const [localNumberOfPeople, setLocalNumberOfPeople] = useState(numberOfPeople);

    useEffect(() => {
        // Update the Redux store when the local state changes
        dispatch(setNumberOfPeople(localNumberOfPeople));
    }, [localNumberOfPeople, dispatch]);

    const handleMealToggle = (mealId) => {
        dispatch(toggleMealSelection(mealId));
    };

    return (
        <div id="meals" className="selection-container">
            <h2>Meals Selection</h2>
            <div className='meals-input-container'>
                <label htmlFor="numberOfPeople">Number of People: </label>
                <input
                type="number"
                id="numberOfPeople"
                value={localNumberOfPeople}
                onChange={(e) => setLocalNumberOfPeople(parseInt(e.target.value,10) || 1)}
                min="1">
                </input>
            </div>
            <div className="meals-grid">
                {mealsItems.map((item) => (
                    <div className="meal-item" key={item.id}>
                        <input
                            type="checkbox"
                            id={item.id}
                            checked={item.selected}
                            onChange={() => dispatch(toggleMealSelection(item.id))}
                        />
                        <label htmlFor={item.id}>{item.name} (${item.cost})</label>
                    </div>
                ))}
            </div>
            <div className="section-total">Total Meals Cost: ${totalCost}</div>
        </div>
    );
};