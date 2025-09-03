import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  TextField,
  Grid,
  Alert,
  CircularProgress,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { ReadMoreButton } from "../ReadMoreButton";
import BackgroundImage from "../../assets/background-gradient.png";
import SeparatorImage from "../../assets/Separator.png";

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
    fontFamily: "Montserrat, Helvetica",
    position: 'static',
    transform: 'none',
    fontSize: '0.9rem',
    marginBottom: '0.5rem',
    '&.Mui-focused': {
      color: '#3b82f6',
    },
    '&.MuiFormLabel-filled': {
      color: 'rgba(255, 255, 255, 0.7)',
    },
  },
  '& .MuiOutlinedInput-input': {
    color: 'white',
    fontSize: '1rem',
    padding: '16px',
    fontFamily: "Montserrat, Helvetica",
  },
  '& .MuiInputLabel-shrink': {
    transform: 'none',
  },
}));

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    telephone: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('idle');
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched(prev => ({
      ...prev,
      [name]: true
    }));
    
    if (!value.trim()) {
      setErrors(prev => ({
        ...prev,
        [name]: 'This field is required'
      }));
    } else {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
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
    if (e && e.preventDefault) {
      e.preventDefault();
    }
    
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
        minHeight: "100vh",
        backgroundImage: `url(${BackgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        position: "relative",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0, 0, 0, 0.3)",
          zIndex: 1
        }
      }}
    >
      <Container 
        maxWidth="md" 
        sx={{ 
          position: "relative", 
          zIndex: 2,
          pt: { 
            xs: "clamp(6rem, 8vw, 8rem)",     // Padding top para navbar
            sm: "clamp(6.5rem, 8vw, 8.5rem)", 
            md: "clamp(7rem, 8vw, 9rem)",
            lg: "clamp(7.5rem, 8vw, 9.5rem)",
            xl: "clamp(8rem, 8vw, 10rem)"
          },
          pb: { 
            xs: "clamp(2rem, 3vw, 3rem)",     
            sm: "clamp(2.4rem, 3vw, 3.6rem)",  
            md: "clamp(3.2rem, 3vw, 4.2rem)", 
            lg: "clamp(4rem, 3vw, 4.8rem)",   
            xl: "clamp(4rem, 3vw, 5rem)"      
          },
          mx: "auto",
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          minHeight: "100vh"
        }}
      >
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            backgroundColor: "transparent",
            borderRadius: "1.09rem",
            position: "relative",
            width: "100%",
            maxWidth: { 
              xs: "100%",    // Mobile: 100%
              sm: "95%",     // 95%
              md: "90%",     // 90%  
              lg: "85%",     // 85%
              xl: "80%"      // Base: 80%
            },
            p: { 
              xs: "clamp(1.2rem, 2vw, 2.1rem)",   // ~60% de xl
              sm: "clamp(1.44rem, 2vw, 2.52rem)", // ~72% de xl
              md: "clamp(1.68rem, 2vw, 2.94rem)", // ~84% de xl
              lg: "clamp(2.4rem, 2vw, 3.36rem)",  // ~96% de xl
              xl: "clamp(3rem, 2vw, 3.5rem)"      // Base 100%
            },
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
          <Box sx={{ 
            textAlign: 'center', 
            mb: { 
              xs: "clamp(0.6rem, 1.8vw, 1.8rem)",   // ~60% de xl
              sm: "clamp(0.72rem, 1.8vw, 2.16rem)", // ~72% de xl  
              md: "clamp(0.84rem, 1.8vw, 2.52rem)", // ~84% de xl
              lg: "clamp(0.96rem, 1.8vw, 2.88rem)", // ~96% de xl
              xl: "clamp(2rem, 1.8vw, 3rem)"        // Base 100%
            } 
          }}>
            <Typography
              variant="h1"
              sx={{
                fontFamily: "Montserrat, Helvetica",
                fontWeight: 700,
                fontSize: {
                  xs: "clamp(1.26rem, 1.8vw, 1.62rem)",   // ~60% de xl
                  sm: "clamp(1.51rem, 1.8vw, 1.94rem)",   // ~72% de xl
                  md: "clamp(1.76rem, 1.8vw, 2.27rem)",   // ~84% de xl
                  lg: "clamp(2.02rem, 1.8vw, 2.59rem)",   // ~96% de xl
                  xl: "clamp(2.1rem, 1.8vw, 2.7rem)"      // Base 100%
                },
                color: "#ffffff",
                letterSpacing: {
                  xs: "0.05em",
                  md: "0.08em"
                },
                mb: {
                  xs: "0.48rem",  // ~60% de xl
                  md: "0.6rem",   // ~72% de xl
                  lg: "0.72rem"   // ~84% de xl
                },
                lineHeight: {
                  xs: 1.2,
                  md: 1.1
                }
              }}
            >
              Contact Us
            </Typography>
            
            {/* Separator */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                mb: {
                  xs: "0.48rem",  // ~60% de xl
                  md: "0.6rem",   // ~72% de xl  
                  lg: "0.72rem"   // ~84% de xl
                }
              }}
            >
              <Box
                component="img"
                src={SeparatorImage}
                alt="Section Separator"
                sx={{
                  width: { xs: "4rem", md: "5.5rem" },
                  height: { xs: "0.3rem", md: "0.4375rem" },
                  opacity: 0.9
                }}
              />
            </Box>
            
            <Typography
              variant="h2"
              sx={{
                fontFamily: "Montserrat, Helvetica",
                fontWeight: 400,
                fontSize: {
                  xs: "clamp(0.47rem, 1.08vw, 0.65rem)",   // ~60% de xl
                  sm: "clamp(0.56rem, 1.08vw, 0.78rem)",   // ~72% de xl
                  md: "clamp(0.66rem, 1.08vw, 0.91rem)",   // ~84% de xl
                  lg: "clamp(0.75rem, 1.08vw, 1.04rem)",   // ~96% de xl
                  xl: "clamp(0.78rem, 1.08vw, 1.08rem)"    // Base 100%
                },
                color: 'rgba(255, 255, 255, 0.8)',
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
          <Grid container spacing={{ 
            xs: 1.2,    // ~60% de xl
            sm: 1.44,   // ~72% de xl
            md: 1.68,   // ~84% de xl  
            lg: 1.92,   // ~96% de xl
            xl: 2       // Base 100%
          }}>
            <Grid item xs={12} sm={6}>
              <StyledTextField
                fullWidth
                label="Full Name"
                name="fullName"
                placeholder="Full Name"
                value={formData.fullName}
                onChange={handleChange}
                onBlur={handleBlur}
                error={!!errors.fullName}
                helperText={errors.fullName}
                disabled={status === 'loading'}
                InputLabelProps={{ shrink: true }}
                FormHelperTextProps={{
                  sx: { color: '#ef4444', mt: 1, fontFamily: "Montserrat, Helvetica" }
                }}
              />
            </Grid>
            
            <Grid item xs={12} sm={6}>
              <StyledTextField
                fullWidth
                label="Phone"
                name="telephone"
                placeholder="Phone"
                value={formData.telephone}
                onChange={handleChange}
                onBlur={handleBlur}
                error={!!errors.telephone}
                helperText={errors.telephone}
                disabled={status === 'loading'}
                InputLabelProps={{ shrink: true }}
                FormHelperTextProps={{
                  sx: { color: '#ef4444', mt: 1, fontFamily: "Montserrat, Helvetica" }
                }}
              />
            </Grid>
            
            <Grid item xs={12}>
              <StyledTextField
                fullWidth
                label="Email"
                name="email"
                placeholder="Email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                onBlur={handleBlur}
                error={!!errors.email}
                helperText={errors.email}
                disabled={status === 'loading'}
                InputLabelProps={{ shrink: true }}
                FormHelperTextProps={{
                  sx: { color: '#ef4444', mt: 1, fontFamily: "Montserrat, Helvetica" }
                }}
              />
            </Grid>
            
            <Grid item xs={12}>
              <StyledTextField
                fullWidth
                label="Message"
                name="message"
                placeholder="Message"
                multiline
                rows={6}
                value={formData.message}
                onChange={handleChange}
                onBlur={handleBlur}
                error={!!errors.message}
                helperText={errors.message}
                disabled={status === 'loading'}
                InputLabelProps={{ shrink: true }}
                FormHelperTextProps={{
                  sx: { color: '#ef4444', mt: 1, fontFamily: "Montserrat, Helvetica" }
                }}
              />
            </Grid>
          </Grid>

          {/* Submit Button */}
          <Box sx={{ 
            textAlign: 'center', 
            mt: { 
              xs: "clamp(0.6rem, 1.8vw, 1.8rem)",   // ~60% de xl
              sm: "clamp(0.72rem, 1.8vw, 2.16rem)", // ~72% de xl
              md: "clamp(0.84rem, 1.8vw, 2.52rem)", // ~84% de xl
              lg: "clamp(0.96rem, 1.8vw, 2.88rem)", // ~96% de xl
              xl: "clamp(2rem, 1.8vw, 3rem)"        // Base 100%
            } 
          }}>
            <ReadMoreButton
              text={status === 'loading' ? 'Sending...' : 'Send Message'}
              onClick={handleSubmit}
              variant="outlined"
              scale={1.2}
              type="submit"
              sx={{
                opacity: status === 'loading' ? 0.7 : 1,
                pointerEvents: status === 'loading' ? 'none' : 'auto',
              }}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
