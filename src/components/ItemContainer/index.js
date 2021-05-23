import React from 'react'

import { Item } from "../Item";

const ItemContainer = ({ items }) => {
    return (
        items.map(item => (
            <Item>
                Hi
            </Item>
        ))
    )
}

export default ItemContainer;