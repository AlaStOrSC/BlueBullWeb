import React from "react";
import { Box, Grid, Stack, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import Separator from "../../../../assets/Separator.png";
import GraphicIcon from "../../../../assets/SolutionIcons/GraphicIcon.png";
import BuzonIcon from "../../../../assets/SolutionIcons/BuzonIcon.png";
import PorcentageIcon from "../../../../assets/SolutionIcons/PorcentageIcon.png";
import HeartIcon from "../../../../assets/SolutionIcons/HeartIcon.png";
import { ReadMoreButton } from "../../../../components/ReadMoreButton";

export const SolutionsSection = () => {
  const { t } = useTranslation();

  const solutionsData = [
    {
      title: t('solutions.marketing360.title'),
      description: t('solutions.marketing360.description'),
      icon: GraphicIcon,
    },
    {
      title: t('solutions.acquisition.title'),
      description: t('solutions.acquisition.description'),
      icon: BuzonIcon,
    },
    {
      title: t('solutions.promotions.title'),
      description: t('solutions.promotions.description'),
      icon: PorcentageIcon,
    },
    {
      title: t('solutions.socialMedia.title'),
      description: t('solutions.socialMedia.description'),
      icon: HeartIcon,
    },
  ];
  return (
    <Box 
      sx={{ 
        width: "100%", 
        textAlign: "center",
        mx: { xs: "-4px", sm: "-8px", md: "-12px", lg: 0 }, // Neutralizar padding del contenedor padre
        px: { xs: "4px", sm: "8px", md: "12px", lg: 0 }, // Aplicar nuestro propio padding balanceado
      }}
    >
      <Stack spacing={{ xs: 8, md: 12 }} alignItems="center">
        {/* Header */}
        <Stack spacing={{ xs: 6, md: 8 }} alignItems="center">
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
              {t('solutions.title')}
            </Typography>
            
            <Box
              component="img"
              src={Separator}
              alt="Separator line under Solutions title"
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
            {t('solutions.subtitle')}
          </Typography>

          {/* Solution Cards */}
          <Grid 
            container 
            spacing={{ xs: 2, md: 3 }} 
            justifyContent="center"
            sx={{ 
              maxWidth: "80rem",
              px: 0,
              mx: { xs: 0, lg: "-24px" }, 
              width: "100%",
              position: "relative",
              left: { xs: 0, lg: "-16px" },
            }}
          >
            {solutionsData.map((solution, index) => (
              <Grid item xs={12} sm={6} lg={3} key={index} sx={{ display: "flex", justifyContent: "center" }}>
                <Box
                  className="solution-card"
                  sx={{
                    width: "237px",
                    height: "274px",
                    borderRadius: "1.09rem",
                    position: "relative",
                    backgroundColor: "transparent",
                    transition: "color 0.3s ease",
                    mx: "auto", 
                    "&::before": {
                      content: '""',
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      borderRadius: "1.09rem",
                      padding: "3px",
                      background: "linear-gradient(180deg, rgba(111,141,247,1) 0%, rgba(84,107,186,1) 28%, rgba(18,36,99,1) 88%)",
                      mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                      maskComposite: "xor",
                      WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                      WebkitMaskComposite: "xor",
                    },
                  }}
                >
                  <Box
                    sx={{
                      width: "100%",
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      padding: "1.25rem",
                    }}
                  >
                    <Box
                      sx={{
                        width: "3.5rem",
                        height: "3.5rem",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        mb: 1.5,
                      }}
                    >
                      <Box
                        component="img"
                        src={solution.icon}
                        alt={`${solution.title} icon - representing ${solution.title.toLowerCase()} services`}
                        className="solution-icon"
                        sx={{
                          maxWidth: "100%",
                          maxHeight: "100%",
                          width: "auto",
                          height: "auto",
                          objectFit: "contain",
                        }}
                      />
                    </Box>

                    <Box sx={{ 
                      display: "flex", 
                      flexDirection: "column", 
                      alignItems: "center", 
                      textAlign: "center",
                      flex: 1,
                      justifyContent: "space-between"
                    }}>
                      <Typography
                        variant="h5"
                        className="solution-title"
                        sx={{
                          fontFamily: "Montserrat, Helvetica",
                          fontWeight: 700,
                          color: "white",
                          fontSize: "1.22rem",
                          lineHeight: 1.3,
                          height: "3rem",
                          display: "flex",
                          alignItems: "center",
                          mb: 1.5,
                        }}
                      >
                        {solution.title}
                      </Typography>

                      <Typography
                        className="solution-description"
                        sx={{
                          fontFamily: "Montserrat, Helvetica",
                          fontWeight: 500,
                          color: "white",
                          fontSize: "0.89rem",
                          lineHeight: 1.4,
                          flex: 1,
                          display: "flex",
                          alignItems: "flex-start",
                        }}
                      >
                        {solution.description}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Stack>

        {/* Bottom CTA */}
        <Stack spacing={{ xs: 4, md: 6 }} alignItems="center">
          <Typography
            sx={{
              fontFamily: "Montserrat, Helvetica",
              fontWeight: 500,
              color: "white",
              fontSize: { xs: "1.125rem", md: "1.5rem", lg: "1.75rem" },
              lineHeight: 1.6,
              textAlign: "center",
            }}
          >
            {t('solutions.ctaText')}
          </Typography>

          <ReadMoreButton 
            text={t('solutions.readMore')}
            sx={{
              transform: { xs: "translateX(10px)", sm: "translateX(15px)", lg: "translateX(0)" }, // Mover ligeramente a la derecha
            }}
          />
        </Stack>
      </Stack>
    </Box>
  );
};
