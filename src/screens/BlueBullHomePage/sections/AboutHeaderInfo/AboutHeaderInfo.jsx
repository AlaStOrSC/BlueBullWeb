import React from "react";
import { Box, Button, Stack, Typography } from "@mui/material";

export const AboutHeaderInfo = () => {
  return (
    <Box
      sx={{
        flex: { xs: "none", lg: 1 },
        maxWidth: { xs: "100%", lg: "50rem" },
        zIndex: 2,
        marginLeft: { xs: "5%", md: "5%", lg: "5%" }, // Separación del margen izquierdo
        marginTop: "-200px", // Subido 200px más desde la posición actual
      }}
    >
      <Stack 
        spacing={{ xs: 3, md: 4 }}
        sx={{ 
          alignItems: { xs: "center", lg: "flex-start" },
          textAlign: { xs: "center", lg: "left" },
        }}
      >
        <Typography
          sx={{
            color: "#ffffff",
            fontFamily: "var(--headline-header-1-font-family)",
            fontSize: { xs: "2.8rem", md: "3.92rem", lg: "4.48rem" }, // Escalado proporcionalmente
            fontWeight: "var(--headline-header-1-font-weight)",
            lineHeight: "var(--headline-header-1-line-height)",
            letterSpacing: "var(--headline-header-1-letter-spacing)",
          }}
        >
          A PARTNER <br />
          WITH CHARGE
        </Typography>

        <Typography
          sx={{
            color: "#01beff",
            fontFamily: "var(--headline-header-2-font-family)",
            fontSize: "var(--headline-header-2-font-size)",
            fontWeight: 600, // Semi-bold en vez de bold
            lineHeight: "var(--headline-header-2-line-height)",
            letterSpacing: "var(--headline-header-2-letter-spacing)",
          }}
        >
          IN THE LATAM & EU MARKETS
        </Typography>

        <Box
          sx={{
            width: { xs: "2rem", md: "3.1rem" },
            height: { xs: "0.25rem", md: "0.43rem" },
            background: "linear-gradient(90deg, #8F41B6 0%, #01BEFF 100%)",
            borderRadius: "2px",
          }}
        />

        <Typography
          sx={{
            color: "#ffffff",
            fontFamily: "Montserrat, Helvetica",
            fontSize: { xs: "1rem", md: "1.4rem", lg: "1.8rem" }, // Reducido 20%
            fontWeight: 500,
            lineHeight: 1.4,
            maxWidth: { xs: "100%", lg: "90%" },
          }}
        >
          A bold, fast-growing iGaming <br />
          and digital marketing venture <br />
          based in southern Spain
        </Typography>

        <Button
          variant="outlined"
          sx={{
            height: { xs: "3rem", md: "4.3125rem" },
            px: { xs: 3, md: 6 },
            border: "0.25rem solid white",
            borderRadius: 1,
            alignSelf: { xs: "center", lg: "flex-start" },
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
              fontSize: { xs: "0.8rem", md: "1.2rem", lg: "1.44rem" }, // Reducido 20%
              color: "white",
              textTransform: "none",
              transition: "color 0.3s ease",
            }}
          >
            SEE CASE STUDIES
          </Typography>
        </Button>
      </Stack>

      {/* Background Ellipse */}
      <Box
        sx={{
          position: "absolute",
          right: { xs: "-50%", lg: "-35%" },
          top: "50%",
          transform: "translateY(-50%)",
          width: { xs: "100vw", lg: "84.25rem" },
          height: { xs: "50vh", lg: "41.5625rem" },
          backgroundColor: "rgba(143, 65, 182, 0.4)",
          borderRadius: "50%",
          filter: "blur(28.73rem)",
          zIndex: -1,
          display: { xs: "none", lg: "block" },
        }}
      />
    </Box>
  );
};
