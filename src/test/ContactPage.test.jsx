import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { I18nextProvider } from 'react-i18next'
import { ContactPage } from '../screens/ContactPage/ContactPage'
import i18n from '../i18n'

const ContactPageWrapper = ({ children }) => (
  <I18nextProvider i18n={i18n}>
    <BrowserRouter>
      {children}
    </BrowserRouter>
  </I18nextProvider>
)

describe('ContactPage', () => {
  test('renders contact form', () => {
    render(
      <ContactPageWrapper>
        <ContactPage />
      </ContactPageWrapper>
    )
    
    const nameField = screen.queryByLabelText(/name/i) ||
                     screen.queryByPlaceholderText(/name/i)
    
    const emailField = screen.queryByLabelText(/email/i) ||
                      screen.queryByPlaceholderText(/email/i)
    
    const messageField = screen.queryByLabelText(/message/i) ||
                        screen.queryByPlaceholderText(/message/i)
    
    expect(nameField || emailField || messageField).toBeInTheDocument()
  })

  test('renders contact information', () => {
    render(
      <ContactPageWrapper>
        <ContactPage />
      </ContactPageWrapper>
    )
    
    const contactInfo = screen.queryByText(/@/i) ||
                       screen.queryByText(/\+/i) ||
                       screen.queryByText(/contact/i) ||
                       screen.queryByTestId('contact-info')
    
    expect(contactInfo).toBeInTheDocument()
  })

  test('renders submit button', () => {
    render(
      <ContactPageWrapper>
        <ContactPage />
      </ContactPageWrapper>
    )
    
    const submitButton = screen.queryByRole('button', { name: /submit/i }) ||
                        screen.queryByRole('button', { name: /send/i }) ||
                        screen.queryByRole('button', { name: /enviar/i })
    
    expect(submitButton).toBeInTheDocument()
  })

  test('renders without crashing', () => {
    expect(() => {
      render(
        <ContactPageWrapper>
          <ContactPage />
        </ContactPageWrapper>
      )
    }).not.toThrow()
  })
})
