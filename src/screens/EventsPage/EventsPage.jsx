import React from "react";
import { Box, Container } from "@mui/material";
import { EventCard } from "../../components/EventCard";
import backgroundGradient from "../../assets/background-gradient.png";

// Datos de eventos ficticios para Past Events
const pastEvents = [
  {
    id: 1,
    title: "BlueBull Tech Summit 2024 - Madrid",
    date: "March 15-16, 2024",
    gallery: [
      "https://picsum.photos/800/600?random=11",
      "https://picsum.photos/800/600?random=12",
      "https://picsum.photos/800/600?random=13",
      "https://picsum.photos/800/600?random=14",
      "https://picsum.photos/800/600?random=15",
      "https://picsum.photos/800/600?random=16",
      "https://picsum.photos/800/600?random=17",
      "https://picsum.photos/800/600?random=18",
      "https://picsum.photos/800/600?random=19",
      "https://picsum.photos/800/600?random=20",
      "https://picsum.photos/800/600?random=21",
      "https://picsum.photos/800/600?random=22",
      "https://picsum.photos/800/600?random=23",
      "https://picsum.photos/800/600?random=24",
      "https://picsum.photos/800/600?random=25",
      "https://picsum.photos/800/600?random=26"
    ]
  },
  {
    id: 2,
    title: "LATAM iGaming Conference - Buenos Aires",
    date: "August 22-24, 2024",
    gallery: [
      "https://picsum.photos/800/600?random=31",
      "https://picsum.photos/800/600?random=32",
      "https://picsum.photos/800/600?random=33",
      "https://picsum.photos/800/600?random=34",
      "https://picsum.photos/800/600?random=35",
      "https://picsum.photos/800/600?random=36",
      "https://picsum.photos/800/600?random=37",
      "https://picsum.photos/800/600?random=38",
      "https://picsum.photos/800/600?random=39",
      "https://picsum.photos/800/600?random=40",
      "https://picsum.photos/800/600?random=41",
      "https://picsum.photos/800/600?random=42",
      "https://picsum.photos/800/600?random=43",
      "https://picsum.photos/800/600?random=44",
      "https://picsum.photos/800/600?random=45",
      "https://picsum.photos/800/600?random=46"
    ]
  },
  {
    id: 3,
    title: "Digital Marketing Masterclass - Valencia",
    date: "November 10, 2024",
    gallery: [
      "https://picsum.photos/800/600?random=51",
      "https://picsum.photos/800/600?random=52",
      "https://picsum.photos/800/600?random=53",
      "https://picsum.photos/800/600?random=54",
      "https://picsum.photos/800/600?random=55",
      "https://picsum.photos/800/600?random=56",
      "https://picsum.photos/800/600?random=57",
      "https://picsum.photos/800/600?random=58",
      "https://picsum.photos/800/600?random=59",
      "https://picsum.photos/800/600?random=60",
      "https://picsum.photos/800/600?random=61",
      "https://picsum.photos/800/600?random=62",
      "https://picsum.photos/800/600?random=63",
      "https://picsum.photos/800/600?random=64",
      "https://picsum.photos/800/600?random=65",
      "https://picsum.photos/800/600?random=66"
    ]
  },
  {
    id: 4,
    title: "BlueBull Partner Meetup - Mexico City",
    date: "December 5, 2024",
    gallery: [
      "https://picsum.photos/800/600?random=71",
      "https://picsum.photos/800/600?random=72",
      "https://picsum.photos/800/600?random=73",
      "https://picsum.photos/800/600?random=74",
      "https://picsum.photos/800/600?random=75",
      "https://picsum.photos/800/600?random=76",
      "https://picsum.photos/800/600?random=77",
      "https://picsum.photos/800/600?random=78",
      "https://picsum.photos/800/600?random=79",
      "https://picsum.photos/800/600?random=80",
      "https://picsum.photos/800/600?random=81",
      "https://picsum.photos/800/600?random=82",
      "https://picsum.photos/800/600?random=83",
      "https://picsum.photos/800/600?random=84",
      "https://picsum.photos/800/600?random=85",
      "https://picsum.photos/800/600?random=86"
    ]
  }
];

export const EventsPage = () => {
  return (
    <Box
      className="events-page"
      sx={{
        background: `url(${backgroundGradient})`,
        backgroundSize: '100%',
        backgroundPosition: 'top center',
        backgroundRepeat: 'no-repeat',
        backgroundColor: '#010815',
        minHeight: "100vh",
        width: "100%",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Background Elements */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          overflow: "hidden",
          zIndex: -1,
        }}
      >
        {/* Subtle additional gradients for depth */}
        <Box
          sx={{
            position: "absolute",
            backgroundColor: "rgba(59, 130, 246, 0.1)",
            borderRadius: "50%",
            filter: "blur(8rem)",
            width: { xs: "70vw", md: "50vw", lg: "35vw" },
            height: { xs: "35vh", md: "25vh", lg: "18vh" },
            top: "65%",
            left: "10%",
            animation: "float 6s ease-in-out infinite",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            backgroundColor: "rgba(16, 185, 129, 0.08)",
            borderRadius: "50%",
            filter: "blur(6rem)",
            width: { xs: "60vw", md: "40vw", lg: "30vw" },
            height: { xs: "30vh", md: "20vh", lg: "15vh" },
            top: "80%",
            right: "15%",
            animation: "float 8s ease-in-out infinite reverse",
          }}
        />
      </Box>

      {/* Content Container */}
      <Container
        maxWidth={false}
        sx={{
          position: "relative",
          zIndex: 1,
          px: 0,
          pt: {
            xs: "6rem",
            sm: "7rem",
            md: "8rem",
            lg: "9rem"
          },
          pb: {
            xs: "4rem",
            sm: "5rem",
            md: "6rem",
            lg: "8rem"
          }
        }}
      >
        {/* Section 1: Past Events */}
        <EventCard
          title="Past Events"
          description="Our journey through exclusive industry events"
          events={pastEvents}
        />

        {/* Keyframes for animations */}
        <style>
          {`
            @keyframes float {
              0%, 100% {
                transform: translateY(0px);
              }
              50% {
                transform: translateY(-20px);
              }
            }
          `}
        </style>
      </Container>
    </Box>
  );
};
