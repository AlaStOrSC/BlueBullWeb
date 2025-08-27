import React from "react";
import { Box, Grid, Stack, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import Separator from "../../../../assets/Separator.png";
import AxionLogo from "../../../../assets/AXION (2).png";
import AleaLogo from "../../../../assets/ALEA (2).png";
import NextStepsLogo from "../../../../assets/NEXT STEPS (2).png";
import UltraLogo from "../../../../assets/ULTA PLUS (2) 1.png";
import { ReadMoreButton } from "../../../../components/ReadMoreButton";

const strategicPartners = [
  { id: 1, name: "Axion", logo: AxionLogo },
  { id: 2, name: "Alea", logo: AleaLogo },
  { id: 3, name: "Next Steps", logo: NextStepsLogo },
  { id: 4, name: "Ultra", logo: UltraLogo },
];

export const StrategicPartners = () => {
  const { t } = useTranslation();
  return (
    <Box 
      sx={{ 
        width: "100%", 
        textAlign: "center",
        mx: { xs: "-4px", sm: "-8px", md: "-12px", lg: 0 },
        px: { xs: "4px", sm: "8px", md: "12px", lg: 0 },
      }}
    >
      <Stack spacing={{ xs: 6, md: 8 }} alignItems="center">
        {/* Header */}
        <Stack spacing={{ xs: 3, md: 4 }} alignItems="center">
          <Typography
            variant="h2"
            sx={{
              fontFamily: "Montserrat, Helvetica",
              fontWeight: 600,
              color: "white",
              fontSize: { xs: "2rem", md: "3rem", lg: "3.75rem" },
              lineHeight: 1.2,
            }}
          >
            {t('strategicPartners.title')}
          </Typography>
          
          <Box
            component="img"
            src={Separator}
            alt="Separator line under Strategic partners title"
            sx={{
              width: { xs: "4rem", md: "5.5rem" },
              height: { xs: "0.3rem", md: "0.4375rem" },
            }}
          />
        </Stack>

        {/* Mobile Carousel (xs) */}
        <Box
          sx={{
            display: { xs: "block", sm: "none" },
            width: "100%",
            overflow: "hidden",
          }}
        >
          <Box
            sx={{
              display: "flex",
              overflowX: "auto",
              gap: 2,
              px: 2,
              py: 1,
              scrollBehavior: "smooth",
              "&::-webkit-scrollbar": {
                height: "4px",
              },
              "&::-webkit-scrollbar-track": {
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                borderRadius: "2px",
              },
              "&::-webkit-scrollbar-thumb": {
                backgroundColor: "rgba(255, 255, 255, 0.3)",
                borderRadius: "2px",
                "&:hover": {
                  backgroundColor: "rgba(255, 255, 255, 0.5)",
                },
              },
            }}
          >
            {strategicPartners.map((partner) => (
              <Box
                key={partner.id}
                sx={{
                  minWidth: "200px",
                  height: "80px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  p: 2,
                }}
              >
                <Box
                  component="img"
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  sx={{
                    maxWidth: "100%",
                    maxHeight: "100%",
                    width: "auto",
                    height: "auto",
                    objectFit: "contain",
                  }}
                />
              </Box>
            ))}
          </Box>
        </Box>

        {/* Tablet Grid (sm) */}
        <Grid 
          container 
          spacing={2} 
          justifyContent="center"
          sx={{ 
            display: { xs: "none", sm: "flex", md: "none" },
            maxWidth: "60rem",
            width: "100%",
          }}
        >
          {strategicPartners.map((partner) => (
            <Grid item xs={6} key={partner.id} sx={{ display: "flex", justifyContent: "center" }}>
              <Box
                sx={{
                  height: "100px",
                  width: "100%",
                  maxWidth: "250px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  p: 2,
                }}
              >
                <Box
                  component="img"
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  sx={{
                    maxWidth: "100%",
                    maxHeight: "100%",
                    width: "auto",
                    height: "auto",
                    objectFit: "contain",
                  }}
                />
              </Box>
            </Grid>
          ))}
        </Grid>

        {/* Desktop Grid (md+) */}
        <Grid 
          container 
          spacing={4} 
          justifyContent="center"
          sx={{ 
            display: { xs: "none", sm: "none", md: "flex" },
            maxWidth: "80rem",
            width: "100%",
          }}
        >
          {strategicPartners.map((partner) => (
            <Grid item md={3} key={partner.id} sx={{ display: "flex", justifyContent: "center" }}>
              <Box
                sx={{
                  height: { md: "120px", lg: "140px" },
                  width: "100%",
                  maxWidth: "300px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  p: 3,
                }}
              >
                <Box
                  component="img"
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  sx={{
                    maxWidth: "100%",
                    maxHeight: "100%",
                    width: "auto",
                    height: "auto",
                    objectFit: "contain",
                  }}
                />
              </Box>
            </Grid>
          ))}
        </Grid>

        {/* Read More Button */}
        <Stack spacing={{ xs: 4, md: 6 }} alignItems="center" sx={{ mt: { xs: 4, md: 6 } }}>
          <ReadMoreButton text={t('solutions.readMore')} />
        </Stack>
      </Stack>
    </Box>
  );
};
