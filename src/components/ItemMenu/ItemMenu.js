import React from 'react';
import PropTypes from 'prop-types';
import '../../index.css';

const ItemMenu = (props) => {
	const { nome, handleClick, enable, acessor } = props

	const classVariated = enable ? 'itemMenuEnable' : 'itemMenuNormal'
	return (
		<div onClick={() => handleClick(acessor)} className={`itemMenu ${classVariated}`}>
			<p>{nome}</p>
		</div>
	)
}

export default ItemMenu