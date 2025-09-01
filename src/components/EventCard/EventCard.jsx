import React, { useState, useEffect } from "react";
import { Box, Typography, Modal, IconButton, Grid } from "@mui/material";
import { Close as CloseIcon, ChevronLeft, ChevronRight } from "@mui/icons-material";
import { StandardSection } from "../StandardSection";
import { ReadMoreButton } from "../ReadMoreButton";
import Separator2 from "../../assets/Separator2.png";

// Componente individual para cada evento
const EventItemCard = ({ event, onShowMore }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);

  // Carrusel automático de imágenes de previsualización
  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => {
        const maxImages = Math.min(event.gallery.length, 8);
        return prevIndex + 1;
      });
    }, 3000); // Cambiar cada 3 segundos

    return () => clearInterval(interval);
  }, [event.gallery.length]);

  // Manejar el reset invisible cuando llegue al final
  React.useEffect(() => {
    const maxImages = Math.min(event.gallery.length, 8);
    
    if (currentImageIndex === maxImages) {
      // Cuando llegue al final, hacer reset invisible después de la transición
      const timer = setTimeout(() => {
        setIsTransitioning(false); // Quitar transición
        setCurrentImageIndex(0); // Reset a la primera imagen
        
        // Restaurar transición en el siguiente frame
        requestAnimationFrame(() => {
          setIsTransitioning(true);
        });
      }, 1000); // Tiempo igual a la duración de la transición
      
      return () => clearTimeout(timer);
    }
  }, [currentImageIndex, event.gallery.length]);

  // Obtener todas las imágenes para el carrusel infinito
  const getCarouselImages = () => {
    const maxImages = Math.min(event.gallery.length, 8);
    const images = [];
    
    // Agregar todas las imágenes originales
    for (let i = 0; i < maxImages; i++) {
      images.push(event.gallery[i]);
    }
    
    // Duplicar las primeras 3 imágenes al final para transición suave
    for (let i = 0; i < 3; i++) {
      images.push(event.gallery[i]);
    }
    
    return images;
  };

  const carouselImages = getCarouselImages();

  return (
    <Box
      sx={{
        borderRadius: {
          xs: "1rem",
          md: "1.25rem"
        },
        position: "relative",
        backgroundColor: "transparent",
        transition: "all 0.3s ease",
        overflow: "hidden",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          borderRadius: {
            xs: "1rem",
            md: "1.25rem"
          },
          padding: "2px",
          background: "linear-gradient(180deg, rgba(111,141,247,1) 0%, rgba(84,107,186,1) 28%, rgba(18,36,99,1) 88%)",
          mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          maskComposite: "xor",
          WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
        },
        "&:hover": {
          transform: "translateY(-0.5rem)",
          "&::before": {
            background: "linear-gradient(180deg, rgba(111,141,247,1) 0%, rgba(84,107,186,1) 50%, rgba(59,130,246,1) 100%)",
          }
        }
      }}
    >
      {/* Carrusel de imágenes con efecto deslizamiento */}
      <Box
        sx={{
          position: "relative",
          height: {
            xs: "10.8rem", // 12rem - 10% = 10.8rem
            sm: "12.6rem", // 14rem - 10% = 12.6rem
            md: "14.4rem"  // 16rem - 10% = 14.4rem
          },
          overflow: "hidden",
          // Agregar margen interno para que no tape el borde
          m: "2px", // Mismo valor que el padding del ::before
          borderRadius: {
            xs: "calc(1rem - 2px)",
            md: "calc(1.25rem - 2px)"
          }
        }}
      >
        {/* Container del carrusel con animación de deslizamiento */}
        <Box
          sx={{
            display: "flex",
            width: `${(carouselImages.length * 100) / 3}%`, // Ancho total para todas las imágenes
            height: "100%",
            transform: `translateX(-${(currentImageIndex * 100) / 3}%)`, // Deslizar basado en el índice actual
            transition: isTransitioning 
              ? "transform 1s cubic-bezier(0.25, 0.46, 0.45, 0.94)" 
              : "none", // Sin transición durante el reset
          }}
        >
          {carouselImages.map((image, index) => (
            <Box
              key={`carousel-${index}`}
              sx={{
                flex: "0 0 33.333%", // Cada imagen ocupa 1/3 del ancho visible
                height: "100%",
                position: "relative"
              }}
            >
              <Box
                component="img"
                src={image}
                alt={`${event.title} carousel ${index + 1}`}
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  // Pequeño gap entre imágenes
                  borderRight: index < carouselImages.length - 1 ? "0.125rem solid transparent" : "none"
                }}
              />
            </Box>
          ))}
        </Box>

        {/* Overlay con efecto gradiente */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "linear-gradient(to bottom, transparent 60%, rgba(1, 8, 21, 0.4) 100%)",
            pointerEvents: "none"
          }}
        />

        {/* Indicador de carrusel */}
        <Box
          sx={{
            position: "absolute",
            bottom: "0.5rem",
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            gap: "0.25rem"
          }}
        >
          {Array.from({ length: Math.min(event.gallery.length, 8) }).map((_, index) => (
            <Box
              key={index}
              sx={{
                width: "0.5rem",
                height: "0.5rem",
                borderRadius: "50%",
                backgroundColor: index === (currentImageIndex % Math.min(event.gallery.length, 8))
                  ? "rgba(255, 255, 255, 0.9)" 
                  : "rgba(255, 255, 255, 0.3)",
                transition: "all 0.3s ease"
              }}
            />
          ))}
        </Box>

        {/* Efecto de difuminado en los bordes para suavizar la transición */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "0.5rem",
            height: "100%",
            background: "linear-gradient(to right, rgba(1, 8, 21, 0.3), transparent)",
            pointerEvents: "none",
            zIndex: 1
          }}
        />
        <Box
          sx={{
            position: "absolute",
            top: 0,
            right: 0,
            width: "0.5rem",
            height: "100%",
            background: "linear-gradient(to left, rgba(1, 8, 21, 0.3), transparent)",
            pointerEvents: "none",
            zIndex: 1
          }}
        />
      </Box>
      
      {/* Contenido */}
      <Box
        sx={{
          p: {
            xs: "1.5rem",
            md: "2rem"
          },
          // Agregar margen lateral para respetar el borde
          mx: "2px", // Solo laterales para mantener el padding vertical
        }}
      >
        {/* Título/Descripción */}
        <Typography
          variant="h3"
          sx={{
            fontFamily: "Montserrat, Helvetica",
            fontWeight: 600,
            fontSize: {
              xs: "clamp(1rem, 3vw, 1.2rem)",
              sm: "clamp(1.1rem, 2.8vw, 1.3rem)",
              md: "clamp(1.2rem, 2.5vw, 1.4rem)"
            },
            color: "#ffffff",
            mb: {
              xs: "1rem",
              md: "1.25rem"
            },
            lineHeight: 1.3
          }}
        >
          {event.title}
        </Typography>

        {/* Fecha */}
        <Typography
          sx={{
            fontFamily: "Montserrat, Helvetica",
            fontWeight: 400,
            fontSize: {
              xs: "clamp(0.85rem, 2.5vw, 1rem)",
              md: "clamp(0.9rem, 2vw, 1.1rem)"
            },
            color: "rgba(255, 255, 255, 0.7)",
            mb: {
              xs: "1.5rem",
              md: "2rem"
            }
          }}
        >
          {event.date}
        </Typography>

        {/* Separador */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            mb: {
              xs: "1.5rem",
              md: "2rem"
            }
          }}
        >
          <Box
            component="img"
            src={Separator2}
            alt="Separator"
            sx={{
              width: { xs: "3rem", md: "4rem" },
              height: { xs: "0.25rem", md: "0.3rem" },
              opacity: 0.8
            }}
          />
        </Box>

        {/* Botón Show More */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center"
          }}
        >
          <ReadMoreButton
            text="Show More"
            onClick={() => onShowMore(event)}
            sx={{
              width: { xs: "10rem", md: "12rem" },
              height: { xs: "2.5rem", md: "3rem" }
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

// Modal para mostrar galería de fotos
const EventModal = ({ open, onClose, event }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!event) return null;

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === event.gallery.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? event.gallery.length - 1 : prev - 1
    );
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        p: 2
      }}
    >
      <Box
        sx={{
          width: "90%",
          maxWidth: "1200px",
          maxHeight: "90vh",
          backgroundColor: "rgba(1, 8, 21, 0.95)",
          backdropFilter: "blur(20px)",
          borderRadius: "1rem",
          border: "1px solid rgba(255, 255, 255, 0.1)",
          outline: "none",
          overflow: "hidden"
        }}
      >
        {/* Header del modal */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            p: 3,
            borderBottom: "1px solid rgba(255, 255, 255, 0.1)"
          }}
        >
          <Typography
            variant="h2"
            sx={{
              fontFamily: "Montserrat, Helvetica",
              fontWeight: 600,
              fontSize: {
                xs: "clamp(1.2rem, 4vw, 1.5rem)",
                md: "clamp(1.5rem, 3vw, 2rem)"
              },
              color: "#ffffff"
            }}
          >
            {event.title}
          </Typography>
          <IconButton
            onClick={onClose}
            sx={{
              color: "#ffffff",
              "&:hover": {
                backgroundColor: "rgba(255, 255, 255, 0.1)"
              }
            }}
          >
            <CloseIcon />
          </IconButton>
        </Box>

        {/* Contenido del modal */}
        <Box
          sx={{
            p: 3,
            maxHeight: "calc(90vh - 100px)",
            overflowY: "auto"
          }}
        >
          {/* Imagen principal con navegación */}
          <Box
            sx={{
              position: "relative",
              mb: 3
            }}
          >
            <Box
              component="img"
              src={event.gallery[currentImageIndex]}
              alt={`${event.title} - Image ${currentImageIndex + 1}`}
              sx={{
                width: "100%",
                height: {
                  xs: "300px",
                  md: "400px"
                },
                objectFit: "cover",
                borderRadius: "0.5rem"
              }}
            />
            
            {/* Botones de navegación */}
            <IconButton
              onClick={prevImage}
              sx={{
                position: "absolute",
                left: "1rem",
                top: "50%",
                transform: "translateY(-50%)",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                color: "#ffffff",
                "&:hover": {
                  backgroundColor: "rgba(0, 0, 0, 0.7)"
                }
              }}
            >
              <ChevronLeft />
            </IconButton>
            
            <IconButton
              onClick={nextImage}
              sx={{
                position: "absolute",
                right: "1rem",
                top: "50%",
                transform: "translateY(-50%)",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                color: "#ffffff",
                "&:hover": {
                  backgroundColor: "rgba(0, 0, 0, 0.7)"
                }
              }}
            >
              <ChevronRight />
            </IconButton>

            {/* Indicador de imagen actual */}
            <Typography
              sx={{
                position: "absolute",
                bottom: "1rem",
                right: "1rem",
                backgroundColor: "rgba(0, 0, 0, 0.7)",
                color: "#ffffff",
                px: 2,
                py: 0.5,
                borderRadius: "1rem",
                fontSize: "0.9rem"
              }}
            >
              {currentImageIndex + 1} / {event.gallery.length}
            </Typography>
          </Box>

          {/* Galería de miniaturas */}
          <Grid container spacing={1}>
            {event.gallery.map((image, index) => (
              <Grid item xs={3} sm={2} md={1.5} key={index}>
                <Box
                  component="img"
                  src={image}
                  alt={`Thumbnail ${index + 1}`}
                  onClick={() => setCurrentImageIndex(index)}
                  sx={{
                    width: "100%",
                    height: "60px",
                    objectFit: "cover",
                    borderRadius: "0.25rem",
                    cursor: "pointer",
                    border: currentImageIndex === index ? "2px solid #3b82f6" : "2px solid transparent",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      border: "2px solid #60a5fa"
                    }
                  }}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </Modal>
  );
};

