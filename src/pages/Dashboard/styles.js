import styled from "styled-components";

export const DashboardWrapper = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing * 3}px;
`

export const DashboardBody = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0px 48px;
`

export const ItemsWrapper = styled.div`
    display: grid;
    margin-bottom: 24px;
    grid-row-gap: 20px;
    grid-column-gap: 24px;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-columns: minmax(1fr, 2fr);
`