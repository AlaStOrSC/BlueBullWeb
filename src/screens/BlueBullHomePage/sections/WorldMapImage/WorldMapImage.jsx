import React from "react";
import { AppBar, Box, Button, Stack, Toolbar, useMediaQuery, useTheme, IconButton, Drawer, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { MainMarketsSection } from "../MainMarketsSection";
import BlueBullLogo from "../../../../assets/BlueBullLogo.png";

const navigationItems = [
  { label: "ABOUT US", active: true },
  { label: "PORTFOLIO", active: false },
  { label: "CASE STUDIES", active: false },
  { label: "GALLERY", active: false },
  { label: "CAREERS", active: false },
  { label: "CHARITY", active: false },
];

export const WorldMapImage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box sx={{ p: 2, backgroundColor: "#010815", height: "100%" }}>
      <Stack spacing={2}>
        {navigationItems.map((item, index) => (
          <Button
            key={index}
            sx={{
              color: item.active ? "#00bfff" : "#ffffff",
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
            CONTACT US
          </Typography>
        </Button>
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
          width: "calc(100vw - 17px)", // Resta el ancho típico de la barra de scroll
          backgroundColor: "rgba(0, 0, 0, 0.1)",
          backdropFilter: "blur(10px)",
          boxShadow: "none",
          height: { xs: "4rem", md: "5.625rem" },
          zIndex: 1000,
        }}
      >
        <Toolbar
          sx={{
            height: "100%",
            maxWidth: "1650px",
            width: "100%",
            mx: "auto",
            px: { xs: 2, md: 4 },
            justifyContent: "space-between",
          }}
        >
          {/* Logo */}
          <Box
            component="img"
            src={BlueBullLogo}
            alt="BlueBull Logo"
            sx={{
              height: { xs: "2.5rem", md: "3.75rem" },
              width: { xs: "6.8rem", md: "10.25rem" },
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
                }}
              >
                {navigationItems.map((item, index) => (
                  <Button
                    key={index}
                    sx={{
                      color: item.active ? "#00bfff" : "#ffffff",
                      fontFamily: "Montserrat, Helvetica",
                      fontWeight: 700,
                      fontSize: { xs: "0.875rem", md: "1.125rem" },
                      textTransform: "none",
                      px: { xs: 1.5, md: 2.5 },
                      py: 2.5,
                      minWidth: "auto",
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
                  px: { xs: 2, md: 3 },
                  py: { xs: 1, md: 2 },
                  minWidth: { xs: "8rem", md: "12.875rem" },
                  height: { xs: "2.5rem", md: "3.6875rem" },
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
                    fontSize: { xs: "1rem", md: "1.5rem" },
                    color: "white",
                    textTransform: "none",
                    transition: "color 0.3s ease",
                  }}
                >
                  CONTACT US
                </Typography>
              </Button>
            </>
          )}

          {/* Mobile Menu Button */}
          {isMobile && (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ color: "white" }}
            >
              <MenuIcon />
            </IconButton>
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

      {/* Main Markets Section */}
     
    </>
  );
};
