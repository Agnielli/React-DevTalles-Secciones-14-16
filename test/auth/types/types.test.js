import { types } from "../../../src/auth"

describe('pruebas en types', () => { 
  
  test('should regresar estos types', () => { 
    console.log(types)
    
    expect(types).toEqual({
      login: '[Auth] Login',
      logout: '[Auth] Logout',
    })
  })
 })