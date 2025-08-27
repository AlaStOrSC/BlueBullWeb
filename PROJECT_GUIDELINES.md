# 📋 BlueBull Web - Project Guidelines & Development Rules

> **Comprehensive guide for developers and AI assistants working on BlueBull Web project**

---

## 🎯 **PROJECT OVERVIEW**

BlueBull Web is a modern, responsive website for a gaming technology company. The project emphasizes professional design, exceptional responsive behavior, and scalable component architecture.

### **Core Principles:**
- **Mobile-first responsive design**
- **Component reusability and modularity**
- **Performance optimization**
- **Internationalization support**
- **Professional code standards**

---

## 🛠️ **TECHNOLOGY STACK**

### **Frontend Framework:**
- **React 18.2.0** - Main frontend framework
- **Vite** - Build tool and development server
- **JavaScript (ES6+)** - Programming language

### **UI & Styling:**
- **Material-UI (MUI) 5.16.7** - Component library
- **@emotion/react & @emotion/styled** - CSS-in-JS styling
- **@mui/icons-material** - Icon library

### **Routing & Navigation:**
- **React Router DOM** - Client-side routing
- **Custom ScrollToTop** - Scroll position management

### **Internationalization:**
- **i18next 25.4.2** - Internationalization framework
- **i18next-browser-languagedetector** - Language detection
- **react-i18next** - React integration

### **Development Tools:**
- **Git** - Version control
- **GitHub** - Repository hosting
- **VS Code** - Recommended IDE

---

## 📐 **RESPONSIVE DESIGN RULES**

### **🔥 CRITICAL RULES - ALWAYS FOLLOW:**

#### **1. Use Relative Units ONLY**
```javascript
// ✅ CORRECT - Use clamp() for fluid scaling
fontSize: "clamp(1rem, 2.5vw, 1.5rem)"
padding: "clamp(1rem, 4vw, 2rem)"

// ❌ WRONG - Never use fixed pixels for responsive elements
fontSize: "16px"
padding: "20px"
```

#### **2. Viewport-Based Measurements**
```javascript
// ✅ CORRECT - Responsive spacing
px: {
  xs: "clamp(1rem, 4vw, 2rem)",
  sm: "clamp(1.5rem, 3.5vw, 2.5rem)",
  md: "clamp(2rem, 3vw, 3rem)",
  lg: "clamp(2.5rem, 2.5vw, 3.5rem)",
  xl: "clamp(3rem, 2vw, 4rem)"
}
```

#### **3. Mandatory Breakpoints**
Always define responsive behavior for ALL breakpoints:
- **xs**: 0px+ (Mobile portrait)
- **sm**: 600px+ (Mobile landscape, small tablets)
- **md**: 960px+ (Tablets, small laptops)
- **lg**: 1280px+ (Desktops, large laptops)
- **xl**: 1920px+ (Large desktops, ultra-wide)

#### **4. Typography Scaling**
```javascript
// ✅ ALWAYS use clamp for text
fontSize: {
  xs: "clamp(0.9rem, 3vw, 1.1rem)",
  sm: "clamp(1rem, 2.8vw, 1.2rem)",
  md: "clamp(1.1rem, 2.5vw, 1.3rem)",
  lg: "clamp(1.2rem, 2.2vw, 1.4rem)"
}
```

---

## 🏗️ **COMPONENT ARCHITECTURE**

### **Directory Structure:**
```
src/
├── components/          # Reusable components
│   ├── [ComponentName]/
│   │   ├── index.js     # Barrel export (REQUIRED)
│   │   └── ComponentName.jsx
├── screens/             # Page components
├── assets/              # Static files (images, icons)
├── i18n/               # Internationalization
├── routes/             # Routing configuration
└── hooks/              # Custom hooks (future)
```

### **Component Rules:**

#### **1. Barrel Exports (MANDATORY)**
Every component folder MUST have an `index.js`:
```javascript
// src/components/ComponentName/index.js
export { ComponentName } from "./ComponentName";
```

