import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';

import ItemMenu from '../components/ItemMenu/ItemMenu'
import Menu from '../components/Menu/Menu'

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ));

storiesOf('Item de Menu', module)
  .add('default', () => <ItemMenu nome="HOME" handleClick={() => {alert('teste')}}/>)
  .add('enable', () => <ItemMenu nome="HOME" enable={true} handleClick={() => {alert('teste')}}/>);

const itens = [
  {
    acessor: 'nome',
    nome: 'HOME',
    enable: true
  },
  {
    acessor: 'servicos',
    nome: 'SERVIÇOS',
    enable: false
  },
  {
    acessor: 'galeria',
    nome: 'GALERIA',
    enable: false
  },
  {
    acessor: 'contato',
    nome: 'CONTATO',
    enable: false
  }
]
storiesOf('Menu', module)
  .add('default', () => <Menu itens={itens} />)