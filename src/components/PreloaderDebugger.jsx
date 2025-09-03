import React from 'react';
import { Box, Typography, Chip, Paper } from '@mui/material';
import { useRoutePreloader } from '../utils/preloader';

export const PreloaderDebugger = ({ show = false }) => {
  const { getStats } = useRoutePreloader();
  const [stats, setStats] = React.useState({ preloaded: [], inProgress: [], totalPreloaded: 0 });

  React.useEffect(() => {
    if (!show) return;

    const interval = setInterval(() => {
      setStats(getStats());
    }, 1000);

    return () => clearInterval(interval);
  }, [show, getStats]);

  if (!show) return null;

  return (
    <Paper
      sx={{
        position: 'fixed',
        bottom: 20,
        right: 20,
        p: 2,
        maxWidth: 300,
        zIndex: 9999,
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255, 255, 255, 0.2)',
      }}
    >
      <Typography variant="h6" sx={{ color: '#00bfff', mb: 1, fontSize: '0.9rem' }}>
        🚀 Route Preloader Stats
      </Typography>
      
      <Typography variant="body2" sx={{ color: '#ffffff', mb: 1 }}>
        Total Preloaded: {stats.totalPreloaded}
      </Typography>

      {stats.preloaded.length > 0 && (
        <Box sx={{ mb: 1 }}>
          <Typography variant="caption" sx={{ color: '#10b981', mb: 0.5, display: 'block' }}>
            ✅ Ready:
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
            {stats.preloaded.map((route) => (
              <Chip
                key={route}
                label={route}
                size="small"
                sx={{
                  backgroundColor: 'rgba(16, 185, 129, 0.2)',
                  color: '#10b981',
                  fontSize: '0.7rem',
                  height: '20px',
                }}
              />
            ))}
          </Box>
        </Box>
      )}

      {stats.inProgress.length > 0 && (
        <Box>
          <Typography variant="caption" sx={{ color: '#f59e0b', mb: 0.5, display: 'block' }}>
            ⏳ Loading:
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
            {stats.inProgress.map((route) => (
              <Chip
                key={route}
                label={route}
                size="small"
                sx={{
                  backgroundColor: 'rgba(245, 158, 11, 0.2)',
                  color: '#f59e0b',
                  fontSize: '0.7rem',
                  height: '20px',
                }}
              />
            ))}
          </Box>
        </Box>
      )}
    </Paper>
  );
};
