import { ROUTES } from '../routes/routes'

describe('Routes Configuration', () => {
  test('ROUTES object is defined and not empty', () => {
    expect(ROUTES).toBeDefined()
    expect(typeof ROUTES).toBe('object')
    expect(Object.keys(ROUTES).length).toBeGreaterThan(0)
  })

  test('all routes have valid string values', () => {
    Object.values(ROUTES).forEach(route => {
      expect(typeof route).toBe('string')
      expect(route.startsWith('/')).toBe(true)
    })
  })

  test('includes main application routes', () => {
    expect(ROUTES.HOME).toBe('/')
    expect(ROUTES.ABOUT).toBe('/about')
    expect(ROUTES.SOLUTIONS).toBe('/solutions')
    expect(ROUTES.CONTACT).toBe('/contact')
  })

  test('no duplicate route values', () => {
    const routeValues = Object.values(ROUTES)
    const uniqueValues = [...new Set(routeValues)]
    
    expect(routeValues.length).toBe(uniqueValues.length)
  })

  test('route constants follow naming convention', () => {
    Object.keys(ROUTES).forEach(key => {
      expect(key).toBe(key.toUpperCase())
      expect(key).toMatch(/^[A-Z_]+$/)
    })
  })
})
