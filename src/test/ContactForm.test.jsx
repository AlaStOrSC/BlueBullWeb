import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ContactForm } from '../components/ContactForm/ContactForm'

vi.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key) => key
  })
}))

describe('ContactForm', () => {
  test('renders all form fields', () => {
    render(<ContactForm />)
    
    expect(screen.getByLabelText(/full name/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/phone/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/message/i)).toBeInTheDocument()
  })

  test('shows validation errors on blur with empty fields', async () => {
    const user = userEvent.setup()
    render(<ContactForm />)
    
    const nameField = screen.getByLabelText(/full name/i)
    await user.click(nameField)
    await user.tab()
    
    await waitFor(() => {
      expect(screen.getByText(/this field is required/i)).toBeInTheDocument()
    })
  })

  test('clears validation errors when field is filled', async () => {
    const user = userEvent.setup()
    render(<ContactForm />)
    
    const nameField = screen.getByLabelText(/full name/i)
    await user.click(nameField)
    await user.tab()
    
    await waitFor(() => {
      expect(screen.getByText(/this field is required/i)).toBeInTheDocument()
    })
    
    await user.type(nameField, 'John Doe')
    await user.tab()
    
    await waitFor(() => {
      expect(screen.queryByText(/this field is required/i)).not.toBeInTheDocument()
    })
  })

  test('validates email format', async () => {
    const user = userEvent.setup()
    render(<ContactForm />)
    
    const emailField = screen.getByLabelText(/email/i)
    await user.type(emailField, 'invalid-email')
    await user.tab()
    
    await waitFor(() => {
      expect(screen.getByText(/email format is invalid/i)).toBeInTheDocument()
    })
  })

  test('validates message minimum length', async () => {
    const user = userEvent.setup()
    render(<ContactForm />)
    
    const messageField = screen.getByLabelText(/message/i)
    await user.type(messageField, 'short')
    await user.tab()
    
    await waitFor(() => {
      expect(screen.getByText(/message must be at least 10 characters/i)).toBeInTheDocument()
    })
  })

  test('submits form with valid data', async () => {
    const user = userEvent.setup()
    render(<ContactForm />)
    
    await user.type(screen.getByLabelText(/full name/i), 'John Doe')
    await user.type(screen.getByLabelText(/phone/i), '+1234567890')
    await user.type(screen.getByLabelText(/email/i), 'john@example.com')
    await user.type(screen.getByLabelText(/message/i), 'This is a test message for the form')
    
    const submitButton = screen.getByRole('button', { name: /send message/i })
    await user.click(submitButton)
    
    await waitFor(() => {
      expect(screen.getByText(/message sent successfully/i)).toBeInTheDocument()
    })
  })
})
