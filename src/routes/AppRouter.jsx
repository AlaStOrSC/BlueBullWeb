import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { BlueBullHomePage } from '../screens/BlueBullHomePage';
import { SolutionsPage } from '../screens/SolutionsPage';
import { ROUTES } from './routes';

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.HOME} element={<BlueBullHomePage />} />
        <Route path={ROUTES.SOLUTIONS} element={<SolutionsPage />} />
        {/* Futuras rutas */}
        <Route path="*" element={<BlueBullHomePage />} /> {/* Fallback */}
      </Routes>
    </BrowserRouter>
  );
};