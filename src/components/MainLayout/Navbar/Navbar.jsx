import React from "react";
import { AppBar, Box, Button, Stack, Toolbar, useMediaQuery, useTheme, IconButton, Drawer, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import BlueBullLogo from "../../../assets/BlueBullLogo.png";
import { ROUTES } from "../../../routes/routes";
import { LanguageSwitcher } from "../../LanguageSwitcher";

export const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('lg')); // Cambiado de 'md' a 'lg'
  const isTablet = useMediaQuery(theme.breakpoints.between('md', 'lg'));
  const isSmallDesktop = useMediaQuery(theme.breakpoints.between('lg', 'xl'));
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [scrollbarWidth, setScrollbarWidth] = React.useState(0);
  const location = useLocation();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const navigationItems = [
    { id: "home", label: t('navbar.home'), route: ROUTES.HOME },
    { id: "about", label: t('navbar.about'), route: ROUTES.ABOUT },
    { id: "solutions", label: t('navbar.solutions'), route: ROUTES.SOLUTIONS },
    { id: "case-studies", label: t('navbar.caseStudies'), route: ROUTES.CASE_STUDIES },
    { id: "events", label: t('navbar.events'), route: "/events" },
    { id: "careers", label: t('navbar.careers'), route: ROUTES.CAREERS },
    { id: "charity", label: t('navbar.charity'), route: ROUTES.CHARITY },
  ];

  // Detectar el ancho de la barra de scroll
  React.useEffect(() => {
    const detectScrollbarWidth = () => {
      // Crear un div temporal para medir
      const outer = document.createElement('div');
      outer.style.visibility = 'hidden';
      outer.style.overflow = 'scroll';
      outer.style.msOverflowStyle = 'scrollbar';
      document.body.appendChild(outer);

      const inner = document.createElement('div');
      outer.appendChild(inner);

      const scrollbarWidth = outer.offsetWidth - inner.offsetWidth;
      document.body.removeChild(outer);

      setScrollbarWidth(scrollbarWidth);
    };

    detectScrollbarWidth();
    window.addEventListener('resize', detectScrollbarWidth);
    
    return () => window.removeEventListener('resize', detectScrollbarWidth);
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleNavigation = (route) => {
    navigate(route);
    if (isMobile) {
      setMobileOpen(false); // Cerrar drawer en mobile después de navegar
    }
  };

  // Función para determinar si un item está activo
  const isActive = (route) => {
    return location.pathname === route;
  };

  const drawer = (
    <Box sx={{ p: 2, backgroundColor: "#010815", height: "100%" }}>
      <Stack spacing={2}>
        {navigationItems.map((item) => (
          <Button
            key={item.id}
            onClick={() => handleNavigation(item.route)}
            sx={{
              color: isActive(item.route) ? "#00bfff" : "#ffffff",
              fontFamily: "Montserrat, Helvetica",
              fontWeight: 700,
              fontSize: "1rem",
              textTransform: "none",
              justifyContent: "flex-start",
              "&:hover": {
                backgroundColor: "rgba(255, 255, 255, 0.1)",
              },
            }}
          >
            {item.label}
          </Button>
        ))}
        <Button
          variant="outlined"
          sx={{
            height: { xs: "3rem", md: "4.3125rem" },
            px: { xs: 3, md: 6 },
            border: "0.25rem solid white",
            borderRadius: 1,
            mt: 2,
            "&:hover": {
              border: "0.25rem solid #00bfff",
              backgroundColor: "rgba(0, 191, 255, 0.1)",
              "& .MuiTypography-root": {
                color: "#00bfff",
              },
            },
          }}
        >
          <Typography
            sx={{
              fontFamily: "Montserrat, Helvetica",
              fontWeight: 700,
              fontSize: { xs: "0.8rem", md: "1.2rem", lg: "1.44rem" },
              color: "white",
              textTransform: "none",
              transition: "color 0.3s ease",
            }}
          >
            {t('navbar.contactUs')}
          </Typography>
        </Button>

        {/* Language Switcher - Mobile Drawer */}
        <Box sx={{ mt: 3, display: 'flex', justifyContent: 'center' }}>
          <LanguageSwitcher />
        </Box>
      </Stack>
    </Box>
  );

  return (
    <>
      {/* Fixed Navigation Bar */}
      <AppBar
        position="fixed"
        sx={{
          top: 0,
          left: 0,
          width: `calc(100% - ${scrollbarWidth}px)`, // Usar medición dinámica
          backgroundColor: "rgba(0, 0, 0, 0.1)",
          backdropFilter: "blur(10px)",
          boxShadow: "none",
          height: { 
            xs: "4rem", 
            md: "4.5rem", 
            lg: "5rem", 
            xl: "5.625rem" 
          },
          zIndex: 1000,
        }}
      >
        <Toolbar
          sx={{
            height: "100%",
            maxWidth: "113.25rem",
            width: "100%",
            mx: "auto",
            px: { 
              xs: "4vw", 
              md: "3vw", 
              lg: "2.5vw", 
              xl: "2vw"
            },
            justifyContent: "space-between",
          }}
        >
          {/* Logo */}
          <Box
            component="img"
            src={BlueBullLogo}
            alt="BlueBull Logo"
            onClick={() => navigate(ROUTES.HOME)}
            sx={{
              height: { 
                xs: "2.5rem", 
                md: "3rem", 
                lg: "3.5rem", 
                xl: "3.75rem" 
              },
              width: { 
                xs: "6.8rem", 
                md: "8.2rem", 
                lg: "9.2rem", 
                xl: "10.25rem" 
              },
              cursor: "pointer",
              transition: "opacity 0.2s ease",
              "&:hover": {
                opacity: 0.8,
              },
            }}
          />

          {/* Desktop Navigation */}
          {!isMobile && (
            <>
              <Stack
                direction="row"
                sx={{
                  alignItems: "center",
                  height: "100%",
                  display: { xs: "none", lg: "flex" }, // Mostrar solo en lg y xl
                }}
              >
                {navigationItems.map((item) => (
                  <Button
                    key={item.id}
                    onClick={() => handleNavigation(item.route)}
                    sx={{
                      color: isActive(item.route) ? "#00bfff" : "#ffffff",
                      fontFamily: "Montserrat, Helvetica",
                      fontWeight: 700,
                      fontSize: { 
                        md: "0.7rem", 
                        lg: "0.9rem", 
                        xl: "1.1rem" 
                      },
                      textTransform: "none",
                      px: { 
                        md: 0.8, 
                        lg: 1.5, 
                        xl: 2.5 
                      },
                      py: 2.5,
                      minWidth: "auto",
                      whiteSpace: "nowrap",
                      "&:hover": {
                        backgroundColor: "rgba(255, 255, 255, 0.1)",
                      },
                    }}
                  >
                    {item.label}
                  </Button>
                ))}
              </Stack>

              <Button
                variant="outlined"
                sx={{
                  border: "0.25rem solid white",
                  borderRadius: "0.35rem",
                  px: { 
                    md: 1, 
                    lg: 2, 
                    xl: 3 
                  },
                  py: { 
                    md: 0.8, 
                    lg: 1.5, 
                    xl: 2 
                  },
                  minWidth: { 
                    md: "6rem", 
                    lg: "8rem", 
                    xl: "12.875rem" 
                  },
                  height: { 
                    md: "2rem", 
                    lg: "2.8rem", 
                    xl: "3.6875rem" 
                  },
                  "&:hover": {
                    border: "0.25rem solid #00bfff",
                    backgroundColor: "rgba(0, 191, 255, 0.1)",
                    "& .MuiTypography-root": {
                      color: "#00bfff",
                    },
                  },
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "Montserrat, Helvetica",
                    fontWeight: "bold",
                    fontSize: { 
                      md: "0.6rem", 
                      lg: "0.9rem", 
                      xl: "1.5rem" 
                    },
                    color: "white",
                    textTransform: "none",
                    transition: "color 0.3s ease",
                    whiteSpace: "nowrap",
                  }}
                >
                  {t('navbar.contactUs')}
                </Typography>
              </Button>

              {/* Language Switcher - Desktop */}
              <Box sx={{ ml: { md: 1, lg: 2, xl: 3 } }}>
                <LanguageSwitcher />
              </Box>
            </>
          )}

          {/* Mobile Menu Button and Language Switcher */}
          {isMobile && (
            <Stack direction="row" alignItems="center" spacing={1}>
              <LanguageSwitcher />
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ color: "white" }}
              >
                <MenuIcon />
              </IconButton>
            </Stack>
          )}
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { 
            boxSizing: 'border-box', 
            width: 240,
            backgroundColor: "#010815",
          },
        }}
      >
        {drawer}
      </Drawer>

     
    </>
  );
};
