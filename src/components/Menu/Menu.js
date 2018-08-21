import React from 'react';
import PropTypes from 'prop-types';
import '../../index.css';
import ItemMenu from '../ItemMenu/ItemMenu'

const Menu = (props) => {
	const { itens, handleClick } = props

	return (
		<div className="menu">
			{itens.map(item => {
				return (<ItemMenu acessor={item.acessor} nome={item.nome} enable={item.enable} handleClick={handleClick} />)
			})}
		</div>
	)
}

export default Menu