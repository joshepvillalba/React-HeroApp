import { mount } from "enzyme";
import { MemoryRouter } from "react-router-dom";
import { SearchScreen } from "../../../components/search/SearchScreen";

const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockNavigate,
}))


describe('Pruebas en <SearchScreen />', () => { 

    test('Debe mostrar el componente con valores por defecto', () => { 

        const wrapper = mount( 
        <MemoryRouter initialEntries={['/search']}>
            <SearchScreen />
        </MemoryRouter>
        
        )

        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('.alert').text().trim() ).toBe('Buscar un heroe');

     })

     test('Debe de mostrar a batman y el input con el queryString', () => { 

        const wrapper = mount( 
            <MemoryRouter initialEntries={['/search?q=batman']}>
                <SearchScreen />
            </MemoryRouter>
            )

            expect( wrapper ).toMatchSnapshot();
            expect( wrapper.find('input').prop('value') ).toBe('batman');
      })

      test('Debe de mostrar error si no se encuentra el heroe', () => { 

        const wrapper = mount( 
            <MemoryRouter initialEntries={['/search?q=123']}>
                <SearchScreen />
            </MemoryRouter>
            )

            expect( wrapper ).toMatchSnapshot();
            expect( wrapper.find('.alert').text().trim() ).toBe('No se encontro el heroe: 123');
      })


      test('Debe de llamar el navigate a la nueva pantalla', () => { 

        const wrapper = mount( 
            <MemoryRouter initialEntries={['/search']}>
                <SearchScreen />
            </MemoryRouter>
            );

            wrapper.find('input').simulate('change', {target:{name:'searchtext', value:'batman'}});
            wrapper.find('form').prop('onSubmit')({preventDefault: () => {}});

            expect( mockNavigate ).toHaveBeenCalledWith('?q=batman');
      })

 })