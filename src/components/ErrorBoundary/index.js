import React from 'react'

import styled from "styled-components";

const ErrorDiv = styled.div`
    display: ${props => props.flexbox ? 'flex' : 'block'};
    flex-direction: ${props => props.direction ? props.direction : 'row'};
    justify-content: ${props => props.justify ? props.justify : 'flex-start'};
    align-items: ${props => props.alignItems ? props.alignItems : 'stretch'};
    height: 100%;
`

export default class ErrorBoundary extends React.Component {
    constructor() {
        super();
        this.state = {
            hasError: false
        }
    }

    componentDidCatch(err) {
        console.log(err.message);
        this.setState({ hasError: true });
    }

    render() {
        if (this.state.hasError) {
            return (
                <ErrorDiv flexbox justify="center" alignItems="center">
                    <h4>Fallback UI for errors</h4>
                </ErrorDiv>
            )
        }

        return this.props.children
    }
}