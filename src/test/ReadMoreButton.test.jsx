import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ReadMoreButton } from '../components/ReadMoreButton/ReadMoreButton'

describe('ReadMoreButton', () => {
  test('renders with default text', () => {
    render(<ReadMoreButton />)
    
    const button = screen.getByRole('button')
    expect(button).toBeInTheDocument()
    expect(button).toHaveTextContent('Read More')
  })

  test('renders with custom text', () => {
    render(<ReadMoreButton text="Learn More" />)
    
    const button = screen.getByRole('button')
    expect(button).toHaveTextContent('Learn More')
  })

  test('calls onClick when clicked', async () => {
    const mockClick = vi.fn()
    const user = userEvent.setup()
    
    render(<ReadMoreButton onClick={mockClick} />)
    
    const button = screen.getByRole('button')
    await user.click(button)
    
    expect(mockClick).toHaveBeenCalledTimes(1)
  })

  test('applies custom scale prop', () => {
    render(<ReadMoreButton scale={2} />)
    
    const button = screen.getByRole('button')
    expect(button).toBeInTheDocument()
  })
})
