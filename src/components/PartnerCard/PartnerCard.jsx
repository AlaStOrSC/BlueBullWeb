import React from "react";
import { Box, Typography } from "@mui/material";

export const PartnerCard = ({ 
  id,
  logo, 
  name, 
  description = "" 
}) => {
  return (
    <Box
      sx={{
        minWidth: "200px",
        height: description ? "auto" : "80px",
        display: "flex",
        flexDirection: description ? "column" : "row",
        alignItems: "center",
        justifyContent: "center",
        p: 2,
        textAlign: "center"
      }}
    >
      <Box
        component="img"
        src={logo}
        alt={`${name} logo`}
        sx={{
          maxWidth: "100%",
          maxHeight: description ? "120px" : "100%",
          width: "auto",
          height: "auto",
          objectFit: "contain",
          mb: description ? 1 : 0
        }}
      />
      
      {description && (
        <Typography
          sx={{
            fontFamily: "Montserrat, Helvetica",
            fontWeight: 400,
            fontSize: {
              xs: "0.75rem",
              sm: "0.8rem",
              md: "0.85rem"
            },
            color: "#cccccc",
            lineHeight: 1.4,
            mt: 1
          }}
        >
          {description}
        </Typography>
      )}
    </Box>
  );
};
