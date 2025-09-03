import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MainLayout } from '../components/MainLayout';
import { BlueBullHomePage } from '../screens/BlueBullHomePage';
import { AboutUsPage } from '../screens/AboutUsPage';
import { SolutionsPage } from '../screens/SolutionsPage';
import { EventsPage } from '../screens/EventsPage';
import { CaseStudiesPage } from '../screens/CaseStudiesPage';
import { CareersPage } from '../screens/CareersPage';
import { CharityPage } from '../screens/CharityPage';
import { ContactPage } from '../screens/ContactPage';
import { ROUTES } from './routes';

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<BlueBullHomePage />} />
          <Route path={ROUTES.ABOUT} element={<AboutUsPage />} />
          <Route path={ROUTES.SOLUTIONS} element={<SolutionsPage />} />
          <Route path={ROUTES.EVENTS} element={<EventsPage />} />
          <Route path={ROUTES.CASE_STUDIES} element={<CaseStudiesPage />} />
          <Route path={ROUTES.CAREERS} element={<CareersPage />} />
          <Route path={ROUTES.CHARITY} element={<CharityPage />} />
          <Route path={ROUTES.CONTACT} element={<ContactPage />} />
          {/* Futuras rutas */}
          <Route path="*" element={<BlueBullHomePage />} /> {/* Fallback */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};