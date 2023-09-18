import { fireEvent, render, screen } from "@testing-library/react";
import { CounterApp } from "../src/CounterApp";

describe('Pruebas en CounterApp', () => {
    // test('Prueba del componente CounterApp',()=>{
        // if (0===1) {
        //     throw new Error('No puede dividir entre 0');
        // }
    
        // //1. inicializacion
        // const menssage1="Hola Mundo ";
        // //2. estimulo
        // const menssage2=menssage1.trim();
        // //3. observar el comportamiento
        // expect(menssage1).toBe(menssage2);
    // })

    const value=100;
    test('debe hacer match con el snapshot', () => {
        const {container}=render(<CounterApp value={value}/>)
        expect (container).toMatchSnapshot();
    })
    test('debe mostrar el titulo', () => {
        render(<CounterApp value={value}/>)
        expect (screen.getByText(value)).toBeTruthy();
    })
    test('Debe incrementar con el boton +1', () => { 
        render(<CounterApp value={value}/>)
        fireEvent.click( screen.getByText("+1") );
        expect(screen.getByText('101')).toBeTruthy();
    })
    test('Debe decrementar con el boton -1', () => { 
        render(<CounterApp value={value}/>)
        fireEvent.click( screen.getByText("-1") );
        // screen.debug();
        expect(screen.getByText('99')).toBeTruthy();
    })
    test('Debe funcionar el boton de reset', () => { 
        render(<CounterApp value={value}/>)
        fireEvent.click( screen.getByText("+1") );
        fireEvent.click( screen.getByText("+1") );
        fireEvent.click( screen.getByText("+1") );
        // fireEvent.click( screen.getByText("reset") );
        fireEvent.click( screen.getByRole('button',{name:"btn-reset"}) );
        expect(screen.getByText('100')).toBeTruthy();
    })
    
})