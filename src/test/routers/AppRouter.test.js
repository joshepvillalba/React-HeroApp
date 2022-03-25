import { mount } from "enzyme";
import { AuthContext } from "../../auth/authContext";
import { AppRouter } from "../../routers/AppRouter";

describe('Prueba en <AppRouter/>', () => {
    
    const contextValue = {
        user:{logged:false}
    }

    test('Debe de mostrar el login si no esta autenticado', () => {

        const wrapper = mount(
            <AuthContext.Provider value={ contextValue }>
                <AppRouter />
            </AuthContext.Provider>            
        );

        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('h1').text().trim() ).toBe( 'Login' );

     })

    test('Debe de mostrar el componente de marvelsi esta autenticado', () => {

        const wrapper = mount(
            <AuthContext.Provider value={ { user:{logged:true, name:'Pepe' } } }>
                <AppRouter />
            </AuthContext.Provider>            
        );

        console.log(wrapper.html())

        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('.navbar').exists() ).toBeTruthy();

     })

 })