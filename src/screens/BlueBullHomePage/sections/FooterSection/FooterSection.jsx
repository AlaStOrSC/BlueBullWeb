import { Box, Grid, Stack, Typography } from "@mui/material";
import React from "react";

const contactData = [
  {
    icon: "https://c.animaapp.com/mek1km8sOiUotz/img/frame-3723.svg",
    text: '"Sed ut perspiciatis unde "Sed\nut perspiciatis unde',
  },
  {
    icon: "https://c.animaapp.com/mek1km8sOiUotz/img/frame-3723-3.svg",
    text: '"Sed ut perspiciatis unde "Sed\nut perspiciatis unde',
  },
  {
    icon: "https://c.animaapp.com/mek1km8sOiUotz/img/frame-3723-1.svg",
    text: '"Sed ut perspiciatis unde "Sed\nut perspiciatis unde',
  },
  {
    icon: "https://c.animaapp.com/mek1km8sOiUotz/img/frame-3723-2.svg",
    text: '"Sed ut perspiciatis unde "Sed\nut perspiciatis unde',
  },
];

export const FooterSection = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#111320",
        color: "white",
        py: { xs: 8, md: 12 },
        px: { xs: 2, md: 4 },
        position: "relative",
      }}
      className="translate-y-[-1rem] animate-fade-in opacity-0"
    >
      <Stack
        spacing={{ xs: 8, md: 15 }}
        alignItems="center"
        maxWidth="1650px"
        mx="auto"
      >
        <Box
          textAlign="center"
          className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]"
        >
          <Typography
            variant="h2"
            sx={{
              fontFamily: "Montserrat, Helvetica",
              fontWeight: 500,
              fontSize: { xs: "2.5rem", md: "3.75rem" },
              lineHeight: 1.84,
              mb: 2,
            }}
          >
            Contacts
          </Typography>
          <Box
            component="img"
            src="https://c.animaapp.com/mek1km8sOiUotz/img/line-1-1.svg"
            alt="Line"
            sx={{
              width: { xs: "4rem", md: "5.5rem" },
              height: { xs: "0.3rem", md: "0.4375rem" },
            }}
          />
        </Box>

        <Grid
          container
          spacing={{ xs: 4, md: 8 }}
          justifyContent="center"
          className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]"
        >
          {contactData.map((contact, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Stack
                spacing={2.5}
                alignItems="center"
                className={`translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:${600 + index * 200}ms]`}
              >
                <Box
                  component="img"
                  src={contact.icon}
                  alt="Contact Icon"
                  sx={{
                    width: "103px",
                    height: "92px",
                  }}
                />
                <Typography
                  sx={{
                    fontFamily: "Montserrat, Helvetica",
                    fontWeight: 500,
                    fontSize: "21.1px",
                    lineHeight: "28.7px",
                    textAlign: "center",
                    whiteSpace: "pre-line",
                  }}
                >
                  {contact.text}
                </Typography>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Stack>

      <Box
        sx={{
          position: "absolute",
          bottom: { xs: 20, md: 40 },
          left: 0,
          right: 0,
          px: { xs: 2, md: 4 },
        }}
        className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:1400ms]"
      >
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item>
            <Typography
              sx={{
                fontFamily: "Montserrat, Helvetica",
                fontWeight: 500,
                fontSize: "24px",
                lineHeight: "23.4px",
              }}
            >
              Blue Bull Ltd
            </Typography>
          </Grid>

          <Grid item>
            <Typography
              sx={{
                fontFamily: "Montserrat, Helvetica",
                fontWeight: 500,
                fontSize: "24px",
                lineHeight: "23.4px",
              }}
            >
              2925 All rights reserved.
            </Typography>
          </Grid>

          <Grid item>
            <Box
              sx={{
                width: "58px",
                height: "58px",
                borderRadius: "50%",
                border: "3px solid white",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Montserrat, Helvetica",
                  fontWeight: 500,
                  fontSize: "24px",
                  lineHeight: "23.4px",
                }}
              >
                18+
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};
