import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { Name } from "../SignUp/styles";

export const LeftWrapper = styled.div`
    width: 50%;
    height: 100%;
    min-width: 50%;
    content: ' ';
    background: url('https://tinypng.com/images/social/website.jpg');
    background: url('https://www.nature.com/immersive/d41586-021-00095-y/assets/3TP4N718ac/2021-01-xx_jan-iom_tree-of-life_sh-1080x1440.jpeg');
    background-position: center;
    object-fit: cover;
    background-repeat: no-repeat;
    box-shadow: 0px 0px 2px 2px ${({ theme }) => theme.boxShadow};
`

export const RightWrapper = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background:${({ theme }) => theme.cardBody};
`

export const LoginDiv = styled.div`
    width: 100%;
    padding: ${({ theme }) => theme.spacing * 7}px ${({ theme }) => theme.spacing * 13}px;
    display: flex;
    background: ${({ theme }) => theme.cardBody};
    flex-direction: column;
    justify-content: start;
    align-items: flex-end;
    elevation: 90deg;
    gap: ${({ theme }) => theme.spacing * 4.1}px;
    overflow: auto;
`

export const LoginTitle = styled.h1`
    width: 100%;
    text-align: center;
    margin-top: 0px;
    margin-bottom: 16px;
`

export const NewUser = styled(Link)`
    width: 100%;
    text-align: center;
    font-size: 0.95rem;
    padding-bottom: ${({ theme }) => theme.spacing * 1}px;
`

export const Wrapper = styled.div`
    display: flex;
    height: 100%;
    justify-content: center;

    @media screen and (max-width:940px) {
        & ${LeftWrapper} {
            display: none;
        }
        & ${RightWrapper} {
            width: 80%;
        }
    }
    @media screen and (max-width:650px) {
        & ${RightWrapper} {
            width: 90%;
        }
    }
    @media screen and (max-width:560px) {
        & ${RightWrapper} {
            width: 100%;
        }
        & ${LoginDiv} {
            padding: ${({ theme }) => theme.spacing * 5}px;
        }
        & ${Name} {
            flex-direction:column;
            gap: ${({ theme }) => theme.spacing * 4.1}px;
        }
    }
`