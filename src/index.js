import React from "react";
import ReactDOM from "react-dom";
import Select from "./Select/select";
import CountTimes from './countTimes';

ReactDOM.render(
    <div>
        <CountTimes />
        <hr/>
        <Select />
    </div>,
    document.querySelector('#app')
);