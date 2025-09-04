# 📝 Development Notes & Quick Reference

## 🎯 Current Project State

### ✅ Completed Features:
- VacancyCard component with grid layout
- VacancyList with Swiper slider (responsive)
- XML API integration with Personio
- TanStack Query for data management
- Responsive breakpoints implemented

### 🔧 Current Issue:
- VacancyCard responsive scaling needs improvement
- Button positioning requires fine-tuning
- Mobile-first responsive behavior

### 🏗️ Active Components:
```
src/components/
├── VacancyCard/         # Job vacancy display cards
├── VacancyList/         # Container with slider/grid
├── ReadMoreButton/      # Reusable button component
└── hooks/
    └── useVacancies.js  # API integration hook
```

---

## 🚀 Next Development Priorities:
1. Perfect responsive scaling for VacancyCard
2. Optimize mobile slider experience  
3. Test across all breakpoints
4. Performance optimization

---

## 💡 Notes for AI Assistant:
- Always apply clamp() for responsive values
- Follow PROJECT_GUIDELINES.md rules strictly
- No comments in code policy
- Keep commits under 50 chars
- Use barrel exports for all components
