import React, { useState } from 'react';
import { 
  Box, 
  Button, 
  Menu, 
  MenuItem, 
  Stack, 
  Typography,
  useTheme,
  useMediaQuery
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

// Importar las banderas
import ESFlag from '../../assets/FlagIcons/ES.png';
import PTFlag from '../../assets/FlagIcons/PR.png';
import UKFlag from '../../assets/FlagIcons/UK.png';

const languages = [
  {
    code: 'en',
    name: 'English',
    flag: UKFlag,
  },
  {
    code: 'es', 
    name: 'Español',
    flag: ESFlag,
  },
  {
    code: 'pt',
    name: 'Português',
    flag: PTFlag,
  },
];

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [anchorEl, setAnchorEl] = useState(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  
  const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0];
  
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  
  const handleClose = () => {
    setAnchorEl(null);
  };
  
  const handleLanguageChange = (languageCode) => {
    i18n.changeLanguage(languageCode);
    handleClose();
  };

  return (
    <Box>
      <Button
        onClick={handleClick}
        sx={{
          minWidth: 'auto',
          p: { xs: 0.5, md: 1 },
          borderRadius: '0.5rem',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          backgroundColor: 'rgba(255, 255, 255, 0.05)',
          backdropFilter: 'blur(10px)',
          transition: 'all 0.3s ease',
          '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            borderColor: 'rgba(255, 255, 255, 0.3)',
          },
        }}
      >
        <Stack direction="row" alignItems="center" spacing={isMobile ? 0.5 : 1}>
          <Box
            component="img"
            src={currentLanguage.flag}
            alt={`${currentLanguage.name} flag`}
            sx={{
              width: { xs: '1.25rem', md: '1.5rem' },
              height: { xs: '0.9375rem', md: '1.125rem' },
              borderRadius: '0.125rem',
              objectFit: 'cover',
            }}
          />
          {!isMobile && (
            <Typography
              sx={{
                fontFamily: 'Montserrat, Helvetica',
                fontWeight: 500,
                fontSize: { xs: '0.75rem', md: '0.875rem' },
                color: 'white',
                textTransform: 'none',
              }}
            >
              {currentLanguage.code.toUpperCase()}
            </Typography>
          )}
          <ExpandMoreIcon
            sx={{
              color: 'white',
              fontSize: { xs: '1rem', md: '1.25rem' },
              transition: 'transform 0.3s ease',
              transform: anchorEl ? 'rotate(180deg)' : 'rotate(0deg)',
            }}
          />
        </Stack>
      </Button>

      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        PaperProps={{
          sx: {
            backgroundColor: 'rgba(10, 10, 10, 0.95)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '0.75rem',
            mt: 1,
            minWidth: '8rem',
            '& .MuiList-root': {
              py: 0.5,
            },
          },
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
      >
        {languages.map((language) => (
          <MenuItem
            key={language.code}
            onClick={() => handleLanguageChange(language.code)}
            selected={language.code === i18n.language}
            sx={{
              px: 2,
              py: 1,
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
              },
              '&.Mui-selected': {
                backgroundColor: 'rgba(1, 191, 255, 0.2)',
                '&:hover': {
                  backgroundColor: 'rgba(1, 191, 255, 0.3)',
                },
              },
            }}
          >
            <Stack direction="row" alignItems="center" spacing={1.5}>
              <Box
                component="img"
                src={language.flag}
                alt={`${language.name} flag`}
                sx={{
                  width: '1.5rem',
                  height: '1.125rem',
                  borderRadius: '0.125rem',
                  objectFit: 'cover',
                }}
              />
              <Typography
                sx={{
                  fontFamily: 'Montserrat, Helvetica',
                  fontWeight: 500,
                  fontSize: '0.875rem',
                  color: 'white',
                }}
              >
                {language.name}
              </Typography>
            </Stack>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
};
