import styled, { css } from "styled-components";
const CustomButton = styled.button`
    padding: 8px 16px;
    text-align:center;
    cursor: pointer;
    margin:0.25rem;
    width: 160px;
    height: 40px;
    font-size: 1rem;
    font-weight: 600;

    background: ${({ theme }) => theme.button.bg};
    border: 1px solid ${({ secondary, theme }) => secondary ? theme.button.secondary.borderColor : theme.button.borderColor};
    color: ${({ secondary, theme }) => secondary ? theme.button.secondary.color : theme.button.color};

    &:hover {
        background: ${({ primary, secondary, theme }) => primary ? theme.button.primary.color : secondary ? theme.button.secondary.color : theme.button.color};
        color: ${({ primary, secondary, theme }) => primary ? theme.button.primary.hoverColor : secondary ? theme.button.secondary.hoverColor : theme.button.hoverColor};
    }

    ${props => props.primary &&
        css`
            border: 1px solid ${({ theme }) => theme.button.primary.borderColor};
            color: ${({ theme }) => theme.button.primary.color};
        `
    }
`
export default CustomButton;