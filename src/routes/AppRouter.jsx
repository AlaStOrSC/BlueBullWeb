import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MainLayout } from '../components/MainLayout';
import { BlueBullHomePage } from '../screens/BlueBullHomePage';
import { SolutionsPage } from '../screens/SolutionsPage';
import { CaseStudiesPage } from '../screens/CaseStudiesPage';
import { CareersPage } from '../screens/CareersPage';
import { ROUTES } from './routes';

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<BlueBullHomePage />} />
          <Route path={ROUTES.SOLUTIONS} element={<SolutionsPage />} />
          <Route path={ROUTES.CASE_STUDIES} element={<CaseStudiesPage />} />
          <Route path={ROUTES.CAREERS} element={<CareersPage />} />
          {/* Futuras rutas */}
          <Route path="*" element={<BlueBullHomePage />} /> {/* Fallback */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};