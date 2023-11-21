import React, { Component } from 'react';
import './Calculator.css';

class Calculator extends Component {
  constructor() {
    super();
    this.state = {
      display: '0'
    };
  }

  handleClick = (value) => {
    const { display } = this.state;
  
    if (display.includes('.') && value === '.') {
      this.setState({ display: 'Syntax Error' });
    } else if (display === '0' || display === 'Syntax Error') {
      this.setState({ display: value });
    }
      else {
      this.setState((prevState) => ({ display: prevState.display + value }));
    }
  };

calculate = () => {
  try {
    const result = Function('"use strict";return (' + this.state.display + ')')();
    this.setState({ display: result });
  } catch (error) {
    this.setState({ display: 'Syntax Error' });
  }
};

  clear = () => {
    this.setState({ display: '0' });
  }

  render() {
    return (
      <div className="calculator">
        <div className="display">
          <input type="text" value={this.state.display} readOnly />
        </div>

        <div className ="row">
          <div className="buttons">
            <div className="row">
              <div className="column">
                <button onClick={() => this.handleClick('1')}>1</button>
                <button onClick={() => this.handleClick('4')}>4</button>
                <button onClick={() => this.handleClick('7')}>7</button>
                <button onClick={() => this.handleClick('.')}>.</button>
              </div>
              <div className="column">
                <button onClick={() => this.handleClick('2')}>2</button>
                <button onClick={() => this.handleClick('5')}>5</button>
                <button onClick={() => this.handleClick('8')}>8</button>
                <button onClick={() => this.handleClick('0')}>0</button>
              </div>
              <div className="column">
                <button onClick={() => this.handleClick('3')}>3</button>
                <button onClick={() => this.handleClick('6')}>6</button>
                <button onClick={() => this.handleClick('9')}>9</button>
                <button onClick={() => this.handleClick('*')}>*</button>
              </div>
              <div className="column">
                <button onClick={() => this.handleClick('+')}>+</button>
                <button onClick={() => this.handleClick('-')}>-</button>
                <button onClick={this.calculate}>=</button>
                <button onClick={() => this.handleClick('/')}>/</button>
                <button onClick={this.clear}>C</button>
              </div>
          </div>

          </div>

          {/* <div className="buttonsSC">
            <div className="column">
              <button onClick={() => this.handleClick('^')}>^</button>
            </div>
          </div> */}
        </div>

      </div>
    );
  }

  renderButton(value, onClickHandler = this.handleClick) {
    return (
      <button onClick={() => onClickHandler(value)}>
        {value}
      </button>
    );
  }
}

export default Calculator;
