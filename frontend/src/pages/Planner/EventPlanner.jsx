import React, { useState } from 'react';
import { BillSummary } from './components/BillSummary';
import { AccordionSection } from './components/AccordionSection';
import { ImageSelector } from './components/ImageSelector';
import { QuantitySelector } from './components/QuantitySelector';
import { ToggleSelector } from './components/ToggleSelector';
import { getVenues, incrementVenueQuantity, decrementVenueQuantity } from '../../store/slices/venueSlice';
import { getAvItems, incrementAvQuantity, decrementAvQuantity } from '../../store/slices/avSlice';
import { getMeals, toggleMealSelection, setNumberOfPeople } from '../../store/slices/mealsSlice';
import {
  selectVenueItems, selectAvItems,
  selectMealsItems, selectNumberOfPeople
} from '../../store/Conference.selectors';
import './EventPlanner.css';
 
export const EventPlanner = () => {
  const [activeSection, setActiveSection] = useState('venue');

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  return (
    <div className="conference-layout">

      {/* LEFT SIDE. The accordions with items */}
      <div className="selection-column">

        <AccordionSection
          title="1. Select Venue Room"
          isOpen={activeSection === 'venue'}
          onClick={() => toggleSection('venue')}
        >
          <ImageSelector
            itemsSelector={selectVenueItems}
            statusSelector={(state) => state.venue.status}
            fetchAction={getVenues}
            incrementAction={incrementVenueQuantity}
            decrementAction={decrementVenueQuantity}
            label="Total Venue Cost" 
          />
        </AccordionSection>

        <AccordionSection
          title="2. Add-ons & Equipment"
          isOpen={activeSection === 'addons'}
          onClick={() => toggleSection('addons')}
        >
          <QuantitySelector
            itemsSelector={selectAvItems}
            statusSelector={(state) => state.av.status}
            fetchAction={getAvItems}
            incrementAction={incrementAvQuantity}
            decrementAction={decrementAvQuantity}
            label="Total AV Cost"
          />
        </AccordionSection>

        <AccordionSection
          title="3. Meals & Catering"
          isOpen={activeSection === 'meals'}
          onClick={() => toggleSection('meals')}
        >
          <ToggleSelector
            inputLabel="Number of People"
            itemsSelector={selectMealsItems}
            statusSelector={(state) => state.meals.status}
            fetchAction={getMeals}
            quantitySelector={selectNumberOfPeople}
            toggleAction={toggleMealSelection}
            quantityAction={setNumberOfPeople}
          />
        </AccordionSection>

      </div>

      {/* RIGHT SIDE!!! Itemized sticky bill */}
      <aside className="summary-column">
        <BillSummary />
      </aside>
    </div>
  );
};

export default EventPlanner;