// Componente principal EventCard
export const EventCard = ({
  title,
  description,
  events = [],
  titleColor = "#ffffff",
  descriptionColor = "#ffffff",
  showSeparator = true,
  customStyles = {}
}) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [currentEventIndex, setCurrentEventIndex] = useState(0);

  const handleShowMore = (event) => {
    setSelectedEvent(event);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedEvent(null);
  };

  const nextEvent = () => {
    if (currentEventIndex < events.length - 2) {
      setCurrentEventIndex(currentEventIndex + 1);
    }
  };

  const prevEvent = () => {
    if (currentEventIndex > 0) {
      setCurrentEventIndex(currentEventIndex - 1);
    }
  };

  const visibleEvents = events.slice(currentEventIndex, currentEventIndex + 2);

  return (
    <>
      <Box
        sx={{
          width: "100%",
          maxWidth: {
            xs: "95%",
            sm: "90%",
            md: "85%",
            lg: "80%",
            xl: "75%"
          },
          mx: "auto",
          mb: {
            xs: "4rem",
            sm: "5rem",
            md: "6rem",
            lg: "8rem"
          },
          px: {
            xs: "clamp(1rem, 4vw, 2rem)",
            md: "clamp(1.5rem, 3vw, 2.5rem)"
          },
          position: "relative", // Para posicionamiento de flechas
          ...customStyles
        }}
      >
        {/* StandardSection para título y descripción */}
        <StandardSection
          title={title}
          description={description}
          titleColor={titleColor}
          descriptionColor={descriptionColor}
          showSeparator={showSeparator}
        />

        {/* Carrusel de eventos */}
        <Box
          sx={{
            position: "relative", // Para posicionar las flechas
            mt: {
              xs: "2rem",
              md: "3rem"
            },
            // Agregar padding lateral para que las flechas no se superpongan con el contenido
            px: {
              xs: "2rem",
              md: "3rem"
            }
          }}
        >
          {/* Grid de eventos */}
          <Grid container spacing={{ xs: 2, md: 3 }}>
            {visibleEvents.map((event, index) => (
              <Grid item xs={12} md={6} key={`${currentEventIndex}-${index}`}>
                <EventItemCard
                  event={event}
                  onShowMore={handleShowMore}
                />
              </Grid>
            ))}
          </Grid>

          {/* Controles del carrusel - DENTRO del contenedor de eventos */}
          {events.length > 2 && (
            <>
              {/* Flecha izquierda */}
              {currentEventIndex > 0 && (
                <IconButton
                  onClick={prevEvent}
                  sx={{
                    position: "absolute",
                    left: {
                      xs: "-1rem",
                      md: "-1.5rem"
                    },
                    top: "50%",
                    transform: "translateY(-50%)",
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                    backdropFilter: "blur(10px)",
                    color: "#ffffff",
                    border: "1px solid rgba(255, 255, 255, 0.2)",
                    width: {
                      xs: "2.5rem",
                      md: "3rem"
                    },
                    height: {
                      xs: "2.5rem",
                      md: "3rem"
                    },
                    "&:hover": {
                      backgroundColor: "rgba(255, 255, 255, 0.2)",
                      border: "1px solid rgba(59, 130, 246, 0.5)",
                      transform: "translateY(-50%) scale(1.1)"
                    },
                    transition: "all 0.3s ease",
                    zIndex: 10
                  }}
                >
                  <ChevronLeft sx={{ fontSize: { xs: "1.5rem", md: "2rem" } }} />
                </IconButton>
              )}

              {/* Flecha derecha */}
              {currentEventIndex < events.length - 2 && (
                <IconButton
                  onClick={nextEvent}
                  sx={{
                    position: "absolute",
                    right: {
                      xs: "-1rem",
                      md: "-1.5rem"
                    },
                    top: "50%",
                    transform: "translateY(-50%)",
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                    backdropFilter: "blur(10px)",
                    color: "#ffffff",
                    border: "1px solid rgba(255, 255, 255, 0.2)",
                    width: {
                      xs: "2.5rem",
                      md: "3rem"
                    },
                    height: {
                      xs: "2.5rem",
                      md: "3rem"
                    },
                    "&:hover": {
                      backgroundColor: "rgba(255, 255, 255, 0.2)",
                      border: "1px solid rgba(59, 130, 246, 0.5)",
                      transform: "translateY(-50%) scale(1.1)"
                    },
                    transition: "all 0.3s ease",
                    zIndex: 10
                  }}
                >
                  <ChevronRight sx={{ fontSize: { xs: "1.5rem", md: "2rem" } }} />
                </IconButton>
              )}
            </>
          )}
        </Box>

        {/* Modal de galería */}
        <EventModal
          open={modalOpen}
          onClose={handleCloseModal}
          event={selectedEvent}
        />
      </Box>
    </>
  );
};
