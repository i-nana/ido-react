import React from "react";
import ReactDOM from "react-dom";
import CountTimes from './countTimes';

let names = ['Alice', 'Bob', 'Tom', 'Anthony'];
let arr = [
    <h1> 一级标题 </h1>,
    <h2>二级标题</h2>
];
let HelloMessage = React.createClass({
    render: function() {
        return <h1>Hello {this.props.name}</h1>
    }
});
let NotesList = React.createClass({
    render: function() {
        console.log(this.props.children)
        return (
            <ol>
            {
                React.Children.map(this.props.children, function (child) {
                    return <li>{child}</li>;
                })
            }
            </ol>
        );
    }
});
ReactDOM.render(
    <div>
        <CountTimes/> 
        { 
            names.map(function (name) {
                return <div>Hi, {name}!</div>
            })
        }
        { arr }
        <HelloMessage name="John" />
        <NotesList>
            <span>hello</span>
        </NotesList>
    </div>, 
document.querySelector('#app'));
