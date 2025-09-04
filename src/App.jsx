import React from 'react';
import { AppRouter } from './routes/AppRouter';
import { QueryProvider } from './providers/QueryProvider';

export const App = () => {
  return (
    <QueryProvider>
      <AppRouter />
    </QueryProvider>
  );
};
