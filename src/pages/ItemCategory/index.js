import React from 'react'

import { useParams, useLocation } from 'react-router-dom';

const ItemCategory = () => {
    const { category } = useParams();
    const location = useLocation();

    console.log("macth", location);

    return <h3>{category} Page</h3>
}

export default ItemCategory;