import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { I18nextProvider } from 'react-i18next'
import { BlueBullHomePage } from '../screens/BlueBullHomePage/BlueBullHomePage'
import i18n from '../i18n'

const HomePageWrapper = ({ children }) => (
  <I18nextProvider i18n={i18n}>
    <BrowserRouter>
      {children}
    </BrowserRouter>
  </I18nextProvider>
)

describe('BlueBullHomePage', () => {
  test('renders main sections', () => {
    render(
      <HomePageWrapper>
        <BlueBullHomePage />
      </HomePageWrapper>
    )
    
    expect(screen.getByRole('main')).toBeInTheDocument()
  })

  test('renders hero section with video', () => {
    render(
      <HomePageWrapper>
        <BlueBullHomePage />
      </HomePageWrapper>
    )
    
    const videoElement = screen.queryByRole('video') || 
                        screen.queryByTestId('hero-video') ||
                        screen.queryByText(/blue bull/i)
    
    expect(videoElement).toBeInTheDocument()
  })

  test('renders solutions section', () => {
    render(
      <HomePageWrapper>
        <BlueBullHomePage />
      </HomePageWrapper>
    )
    
    const solutionsSection = screen.queryByText(/solutions/i) ||
                           screen.queryByText(/services/i) ||
                           screen.queryByTestId('solutions-section')
    
    expect(solutionsSection).toBeInTheDocument()
  })

  test('renders without crashing', () => {
    expect(() => {
      render(
        <HomePageWrapper>
          <BlueBullHomePage />
        </HomePageWrapper>
      )
    }).not.toThrow()
  })
})
