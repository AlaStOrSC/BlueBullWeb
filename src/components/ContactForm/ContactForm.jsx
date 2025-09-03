import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Grid,
  Alert,
  CircularProgress,
} from "@mui/material";
import { styled } from "@mui/material/styles";

// Styled components siguiendo el diseño BlueBull
const StyledTextField = styled(TextField)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderRadius: '12px',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    '& fieldset': {
      border: 'none',
    },
    '&:hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.08)',
      border: '1px solid rgba(59, 130, 246, 0.3)',
    },
    '&.Mui-focused': {
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      border: '1px solid #3b82f6',
      boxShadow: '0 0 20px rgba(59, 130, 246, 0.3)',
    },
  },
  '& .MuiInputLabel-root': {
    color: 'rgba(255, 255, 255, 0.7)',
    '&.Mui-focused': {
      color: '#3b82f6',
    },
  },
  '& .MuiOutlinedInput-input': {
    color: 'white',
    fontSize: '1rem',
    padding: '16px',
  },
}));

const SubmitButton = styled(Button)(({ theme }) => ({
  background: 'linear-gradient(135deg, #3b82f6 0%, #10b981 100%)',
  borderRadius: '12px',
  padding: '16px 40px',
  fontSize: '1.1rem',
  fontWeight: 600,
  textTransform: 'none',
  color: 'white',
  border: 'none',
  boxShadow: '0 8px 32px rgba(59, 130, 246, 0.3)',
  transition: 'all 0.3s ease',
  '&:hover': {
    background: 'linear-gradient(135deg, #2563eb 0%, #059669 100%)',
    transform: 'translateY(-2px)',
    boxShadow: '0 12px 40px rgba(59, 130, 246, 0.4)',
  },
  '&:active': {
    transform: 'translateY(0px)',
  },
  '&:disabled': {
    background: 'rgba(255, 255, 255, 0.1)',
    color: 'rgba(255, 255, 255, 0.5)',
    transform: 'none',
    boxShadow: 'none',
  },
}));

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    telephone: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email format is invalid';
    }
    
    if (!formData.telephone.trim()) {
      newErrors.telephone = 'Telephone is required';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setStatus('loading');
    
    try {
      // Aquí iría la integración con EmailJS
      // await emailjs.send(serviceId, templateId, formData, publicKey);
      
      // Simulación para demo
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setStatus('success');
      setFormData({
        fullName: '',
        telephone: '',
        email: '',
        message: ''
      });
      
      // Reset status after 5 seconds
      setTimeout(() => setStatus('idle'), 5000);
      
    } catch (error) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <Box
      sx={{
        background: 'linear-gradient(135deg, #010815 0%, #1e3a8a 50%, #10b981 100%)',
        minHeight: '100vh',
        py: { xs: 8, sm: 10, md: 12 },
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background Elements - Siguiendo el estilo de otras páginas */}
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
        <Box
          sx={{
            position: "absolute",
            backgroundColor: "rgba(59, 130, 246, 0.1)",
            borderRadius: "50%",
            filter: "blur(8rem)",
            width: { xs: "70vw", md: "50vw", lg: "35vw" },
            height: { xs: "35vh", md: "25vh", lg: "18vh" },
            top: "20%",
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
            top: "60%",
            right: "15%",
            animation: "float 8s ease-in-out infinite reverse",
          }}
        />
      </Box>

      <Container maxWidth="md">
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            background: 'rgba(255, 255, 255, 0.02)',
            backdropFilter: 'blur(20px)',
            borderRadius: '24px',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            p: { xs: 4, sm: 6, md: 8 },
            boxShadow: '0 32px 64px rgba(0, 0, 0, 0.3)',
          }}
        >
          {/* Header */}
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography
              variant="h2"
              sx={{
                fontSize: {
                  xs: "2.5rem",
                  sm: "3rem",
                  md: "3.5rem",
                  lg: "4rem"
                },
                fontWeight: 700,
                mb: 2,
                background: "linear-gradient(135deg, #ffffff 0%, #3b82f6 50%, #10b981 100%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
              }}
            >
              Contact Us
            </Typography>
            
            {/* Section Separator */}
            <Box
              sx={{
                width: "100px",
                height: "4px",
                background: "linear-gradient(135deg, #3b82f6 0%, #10b981 100%)",
                borderRadius: "2px",
                mx: "auto",
                mb: 3,
              }}
            />
            
            <Typography
              variant="h6"
              sx={{
                color: 'rgba(255, 255, 255, 0.8)',
                fontSize: { xs: '1.1rem', md: '1.3rem' },
                fontWeight: 300,
                lineHeight: 1.6,
              }}
            >
              Get in touch with our team. We'd love to hear from you.
            </Typography>
          </Box>

          {/* Status Alerts */}
          {status === 'success' && (
            <Alert 
              severity="success" 
              sx={{ 
                mb: 4, 
                backgroundColor: 'rgba(16, 185, 129, 0.1)',
                border: '1px solid rgba(16, 185, 129, 0.3)',
                color: '#10b981',
                '& .MuiAlert-icon': {
                  color: '#10b981'
                }
              }}
            >
              Message sent successfully! We'll get back to you soon.
            </Alert>
          )}
          
          {status === 'error' && (
            <Alert 
              severity="error" 
              sx={{ 
                mb: 4, 
                backgroundColor: 'rgba(239, 68, 68, 0.1)',
                border: '1px solid rgba(239, 68, 68, 0.3)',
                color: '#ef4444',
                '& .MuiAlert-icon': {
                  color: '#ef4444'
                }
              }}
            >
              Something went wrong. Please try again.
            </Alert>
          )}

          {/* Form Fields */}
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <StyledTextField
                fullWidth
                label="Full Name"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                error={!!errors.fullName}
                helperText={errors.fullName}
                disabled={status === 'loading'}
                FormHelperTextProps={{
                  sx: { color: '#ef4444', mt: 1 }
                }}
              />
            </Grid>
            
            <Grid item xs={12} sm={6}>
              <StyledTextField
                fullWidth
                label="Telephone"
                name="telephone"
                value={formData.telephone}
                onChange={handleChange}
                error={!!errors.telephone}
                helperText={errors.telephone}
                disabled={status === 'loading'}
                FormHelperTextProps={{
                  sx: { color: '#ef4444', mt: 1 }
                }}
              />
            </Grid>
            
            <Grid item xs={12}>
              <StyledTextField
                fullWidth
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                error={!!errors.email}
                helperText={errors.email}
                disabled={status === 'loading'}
                FormHelperTextProps={{
                  sx: { color: '#ef4444', mt: 1 }
                }}
              />
            </Grid>
            
            <Grid item xs={12}>
              <StyledTextField
                fullWidth
                label="Message"
                name="message"
                multiline
                rows={6}
                value={formData.message}
                onChange={handleChange}
                error={!!errors.message}
                helperText={errors.message}
                disabled={status === 'loading'}
                FormHelperTextProps={{
                  sx: { color: '#ef4444', mt: 1 }
                }}
              />
            </Grid>
          </Grid>

          {/* Submit Button */}
          <Box sx={{ textAlign: 'center', mt: 6 }}>
            <SubmitButton
              type="submit"
              disabled={status === 'loading'}
              startIcon={status === 'loading' ? <CircularProgress size={20} color="inherit" /> : null}
            >
              {status === 'loading' ? 'Sending...' : 'Send Message'}
            </SubmitButton>
          </Box>
        </Box>
      </Container>

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
    </Box>
  );
};
