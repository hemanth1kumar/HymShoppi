import React from 'react'
import { useParams, useLocation } from 'react-router-dom';

const Item = () => {
    const { category, id } = useParams();
    const location = useLocation();
    console.log('mparams', location);

    return (
        <h1>{category} - {id}</h1>
    )
}

export default Item;