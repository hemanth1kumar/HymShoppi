import React from 'react'
import { Link } from 'react-router-dom';

import styled from "styled-components";

const Nf = styled.div`
    height: 100%;
    width: 100%;
    display:flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    font-weight: 600;
`


const NotFound = () => <Nf>Oops! 404 Not Found</Nf>

export default NotFound;