#### **2. Component Structure Template**
```javascript
import React from "react";
import { Box, Typography } from "@mui/material";

export const ComponentName = ({ 
  prop1, 
  prop2,
  ...props 
}) => {
  return (
    <Box
      sx={{
        // Always include responsive styling
        width: "100%",
        maxWidth: { xs: "100%", md: "80%", lg: "70%" },
        mx: "auto",
        p: {
          xs: "clamp(1rem, 4vw, 1.5rem)",
          md: "clamp(1.5rem, 3vw, 2rem)"
        }
      }}
      {...props}
    >
      {/* Component content */}
    </Box>
  );
};
```

#### **3. Prop Validation (RECOMMENDED)**
```javascript
ComponentName.propTypes = {
  prop1: PropTypes.string.isRequired,
  prop2: PropTypes.string,
};
```

---

## 🎨 **STYLING STANDARDS**

### **Color Palette:**
- **Primary**: Material-UI default blue
- **Text**: White (#ffffff) on dark backgrounds
- **Background**: Gradient overlays with transparency

### **Typography Rules:**
- **Font Family**: "Montserrat, Helvetica" for headings
- **Font Weights**: 700 (bold) for titles, 400 (normal) for body
- **Line Height**: 1.2 for headings, 1.6 for body text

### **Spacing System:**
```javascript
// Consistent spacing using clamp()
const spacing = {
  xs: "clamp(0.5rem, 2vw, 1rem)",
  sm: "clamp(1rem, 3vw, 1.5rem)", 
  md: "clamp(1.5rem, 4vw, 2rem)",
  lg: "clamp(2rem, 5vw, 3rem)",
  xl: "clamp(3rem, 6vw, 4rem)"
};
```

### **Grid Layout Rules:**
```javascript
// ✅ CORRECT - Proper centering and responsive grid
<Box sx={{ display: "flex", justifyContent: "center", width: "100%" }}>
  <Grid 
    container 
    spacing={{ xs: 2, sm: 3, md: 4, lg: 5 }}
    justifyContent="center"
    alignItems="stretch"
    sx={{ 
      maxWidth: { xs: "100%", sm: "95%", md: "90%", lg: "85%" },
      px: { xs: "1rem", sm: "2rem", md: "3rem" }
    }}
  >
    {items.map((item) => (
      <Grid 
        item 
        xs={12} sm={6} md={4} lg={3}
        key={item.id}
        sx={{ display: "flex", justifyContent: "center", alignItems: "stretch" }}
      >
        <ComponentCard {...item} />
      </Grid>
    ))}
  </Grid>
</Box>
```

---

## 🔧 **DEVELOPMENT WORKFLOW**

### **File Creation Order:**
1. Create component folder: `src/components/ComponentName/`
2. Create main component: `ComponentName.jsx`
3. Create barrel export: `index.js`
4. Import in parent component
5. Test responsive behavior

### **Testing Checklist:**
- [ ] Component renders on all breakpoints (xs, sm, md, lg, xl)
- [ ] Text scales properly with clamp()
- [ ] Spacing is consistent and responsive
- [ ] Images scale without distortion
- [ ] Grid layout centers correctly
- [ ] Component is reusable with different props

### **Git Commit Standards:**
```bash
# Format: type: description
feat: add new Solutions page with responsive design
fix: correct navbar spacing on mobile devices
style: improve card centering in Solutions section
refactor: extract reusable ImageAndTextCard component
```

---

## 📁 **EXISTING COMPONENTS LIBRARY**

### **Layout Components:**
- **MainLayout** - Main page wrapper with Navbar and Footer
- **StandardSection** - Reusable section header with separator

### **UI Components:**
- **ImageAndTextCard** - Flexible image/text layout
- **SolutionCard** - Gradient border cards with icons
- **PartnerCard** - Partner logo display cards
- **TestimonialCard** - Customer testimonial cards
- **ReadMoreButton** - Expandable content button

### **Navigation Components:**
- **Navbar** - Responsive navigation bar
- **LanguageSwitcher** - Multi-language toggle
- **ScrollToTop** - Automatic scroll management

### **Page Components:**
- **BlueBullHomePage** - Complete homepage with sections
- **CaseStudiesPage** - Case studies showcase
- **SolutionsPage** - Services and products page

---

## 🌍 **INTERNATIONALIZATION RULES**

### **Adding New Text:**
1. Add key to all locale files: `src/i18n/locales/`
2. Use `useTranslation` hook in components
3. Never hardcode text strings

```javascript
// ✅ CORRECT
const { t } = useTranslation();
<Typography>{t('common.title')}</Typography>

// ❌ WRONG
<Typography>Hardcoded Title</Typography>
```

### **Supported Languages:**
- **English (en)** - Primary language
- **Spanish (es)** - Secondary language  
- **Portuguese (pt)** - Additional language

---

## 🚀 **PERFORMANCE GUIDELINES**

### **Image Optimization:**
- Use appropriate formats (PNG for logos, JPG for photos)
- Implement lazy loading for non-critical images
- Compress images before adding to assets

### **Code Splitting:**
- Use React.lazy() for page components when needed
- Keep bundle sizes reasonable

### **Responsive Images:**
```javascript
// ✅ CORRECT - Responsive image sizing
<Box
  component="img"
  src={imageSrc}
  sx={{
    width: "100%",
    maxWidth: { xs: "100%", md: "80%", lg: "60%" },
    height: "auto",
    objectFit: "cover"
  }}
/>
```

---

## 🐛 **COMMON PITFALLS TO AVOID**

### **❌ Never Do:**
1. Use fixed pixel values for responsive elements
2. Forget to test on all breakpoints
3. Hardcode text without i18n
4. Create components without barrel exports
5. Use `mx: "auto"` alone for centering grids
6. Ignore mobile-first approach

### **✅ Always Do:**
1. Use clamp() for all measurements
2. Test responsive behavior thoroughly  
3. Wrap grids in flex containers for perfect centering
4. Follow component folder structure
5. Add proper prop validation
6. Write descriptive commit messages

---

## 📋 **CODE REVIEW CHECKLIST**

Before merging any code, verify:

- [ ] **Responsive Design**: Works on xs, sm, md, lg, xl breakpoints
- [ ] **Relative Units**: All measurements use clamp(), vw, rem
- [ ] **Component Structure**: Proper folder structure with index.js
- [ ] **Internationalization**: No hardcoded text strings
- [ ] **Performance**: Images optimized, no unnecessary re-renders
- [ ] **Code Quality**: Clean, readable, properly commented
- [ ] **Testing**: Component tested across different screen sizes
- [ ] **Git**: Descriptive commit message following standards

---

## 🔮 **FUTURE DEVELOPMENT IDEAS**

### **Planned Features:**
<!-- Add your planned features here -->

### **Technical Improvements:**
<!-- Add technical improvements here -->

### **Design Enhancements:**
<!-- Add design enhancement ideas here -->

### **Performance Optimizations:**
<!-- Add performance optimization plans here -->

---

## 📞 **PROJECT CONTACTS & RESOURCES**

### **Repository:**
- **GitHub**: https://github.com/AlaStOrSC/BlueBullWeb
- **Branch**: master

### **Documentation:**
- **Development Log**: `DEVELOPMENT_LOG.md`
- **Project Guidelines**: `PROJECT_GUIDELINES.md` (this file)

### **Key Files to Reference:**
- **Main App**: `src/App.jsx`
- **Routing**: `src/routes/AppRouter.jsx`
- **Theme**: Material-UI default theme
- **Constants**: To be created in `src/config/` (future improvement)

---

**📝 Last Updated**: August 26, 2025
**📊 Project Status**: Active Development
**🎯 Current Focus**: Responsive design perfection and component library expansion

---

> **Note for AI Assistants**: Always reference this document before making changes. Follow these guidelines strictly to maintain project consistency and quality standards.
