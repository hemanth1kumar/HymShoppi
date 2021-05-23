import React from 'react'

import { Wrapper, LeftWrapper, RightWrapper, LoginDiv, LoginTitle, NewUser } from "./styles";
import CustomButton from "../../components/CustomButton";
import CustomInput from "../../components/CustomInput";

class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: 0,
            username: "",
            password: ""
        }
    }

    handleChange = (e) => {
        let { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit = (e) => {
        e.preventDefault();
    }

    render() {
        return (
            <Wrapper>
                <LeftWrapper>
                </LeftWrapper>
                <RightWrapper>
                    <LoginDiv as="form" onSubmit={this.handleSubmit}>
                        <LoginTitle>Login</LoginTitle>
                        <CustomInput
                            type="email"
                            name="username"
                            label="Username"
                            aria-label="Username"
                            value={this.state.username}
                            onChange={this.handleChange}
                        />
                        <CustomInput
                            type="password"
                            name="password"
                            label="Password"
                            aria-label="Password"
                            value={this.state.password}
                            onChange={this.handleChange}
                        />
                        <CustomButton
                            primary
                            type="submit"
                            onClick={this.props.toggleTheme}
                        >
                            Submit
                        </CustomButton>
                        <NewUser to="/signup">New User? Create an account</NewUser>
                    </LoginDiv>
                </RightWrapper>
            </Wrapper>
        )
    }
}

export default Login;