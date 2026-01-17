import { createBrowserRouter } from 'react-router-dom';
import { MainLayout } from '../layout/MainLayout';
import { EventPlanner } from '../pages/Planner/EventPlanner';
import { Home } from '../pages/Home/Home';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "planner",
        element: <EventPlanner />
      },
    ]
  }
]);