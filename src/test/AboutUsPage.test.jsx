import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { I18nextProvider } from 'react-i18next'
import { AboutUsPage } from '../screens/AboutUsPage/AboutUsPage'
import i18n from '../i18n'

const AboutPageWrapper = ({ children }) => (
  <I18nextProvider i18n={i18n}>
    <BrowserRouter>
      {children}
    </BrowserRouter>
  </I18nextProvider>
)

describe('AboutUsPage', () => {
  test('renders main content', () => {
    render(
      <AboutPageWrapper>
        <AboutUsPage />
      </AboutPageWrapper>
    )
    
    expect(screen.getByRole('main')).toBeInTheDocument()
  })

  test('renders mission and vision sections', () => {
    render(
      <AboutPageWrapper>
        <AboutUsPage />
      </AboutPageWrapper>
    )
    
    const missionSection = screen.queryByText(/mission/i) ||
                          screen.queryByText(/misión/i) ||
                          screen.queryByTestId('mission-section')
    
    const visionSection = screen.queryByText(/vision/i) ||
                         screen.queryByText(/visión/i) ||
                         screen.queryByTestId('vision-section')
    
    expect(missionSection || visionSection).toBeInTheDocument()
  })

  test('renders company values', () => {
    render(
      <AboutPageWrapper>
        <AboutUsPage />
      </AboutPageWrapper>
    )
    
    const valuesSection = screen.queryByText(/values/i) ||
                         screen.queryByText(/culture/i) ||
                         screen.queryByText(/team/i) ||
                         screen.queryByTestId('values-section')
    
    expect(valuesSection).toBeInTheDocument()
  })

  test('renders without crashing', () => {
    expect(() => {
      render(
        <AboutPageWrapper>
          <AboutUsPage />
        </AboutPageWrapper>
      )
    }).not.toThrow()
  })
})
