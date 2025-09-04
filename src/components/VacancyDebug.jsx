import React from 'react';
import { useVacancies } from '../hooks/useVacancies';

export const VacancyDebug = () => {
  const { data, isLoading, error } = useVacancies();
  
  return (
    <div style={{ 
      position: 'fixed', 
      top: '10px', 
      right: '10px', 
      background: 'black', 
      color: 'white', 
      padding: '10px',
      fontSize: '12px',
      maxWidth: '300px',
      maxHeight: '400px',
      overflow: 'auto',
      zIndex: 9999,
      border: '1px solid #00bfff'
    }}>
      <h3>Vacancy Debug</h3>
      <p>Loading: {isLoading ? 'Yes' : 'No'}</p>
      <p>Error: {error ? error.message : 'None'}</p>
      <p>Data count: {data ? data.length : 0}</p>
      {data && data.length > 0 && (
        <div>
          <h4>First vacancy:</h4>
          <pre>{JSON.stringify(data[0], null, 2)}</pre>
        </div>
      )}
    </div>
  );
};
