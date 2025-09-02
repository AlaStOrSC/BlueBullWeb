import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import Separator from "../../../../assets/Separator.png";
import { ReadMoreButton } from "../../../../components/ReadMoreButton";

export const WhoWeAreSection = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleReadMore = () => {
    navigate('/about');
  };
  return (
    <Box 
      sx={{ 
        width: "100%", 
        textAlign: "center",
        mx: { xs: "-4px", sm: "-8px", md: "-12px", lg: 0 }, // Margin negativo más agresivo para compensar
        px: { xs: "4px", sm: "8px", md: "12px", lg: 0 }, // Padding más balanceado
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
            {t('aboutUs.whoWeAreTitle')}
          </Typography>
          
          <Box
            component="img"
            src={Separator}
            alt="Separator"
            sx={{
              width: { xs: "4rem", md: "5.5rem" },
              height: { xs: "0.3rem", md: "0.4375rem" },
            }}
          />
        </Stack>

        <Typography
          sx={{
            fontFamily: "Montserrat, Helvetica",
            fontWeight: 500,
            color: "white",
            fontSize: { xs: "1.125rem", md: "1.5rem", lg: "1.875rem" },
            lineHeight: 1.6,
            maxWidth: { xs: "100%", md: "80%", lg: "60rem" },
          }}
        >
          {t('aboutUs.whoWeAreDescription')}
        </Typography>
        
        <ReadMoreButton scale={1.2} onClick={handleReadMore} />
      </Stack>
    </Box>
  );
};
