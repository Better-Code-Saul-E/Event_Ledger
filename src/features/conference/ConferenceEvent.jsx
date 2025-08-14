import React, { useState } from 'react';
import './ConferenceEvent.css';
import { VenueSelector } from './components/VenueSelector';
import { AvSelector } from './components/AvSelector';
import { MealsSelector } from './components/MealsSelector';
import { TotalCost } from './TotalCost';
import { AppNavbar } from './components/AppNavbar';
import { AppFooter } from './components/AppFooter';

const ConferenceEvent = () => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <>
      <AppNavbar 
      showDetails={showDetails}
      onShowDetailsClick={() => setShowDetails(!showDetails)} />
      <main className="main_container">
        {!showDetails ? (
          <div className="items-information">
            <VenueSelector />
            <AvSelector />
            <MealsSelector />
          </div>
        ) : (
          <div className="total_amount_detail">
            <TotalCost />
          </div>
        )}
      </main>
      <AppFooter></AppFooter>
    </>
  );
};

export default ConferenceEvent;