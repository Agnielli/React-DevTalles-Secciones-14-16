import { MemoryRouter } from "react-router-dom"
import { AuthContext } from "../../src/auth"
import { PrivateRoute } from "../../src/router/PrivateRoute"
import { render, screen } from "@testing-library/react"


describe('pruebas en PrivateRoute', () => { 
  
  test('should mostrar el children si está autenticado', () => { 

    Storage.prototype.setItem = jest.fn(); 
    
    const contextValue = {
      logged: true,
      user: {
        id: '123',
        name: 'Juan'
      }
    }
    
    render( 
      <AuthContext.Provider value = {contextValue}>
        <MemoryRouter>
          <PrivateRoute>
            <h1>Ruta privada</h1>
          </PrivateRoute>
        </MemoryRouter>
      </AuthContext.Provider>  
    )

    screen.debug()
    expect(screen.getByText('Ruta privada')).toBeTruthy()
    expect(localStorage.setItem).toHaveBeenCalledWith('lastPath', '/')
   })
 })