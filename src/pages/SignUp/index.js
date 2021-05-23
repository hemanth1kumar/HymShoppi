import React from 'react'

import {
    LeftWrapper, RightWrapper,
    Wrapper, LoginDiv, LoginTitle, NewUser
} from "../Login/styles";
import { Name } from "./styles";

import CustomButton from "../../components/CustomButton";
import CustomInput from "../../components/CustomInput";

class SignUp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
            password2: "",
            firstname: "",
            lastname: "",
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
                <LeftWrapper></LeftWrapper>
                <RightWrapper>
                    <LoginDiv as="form" onSubmit={this.handleSubmit}>
                        <LoginTitle>SignUp</LoginTitle>
                        <Name>
                            <CustomInput
                                type="text"
                                name="firstname"
                                label="Firstname"
                                aria-label="FirstName"
                                value={this.state.firstname}
                                onChange={this.handleChange}
                            />
                            <CustomInput
                                type="text"
                                name="lastname"
                                label="Lastname"
                                aria-label="LastName"
                                value={this.state.lastname}
                                onChange={this.handleChange}
                            />
                        </Name>
                        <CustomInput
                            type="email"
                            name="email"
                            label="Email"
                            aria-label="Email"
                            value={this.state.email}
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
                        <CustomInput
                            type="password"
                            name="password2"
                            label="Confirm Password"
                            aria-label="Confirm Password"
                            value={this.state.password2}
                            onChange={this.handleChange}
                        />
                        <CustomButton
                            primary
                            type="submit"
                            onClick={this.props.toggleTheme}
                        >
                            Submit
                        </CustomButton>
                        <NewUser to="/login">Already have an account? Login</NewUser>
                    </LoginDiv>
                </RightWrapper>
            </Wrapper>
        )
    }
}

export default SignUp;