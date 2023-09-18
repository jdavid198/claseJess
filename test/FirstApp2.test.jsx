import React from 'react'
import { render, screen } from '@testing-library/react'
import { FirstApp } from '../src/FirstApp'

describe('<FirstApp />', () => {

  const title='hola soy goku';
  const subTitle=2;

  test('debe hacer match con el snapshot', () => {
    const {container}=render(<FirstApp title={title} subtitle={subTitle}/>)
    expect (container).toMatchSnapshot();
  })
  test('debe mostrar el titulo', () => {
    render(<FirstApp title={title} subtitle={subTitle}/>)
    expect (screen.getByText(title)).toBeTruthy();
    // expect (screen.getByText(title)).not.toBeTruthy();
  })
  test('debe mostrar el titulo en un h1', () => {
    render(<FirstApp title={title} subtitle={subTitle}/>)
    expect (screen.getByRole('heading',{level:1}).innerHTML).toContain(title);
    // expect (screen.getByText(title)).not.toBeTruthy();
  })
  test('debe mostrar el sebtitulo enviado por props', () => {
    render(<FirstApp title={title} subtitle={subTitle}/>)
    expect (screen.getAllByText(subTitle+2).length).toBe(1);
  })
})