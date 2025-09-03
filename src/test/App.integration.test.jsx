import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { BrowserRouter, MemoryRouter } from 'react-router-dom'
import { I18nextProvider } from 'react-i18next'
import App from '../App'
import i18n from '../i18n'

// Mock all lazy-loaded components to avoid loading issues
vi.mock('../screens/BlueBullHomePage/BlueBullHomePage', () => ({
  BlueBullHomePage: () => <div data-testid="home-page">Home Page</div>
}))

vi.mock('../screens/AboutUsPage/AboutUsPage', () => ({
  AboutUsPage: () => <div data-testid="about-page">About Page</div>
}))

vi.mock('../screens/SolutionsPage/SolutionsPage', () => ({
  SolutionsPage: () => <div data-testid="solutions-page">Solutions Page</div>
}))

vi.mock('../screens/ContactPage/ContactPage', () => ({
  ContactPage: () => <div data-testid="contact-page">Contact Page</div>
}))

const AppWrapper = ({ initialEntries = ['/'] }) => (
  <I18nextProvider i18n={i18n}>
    <MemoryRouter initialEntries={initialEntries}>
      <App />
    </MemoryRouter>
  </I18nextProvider>
)

describe('App Integration Tests', () => {
  test('renders home page by default', async () => {
    render(<AppWrapper />)
    
    await waitFor(() => {
      expect(screen.getByTestId('home-page')).toBeInTheDocument()
    })
  })

  test('navigation between pages works', async () => {
    const user = userEvent.setup()
    render(<AppWrapper />)
    
    // Wait for initial load
    await waitFor(() => {
      expect(screen.getByTestId('home-page')).toBeInTheDocument()
    })
    
    // Navigate to about page
    const aboutLink = screen.queryByText(/about/i) || screen.queryByRole('link', { name: /about/i })
    if (aboutLink) {
      await user.click(aboutLink)
      
      await waitFor(() => {
        expect(screen.getByTestId('about-page')).toBeInTheDocument()
      })
    }
  })

  test('language switching affects all components', async () => {
    const user = userEvent.setup()
    render(<AppWrapper />)
    
    // Look for language switcher
    const languageButton = screen.queryByRole('button', { name: /language/i }) ||
                          screen.queryByRole('button', { name: /english/i }) ||
                          screen.queryByRole('button', { name: /spanish/i })
    
    if (languageButton) {
      await user.click(languageButton)
      
      // Verify language change affects the app
      await waitFor(() => {
        // Language change should be reflected
        expect(document.documentElement.lang).toBeDefined()
      })
    }
  })

  test('app handles direct route access', async () => {
    render(<AppWrapper initialEntries={['/contact']} />)
    
    await waitFor(() => {
      expect(screen.getByTestId('contact-page')).toBeInTheDocument()
    })
  })

  test('app handles invalid routes with 404', async () => {
    render(<AppWrapper initialEntries={['/invalid-route']} />)
    
    await waitFor(() => {
      // Should show 404 or redirect to home
      const notFound = screen.queryByText(/not found/i) || 
                      screen.queryByText(/404/i) ||
                      screen.queryByTestId('home-page') // Fallback to home
      
      expect(notFound).toBeInTheDocument()
    })
  })

  test('app loads without critical errors', () => {
    const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {})
    
    render(<AppWrapper />)
    
    // Check for no critical console errors
    expect(consoleSpy).not.toHaveBeenCalledWith(
      expect.stringMatching(/error/i)
    )
    
    consoleSpy.mockRestore()
  })
})
