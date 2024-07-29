import { render, screen, fireEvent, renderHook, act } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import { SearchHero } from "../../../src/heroes/pages/SearchHero"
import { useForm } from "../../../src/hooks/useForm";


const mockedUseNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUseNavigate
}))

describe('pruebas en SearchHero', () => { 

  //limpiar mocks
  beforeEach(() => jest.clearAllMocks());

  
  test('should mostrarse correctamente valores por defecto', () => { 
    
    const { container } = render(
      <MemoryRouter>
        <SearchHero />
      </MemoryRouter>
    )

    expect(container).toMatchSnapshot()
    // screen.debug()
   })

   test('should mostrar a Batman y el input con el valor del queryString', () => { 
    
    render(
      <MemoryRouter initialEntries={['/search?q=batman']}>
        <SearchHero />
      </MemoryRouter>
    )

    // screen.debug()

    const input = screen.getByRole('textbox');
    expect(input.value).toBe('batman')

    const img = screen.getByRole('img');
    expect(img.src).toContain('/heroes/dc-batman.jpg')

    const box = screen.getByLabelText('danger')
    expect(box.style.display).toBe('none')
   })

   test('should mostrar un error si no se encuentra el heroe (batman123)', () => {

    render(
      <MemoryRouter initialEntries={['/search?q=batman123']}>
        <SearchHero />
      </MemoryRouter>
    )

    const box = screen.getByLabelText('danger')
    expect(box.style.display).toBe('')
   })

   test('should llamarse el navigate a la pantalla nueva', () => {

    const inputValue = 'super'

    render(
      <MemoryRouter initialEntries={['/search']}>
        <SearchHero />
      </MemoryRouter>
    )

    const input = screen.getByRole('textbox');

    fireEvent.change(input, { target: { name: 'searchText', value: inputValue } })

    const form = screen.getByLabelText('form')
    fireEvent.submit(form)

    expect(mockedUseNavigate).toHaveBeenCalledWith(`?q=${inputValue}`)
   })
 })