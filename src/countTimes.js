import React, { Component } from 'react';

class Counter extends Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);

        this.state = {
            count : 0
        };
    }

    handleClick(e) {
        e.preventDefault();
        let count = this.state.count;
        this.setState({
            count: count+1
        });
    }

    render() {
        let style = {
            padding: '0 10px'
        }
        return (
            <div className="counter">
                计时器：
                <span className="counter-num" style={ style }>{ this.state.count }</span>
                <button onClick={ this.handleClick } >更新</button>
            </div>
        );
    }
}

export default Counter;