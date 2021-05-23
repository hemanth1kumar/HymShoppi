import React from 'react'

import { Input, Label, InputHolder } from "./styles";

const CustomInput = ({ label, value, ...props }) => (
    <InputHolder className={value !== "" ? "active" : ""}>
        <Input {...props} value={value} />
        <Label>{label}</Label>
    </InputHolder>
)

export default CustomInput;