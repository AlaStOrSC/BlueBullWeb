import { AppBar, Box, Button, Stack, Toolbar, Typography } from "@mui/material";
import React from "react";
import WorldmapImage from "../../../../assets/Worldmap.png";

const navigationItems = [
  { label: "ABOUT US", active: true },
  { label: "PORTFOLIO", active: false },
  { label: "CASE STUDIES", active: false },
  { label: "GALLERY", active: false },
  { label: "CAREERS", active: false },
  { label: "CHARITY", active: false },
];

export const GlobalPresenceSection = () => {
  return (
    <Box sx={{ position: "relative", width: "100%", minHeight: "994px" }}>
      {/* Navigation Bar */}
      <AppBar
        position="fixed"
        sx={{
          top: 0,
          backgroundColor: "rgba(0, 0, 0, 0.1)",
          backdropFilter: "blur(9.99px)",
          boxShadow: "none",
          height: "90px",
          zIndex: 1000,
        }}
      >
        <Toolbar
          sx={{
            height: "100%",
            justifyContent: "space-between",
            px: { xs: 2, md: 4 },
          }}
        >
          {/* Logo */}
          <Box
            component="img"
            src="https://c.animaapp.com/mek1km8sOiUotz/img/frame-3661.svg"
            alt="Logo"
            sx={{ width: "164px", height: "60px" }}
          />

          {/* Navigation Items */}
          <Stack direction="row" spacing={0} sx={{ height: "100%" }}>
            {navigationItems.map((item, index) => (
              <Button
                key={index}
                sx={{
                  color: item.active ? "#00bfff" : "white",
                  fontFamily: "Montserrat, Helvetica",
                  fontWeight: "bold",
                  fontSize: "20px",
                  textTransform: "none",
                  px: 2.5,
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

          {/* Contact Us Button */}
          <Button
            variant="outlined"
            sx={{
              color: "#f5f7fa",
              borderColor: "#00bfff",
              borderWidth: "4px",
              borderRadius: "5.58px",
              fontFamily: "Montserrat, Helvetica",
              fontWeight: "bold",
              fontSize: "24px",
              textTransform: "none",
              px: 3,
              py: 2,
              minWidth: "206px",
              height: "59px",
              "&:hover": {
                borderColor: "#00bfff",
                backgroundColor: "rgba(0, 191, 255, 0.1)",
              },
            }}
          >
            CONTACT US
          </Button>
        </Toolbar>
      </AppBar>

      {/* Main Content */}
      <Box sx={{ pt: "90px", position: "relative" }}>
        {/* Title Section */}
        <Box
          sx={{
            textAlign: "center",
            py: 4,
            opacity: 0,
            transform: "translateY(-1rem)",
          }}
          className="animate-fade-in"
        >
          <Typography
            variant="h2"
            sx={{
              fontFamily: "Montserrat, Helvetica",
              fontWeight: 600,
              color: "white",
              fontSize: "60px",
              lineHeight: "110.4px",
              mb: 2,
            }}
          >
            Main Markets
          </Typography>
          <Box
            component="img"
            src="https://c.animaapp.com/mek1km8sOiUotz/img/line-1-1.svg"
            alt="Underline"
            sx={{ width: "88px", height: "7px" }}
          />
        </Box>

        {/* World Map Section */}
        <Box
          sx={{
            position: "relative",
            width: "100%",
            maxWidth: "1437px",
            height: "704px",
            mx: "auto",
            mt: 4,
            backgroundImage: `url(${WorldmapImage})`, // Tu nueva imagen del mapa
            backgroundSize: "100% 100%",
            backgroundRepeat: "no-repeat",
            opacity: 0,
            transform: "translateY(20px)",
          }}
          className="animate-fade-up"
          style={{ "--animation-delay": "200ms" }}
        >
          {/* Popup/Modal Overlay */}
          <Box
            component="img"
            src="https://c.animaapp.com/mek1km8sOiUotz/img/pop-up.svg"
            alt="Global Presence Popup"
            sx={{
              position: "absolute",
              width: "586px",
              height: "607px",
              top: "19px",
              left: "50%",
              transform: "translateX(-50%)",
              opacity: 0,
              transform: "translateX(-50%) translateY(20px)",
            }}
            className="animate-fade-up"
            style={{ "--animation-delay": "400ms" }}
          />
        </Box>
      </Box>
    </Box>
  );
};
