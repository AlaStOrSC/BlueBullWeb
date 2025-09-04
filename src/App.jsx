import React from 'react';
import { AppRouter } from './routes/AppRouter';
import { QueryProvider } from './providers/QueryProvider';
import { VacancyDebug } from './components/VacancyDebug';

export const App = () => {
  return (
    <QueryProvider>
      <AppRouter />
      <VacancyDebug />
    </QueryProvider>
  );
};
