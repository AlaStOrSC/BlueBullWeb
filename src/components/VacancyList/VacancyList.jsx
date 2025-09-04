import React from 'react';
import { Box, Grid, Typography, CircularProgress, useTheme, useMediaQuery } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { VacancyCard } from '../VacancyCard';
import { useVacancies } from '../../hooks/useVacancies';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export const VacancyList = () => {
  const { data: vacancies, isLoading, error } = useVacancies();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('lg')); // xs, sm, md

  if (isLoading) {
    return (
      <Box 
        sx={{ 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center',
          minHeight: '200px'
        }}
      >
        <CircularProgress sx={{ color: '#00bfff' }} />
      </Box>
    );
  }

  if (error) {
    return (
      <Box sx={{ textAlign: 'center', py: 4 }}>
        <Typography 
          sx={{ 
            color: '#ffffff',
            fontFamily: 'Montserrat, Helvetica',
            fontSize: '1rem',
            mb: 2
          }}
        >
          Unable to load current openings from our system.
        </Typography>
        <Typography 
          sx={{ 
            color: '#cccccc',
            fontFamily: 'Montserrat, Helvetica',
            fontSize: '0.9rem'
          }}
        >
          Please check our careers page directly for the latest opportunities.
        </Typography>
      </Box>
    );
  }

  if (!vacancies || vacancies.length === 0) {
    return (
      <Box sx={{ textAlign: 'center', py: 4 }}>
        <Typography 
          sx={{ 
            color: '#ffffff',
            fontFamily: 'Montserrat, Helvetica',
            fontSize: '1rem'
          }}
        >
          No open positions available at the moment.
        </Typography>
        <Typography 
          sx={{ 
            color: '#cccccc',
            fontFamily: 'Montserrat, Helvetica',
            fontSize: '0.9rem',
            mt: 1
          }}
        >
          Check back soon for new opportunities!
        </Typography>
      </Box>
    );
  }

  console.log('Rendering vacancies:', vacancies);

  // Render slider for small screens (xs, sm, md)
  if (isSmallScreen) {
    return (
      <Box sx={{ width: "100%", px: { xs: "1rem", sm: "2rem" } }}>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          centeredSlides={true}
          navigation={true}
          pagination={{ 
            clickable: true,
            bulletClass: 'swiper-pagination-bullet',
            bulletActiveClass: 'swiper-pagination-bullet-active'
          }}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            480: {
              slidesPerView: 1.2,
              spaceBetween: 15,
            },
            640: {
              slidesPerView: 1.5,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 25,
            },
          }}
          style={{
            '--swiper-navigation-color': '#00bfff',
            '--swiper-pagination-color': '#00bfff',
            '--swiper-navigation-size': '25px',
            paddingBottom: '50px',
          }}
        >
          {vacancies.map((vacancy) => (
            <SwiperSlide key={vacancy.id}>
              <Box sx={{ 
                display: 'flex', 
                justifyContent: 'center',
                py: 2
              }}>
                <VacancyCard
                  id={vacancy.id}
                  name={vacancy.name}
                  recruitingCategory={vacancy.recruitingCategory}
                  schedule={vacancy.schedule}
                  office={vacancy.office}
                  yearsOfExperience={vacancy.yearsOfExperience}
                />
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    );
  }

  // Render grid for large screens (lg, xl)
  return (
    <Grid 
      container 
      spacing={{ xs: 2, sm: 3, md: 4, lg: 5, xl: 6 }}
      justifyContent="center"
      alignItems="stretch"
      sx={{ 
        maxWidth: "100%",
        px: { xs: "0.5rem", sm: "1rem" }
      }}
    >
      {vacancies.map((vacancy) => (
        <Grid 
          item 
          xs={12} 
          sm={6} 
          md={4}
          lg={3} 
          key={vacancy.id}
          sx={{ 
            display: "flex", 
            justifyContent: "center",
            alignItems: "stretch"
          }}
        >
          <VacancyCard
            id={vacancy.id}
            name={vacancy.name}
            recruitingCategory={vacancy.recruitingCategory}
            schedule={vacancy.schedule}
            office={vacancy.office}
            yearsOfExperience={vacancy.yearsOfExperience}
          />
        </Grid>
      ))}
    </Grid>
  );
};
