import React from 'react';

import styled, { css } from 'styled-components';
import { Link } from "react-router-dom";

export const Item = styled.div`
    height: 320px;
    width: 100%;
    display:flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;
    overflow:hidden;
    cursor: pointer;

    & img {
        flex-shrink:0;
        -webkit-flex-shrink: 0;
        width:100%;
        height:90%;
    }
`

const Itemm = ({ name, imgUrl, link }) => (
    <Item img={imgUrl} as={link ? Link : 'div'} to={link}>
        <h3>{name}</h3>
        <img src={imgUrl} alt="type" />
    </Item>
)

export default Itemm;