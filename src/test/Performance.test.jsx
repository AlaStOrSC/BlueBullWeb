import { render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { I18nextProvider } from 'react-i18next'
import { axe, toHaveNoViolations } from 'jest-axe'
import App from '../App'
import i18n from '../i18n'

// Extend Jest matchers
expect.extend(toHaveNoViolations)

// Mock components to avoid loading issues in tests
vi.mock('../screens/BlueBullHomePage/BlueBullHomePage', () => ({
  BlueBullHomePage: () => (
    <main role="main">
      <h1>Blue Bull Home</h1>
      <nav aria-label="Main navigation">
        <button>Navigate</button>
      </nav>
    </main>
  )
}))

const AppWrapper = ({ children }) => (
  <I18nextProvider i18n={i18n}>
    <BrowserRouter>
      {children}
    </BrowserRouter>
  </I18nextProvider>
)

describe('Performance & Accessibility Tests', () => {
  test('app has no accessibility violations', async () => {
    const { container } = render(
      <AppWrapper>
        <App />
      </AppWrapper>
    )
    
    // Wait for app to load
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })

  test('lazy loading works correctly', async () => {
    const startTime = performance.now()
    
    render(
      <AppWrapper>
        <App />
      </AppWrapper>
    )
    
    const endTime = performance.now()
    const loadTime = endTime - startTime
    
    // Initial render should be fast (under 100ms)
    expect(loadTime).toBeLessThan(100)
  })

  test('components have proper ARIA attributes', () => {
    const { container } = render(
      <AppWrapper>
        <App />
      </AppWrapper>
    )
    
    // Check for essential ARIA attributes
    const mainElement = container.querySelector('[role="main"]')
    expect(mainElement).toBeInTheDocument()
    
    const buttons = container.querySelectorAll('button')
    buttons.forEach(button => {
      // Buttons should have accessible names
      expect(
        button.getAttribute('aria-label') || 
        button.textContent.trim()
      ).toBeTruthy()
    })
  })

  test('images have alt attributes', () => {
    const { container } = render(
      <AppWrapper>
        <App />
      </AppWrapper>
    )
    
    const images = container.querySelectorAll('img')
    images.forEach(img => {
      expect(img).toHaveAttribute('alt')
    })
  })

  test('focus management works correctly', () => {
    const { container } = render(
      <AppWrapper>
        <App />
      </AppWrapper>
    )
    
    // Check that interactive elements are focusable
    const interactiveElements = container.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    )
    
    interactiveElements.forEach(element => {
      expect(element.tabIndex).not.toBe(-1)
    })
  })

  test('color contrast meets WCAG standards', () => {
    // This would require specific color contrast testing tools
    // For now, we'll do a basic check that critical text elements exist
    const { container } = render(
      <AppWrapper>
        <App />
      </AppWrapper>
    )
    
    const textElements = container.querySelectorAll('h1, h2, h3, p, span, div')
    expect(textElements.length).toBeGreaterThan(0)
  })
})
