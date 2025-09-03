import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Box, CircularProgress } from '@mui/material';
import { MainLayout } from '../components/MainLayout';
import { ROUTES } from './routes';

const BlueBullHomePage = lazy(() => import('../screens/BlueBullHomePage'));
const AboutUsPage = lazy(() => import('../screens/AboutUsPage'));
const SolutionsPage = lazy(() => import('../screens/SolutionsPage'));
const EventsPage = lazy(() => import('../screens/EventsPage'));
const CaseStudiesPage = lazy(() => import('../screens/CaseStudiesPage'));
const CareersPage = lazy(() => import('../screens/CareersPage'));
const CharityPage = lazy(() => import('../screens/CharityPage'));
const ContactPage = lazy(() => import('../screens/ContactPage'));

const PageLoader = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '50vh',
        backgroundColor: '#010815',
        position: 'relative',
        zIndex: 1
      }}
    >
      <CircularProgress 
        sx={{ 
          color: '#3b82f6',
          '& .MuiCircularProgress-circle': {
            strokeLinecap: 'round',
          }
        }} 
        size={40}
        thickness={3}
      />
    </Box>
  );
};

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={
            <Suspense fallback={<PageLoader />}>
              <BlueBullHomePage />
            </Suspense>
          } />
          <Route path={ROUTES.ABOUT} element={
            <Suspense fallback={<PageLoader />}>
              <AboutUsPage />
            </Suspense>
          } />
          <Route path={ROUTES.SOLUTIONS} element={
            <Suspense fallback={<PageLoader />}>
              <SolutionsPage />
            </Suspense>
          } />
          <Route path={ROUTES.EVENTS} element={
            <Suspense fallback={<PageLoader />}>
              <EventsPage />
            </Suspense>
          } />
          <Route path={ROUTES.CASE_STUDIES} element={
            <Suspense fallback={<PageLoader />}>
              <CaseStudiesPage />
            </Suspense>
          } />
          <Route path={ROUTES.CAREERS} element={
            <Suspense fallback={<PageLoader />}>
              <CareersPage />
            </Suspense>
          } />
          <Route path={ROUTES.CHARITY} element={
            <Suspense fallback={<PageLoader />}>
              <CharityPage />
            </Suspense>
          } />
          <Route path={ROUTES.CONTACT} element={
            <Suspense fallback={<PageLoader />}>
              <ContactPage />
            </Suspense>
          } />
          <Route path="*" element={
            <Suspense fallback={<PageLoader />}>
              <BlueBullHomePage />
            </Suspense>
          } />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
