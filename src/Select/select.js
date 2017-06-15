import React, { Component } from "react";
import './select.css'

import SelectOption from "./select-option.js"

class Select extends Component {
    render() {
        return (
            <div className="select">
                <SelectOption value="A" />
                <SelectOption value="B" />
                <SelectOption value="C"/>
            </div>
        )
    }
}

export default Select;