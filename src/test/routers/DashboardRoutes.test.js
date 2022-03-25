import { mount } from "enzyme"
import { MemoryRouter } from "react-router-dom"
import { AuthContext } from "../../auth/authContext"
import { DashboardRoutes } from "../../routers/DashboardRoutes"


describe('Pruebas en <DashboardRoutes/>', () => {

    const contextValue = {
        user:{
            logged:true,
            name:'Pepe'
        }
    }

    test('Debe mostrar el componente - marvel', () => {

        const wrapper = mount(
        <AuthContext.Provider value = { contextValue }>
            <MemoryRouter initialEntries={['/']}>
                <DashboardRoutes/>
            </MemoryRouter>
        </AuthContext.Provider>)

        expect(wrapper).toMatchSnapshot();

        expect( wrapper.find('.text-info').text().trim() ).toBe('Pepe')
        expect( wrapper.find('h1').text().trim() ).toBe('MARVEL')


     })

     test('Debe mostrar el componente - dc', () => {

        const wrapper = mount(
        <AuthContext.Provider value = { contextValue }>
            <MemoryRouter initialEntries={['/dc']}>
                <DashboardRoutes/>
            </MemoryRouter>
        </AuthContext.Provider>)

        expect(wrapper).toMatchSnapshot();

        expect( wrapper.find('h1').text().trim() ).toBe('DC')

     })


 })