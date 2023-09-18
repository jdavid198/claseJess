import React from 'react'
import { render } from '@testing-library/react'
import { FirstApp } from '../src/FirstApp'

describe('<FirstApp />', () => {
  // test('debe hacer match con el snapshot', () => {

  //   //esta prueba se asegura de que mi componente no vaya a cambiar al día de mañana de manera accidental.Porque alguien lo manipuló, alguien se le olvidó ponerle algo.
  //   const title='hola como estas';
  //   const subTitle=2;
  //   const {container}=render(<FirstApp title={title} subtitle={subTitle}/>)
  //   expect (container).toMatchSnapshot();
  // })
  test('debe mostrar el titulo en un h1', () => {

    //esta prueba se asegura de que mi componente no vaya a cambiar al día de mañana de manera accidental.Porque alguien lo manipuló, alguien se le olvidó ponerle algo.
    const title='hola como estas';
    const subTitle=2;
    const {container,getByText,getByTestId}=render(<FirstApp title={title} subtitle={subTitle}/>)
    expect (getByText(title)).toBeTruthy();



    //se puede hacer pero no es recomendable, (espacios)
    // const h1=container.querySelector('h1');
    // expect(h1.innerHTML).toBe(title);//exacto
    // expect(h1.innerHTML).toContain(title);//contenga

    expect(getByTestId('test-title').innerHTML).toBeTruthy();
    // expect(getByTestId('test-title').innerHTML).toBe(title);//exacto
    expect(getByTestId('test-title').innerHTML).toContain(title);//exacto
  })
  test('debe mostrar el sebtitulo enviado por props', () => {

    //esta prueba se asegura de que mi componente no vaya a cambiar al día de mañana de manera accidental.Porque alguien lo manipuló, alguien se le olvidó ponerle algo.
    const title='hola como estas';
    const subTitle=2;
    const {getByText,getAllByText}=render(<FirstApp title={title} subtitle={subTitle}/>)
    // expect (getByText(subTitle)).toBeTruthy();
    // expect (getAllByText(subTitle+2).length).toBe(1);

  })
})