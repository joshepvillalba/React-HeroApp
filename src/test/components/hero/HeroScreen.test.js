import { mount } from "enzyme";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { AuthContext } from "../../../auth/authContext";
import { HeroScreen } from "../../../components/hero/HeroScreen";
import { types } from "../../../types/types";

const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockNavigate
}));

describe('Pruebas en <HeroScreen/>', () => { 
    
        const contextValue = {
            dispatch: jest.fn(),
            user: {
                logged:false
            }
        }

    test('No debe de mostrar el <HeroScreen /> si no hay un heroe en el URL', () => { 

        const wrapper = mount(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter initialEntries={['/hero']}>
                    <Routes>
                        <Route path="/hero" element={<HeroScreen />} />
                        <Route path='/' element = { <h1>No hero page</h1>} />
                    </Routes>
                </MemoryRouter>
            </AuthContext.Provider>
            );

            expect( wrapper.find('h1').text().trim() ).toBe('No hero page');
     })

     test('Debe de mostrar un heroe si el parametro existe y se encuentra', () => { 

        const wrapper = mount(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter initialEntries={['/hero/marvel-spider']}>
                    <Routes>
                        <Route path="/hero/:heroId" element={<HeroScreen />} />
                        <Route path='/' element = { <h1>No hero page</h1>} />
                    </Routes>
                </MemoryRouter>
            </AuthContext.Provider>
            );

            expect( wrapper.find('.row').exists() ).toBe(true);
     })

     test('Debe de regresar a la pantalla anterior', () => {

        const wrapper = mount(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter initialEntries={['/hero/marvel-spider']}>
                    <Routes>
                        <Route path="/hero/:heroId" element={<HeroScreen />} />
                        <Route path='/' element = { <h1>No hero page</h1>} />
                    </Routes>
                </MemoryRouter>
            </AuthContext.Provider>
            );

            wrapper.find('button').prop('onClick')();
            expect( mockNavigate ).toHaveBeenCalledWith(-1);

     })


 })