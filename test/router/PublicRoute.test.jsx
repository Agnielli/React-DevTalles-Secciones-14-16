import { MemoryRouter, Routes, Route } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import { PublicRoute } from '../../src/router/PublicRoute';
import { AuthContext } from '../../src/auth';


describe('pruebas en PublicRoute', () => { 

  test('should mostrar el children si no está autenticado', () => { 
    
    const contextValue = {
      logged: false
    }
    
    render( 
      <AuthContext.Provider value = {contextValue}>
        <PublicRoute>
          <h1>Ruta pública</h1>
        </PublicRoute>
      </AuthContext.Provider>  
    )

    // screen.debug()
    expect(screen.getByText('Ruta pública')).toBeTruthy()
   })

   test('should de navegar si está autenticado', () => { 
    const contextValue = {
      logged: true,
      user: {
        name: 'Juan',
        id: '123'
      }
    }
    
    render( 
      <AuthContext.Provider value = {contextValue}>
        <MemoryRouter initialEntries={['/login']}>
          <Routes>
            <Route path='login' element={
                <PublicRoute>
                  <h1>Ruta pública</h1>
                </PublicRoute>
              } />
            <Route path='marvel' element={<h1> Página Marvel </h1>} />
          </Routes>
        </MemoryRouter>  
      </AuthContext.Provider>  
    )

    screen.debug()
    expect(screen.getByText('Página Marvel')).toBeTruthy()
    })
 })