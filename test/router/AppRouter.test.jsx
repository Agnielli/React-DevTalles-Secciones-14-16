import { render, screen } from "@testing-library/react"
import { AppRouter } from "../../src/router/AppRouter"
import { AuthContext } from "../../src/auth"
import { MemoryRouter } from "react-router-dom"

describe('pruebas en AppRouter', () => { 
  
  test('should mostrar login si no está autenticado', () => { 

    const contextValue = {
      logged: false
    }

    render(
      <MemoryRouter initialEntries={['/marvel']}>
        <AuthContext.Provider value={ contextValue }>
          <AppRouter />
        </AuthContext.Provider>
      </MemoryRouter>
    )
    screen.debug()
    expect( screen.getAllByText('Login').length).toBe(2)
  })

  test('should mostrar login si no está autenticado', () => { 

    const contextValue = {
      logged: true,
      user: {
        id: '123',
        name: 'Juan'
      }
    }

    render(
      <MemoryRouter initialEntries={['/login']}>
        <AuthContext.Provider value={ contextValue }>
          <AppRouter />
        </AuthContext.Provider>
      </MemoryRouter>
    )
    // screen.debug()
    expect( screen.getAllByText('Marvel').length).toBeGreaterThanOrEqual(1);
  })
 })