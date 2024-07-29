import { authReducer, types } from "../../../src/auth"

describe('pruebas en authReducer', () => { 
  
  
  test('should retornar estado por defecto', () => { 
    const state = authReducer({ logged: false }, {})
    
    expect(state).toEqual({ logged: false })
  })
  
  test('login debe llamar a autenticar el login y establecer el user', () => { 
    const action = {
      type: types.login,
      payload: {
        name: 'kike',
        id: '123'
      }
    }
    
    const newState = authReducer({ logged: false }, action)

    expect(newState).toEqual({ 
      logged: true, 
      user: action.payload
    })
   })

   test('should el logout borrar el name del usuario el logged en false', () => {
      const state = { 
        logged: true, 
        user: {id: '123', name: 'kike'}};

      const action = {
        type: types.logout,
      }

      const newState = authReducer(state, action);

      expect(newState).toEqual({ logged: false })
    })
 })