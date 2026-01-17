import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { StoreProvider } from './providers/StoreProvider';
import { router } from './router';

export default function App() {
  return (
    <StoreProvider>
       <RouterProvider router={router} />
    </StoreProvider>
  );
}