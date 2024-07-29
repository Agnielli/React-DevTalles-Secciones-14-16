import { AuthContext } from "../../../src/auth"
import { render, screen, fireEvent } from "@testing-library/react"
import { Navbar } from "../../../src/ui"
import { MemoryRouter } from "react-router-dom"

const mockedUseNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUseNavigate,
}))

describe('pruebas en Navbar', () => { 
  
  const ContextValue = {
    logged: true,
    user: {
      id: 'ABC',
      name: 'Juan'
    },
    logout: jest.fn()
  }

  beforeEach(() => jest.clearAllMocks());

  test('should poner el nombre en el user.name de mi context', () => { 
    
    render(
      <MemoryRouter>
        <AuthContext.Provider value={ContextValue}>
          <Navbar />
        </AuthContext.Provider>
      </MemoryRouter>
    )
    expect(screen.getByText(ContextValue.user.name)).toBeTruthy()
    expect(screen.getByText('Juan')).toBeTruthy()
   
  })

  test('should cuando haga logout navegar al login', () => { 

    render(
      <MemoryRouter>
        <AuthContext.Provider value={ContextValue}>
          <Navbar />
        </AuthContext.Provider>
      </MemoryRouter>
    )
    const logoutBtn = screen.getByRole('button', { name: 'LogOut' })
    fireEvent.click(logoutBtn)


    expect( ContextValue.logout ).toHaveBeenCalled();
    expect( mockedUseNavigate ).toHaveBeenCalledWith("/login", {"replace": true});
  })
 })