import styled from 'styled-components';

export const Input = styled.input`
    border: 1px solid ${({ theme }) => theme.input.borderColor};
    height: 50px;
    width: 100%;
    font-size: 1rem;
    padding: 4px 8px;
    border-radius: 2px;
    background:transparent;
    color: ${({ theme }) => theme.input.color};

    &:focus {
        outline: none;
        box-shadow: 0px 0px 2px mediumseagreen;
    }
`

export const Label = styled.label`
    position: absolute;
    left: 8px;
    top: 14px;
    pointer-events: none;
    transition: 300ms ease all;

    ${Input}:focus ~ & {
        top: -20px;
        left: 5px;
        font-size: 0.8rem;
    }

`

export const InputHolder = styled.div`
    position: relative;
    width: 100%;
    
    &.active ${Label} {
        top: -20px;
        left: 5px;
        font-size: 0.8rem;
    }
`