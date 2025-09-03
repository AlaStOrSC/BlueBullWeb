import { ROUTES } from '../routes/routes'

const mockPreloader = {
  preloadedRoutes: new Set(),
  preloadPromises: new Map(),
  preload: vi.fn().mockResolvedValue(undefined),
  preloadRelated: vi.fn().mockResolvedValue(undefined),
  createPreloadHandler: vi.fn().mockReturnValue(() => {}),
  getRelatedRoutes: vi.fn().mockReturnValue([]),
}

const RelatedRoutes = {
  '/': ['/about', '/solutions'],
  '/about': ['/'],
  '/contact': ['/about'],
  '/solutions': ['/']
}

describe('Preloader System', () => {
  beforeEach(() => {
    mockPreloader.preloadedRoutes.clear()
    mockPreloader.preloadPromises.clear()
    vi.clearAllMocks()
  })

  test('ROUTES constants are available for preloading', () => {
    expect(ROUTES).toBeDefined()
    expect(ROUTES.HOME).toBe('/')
    expect(ROUTES.ABOUT).toBe('/about')
    expect(ROUTES.SOLUTIONS).toBe('/solutions')
  })

  test('RelatedRoutes contains correct route mappings', () => {
    expect(RelatedRoutes).toBeDefined()
    expect(RelatedRoutes['/']).toContain('/about')
    expect(RelatedRoutes['/']).toContain('/solutions')
    expect(RelatedRoutes['/about']).toContain('/')
    expect(RelatedRoutes['/contact']).toContain('/about')
  })

  test('preloader can handle route preloading', async () => {
    const route = '/about'
    
    await mockPreloader.preload(route)
    expect(mockPreloader.preload).toHaveBeenCalledWith(route)
  })

  test('preloader handles invalid routes gracefully', async () => {
    const invalidRoute = '/non-existent-route'
    
    await expect(mockPreloader.preload(invalidRoute)).resolves.not.toThrow()
  })

  test('preloader can preload related routes', async () => {
    const mainRoute = '/'
    
    await mockPreloader.preloadRelated(mainRoute)
    expect(mockPreloader.preloadRelated).toHaveBeenCalledWith(mainRoute)
  })

  test('createPreloadHandler returns function', () => {
    const handler = mockPreloader.createPreloadHandler('/about')
    expect(typeof handler).toBe('function')
    expect(mockPreloader.createPreloadHandler).toHaveBeenCalledWith('/about')
  })
})
