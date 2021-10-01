import React, { Component } from 'react';
import './index.css';
import ResultComponent from './components/ResultComponent';
import KeyPadComponent from "./components/KeyPadComponent";

class App extends React.Component {
    constructor(){
        super();

        this.state = {
            formula:"",
            result: "0",
        }
    }
    
  onClick = button => {

        if(button === "="){
            this.calculate()
        }

        else if(button === "C"){
            this.reset()
        }
        else if(button === "CE"){
            this.backspace()
        }

        else {
            this.setState({
                formula: this.state.formula + button
            })
        }
    };

    calculate = () => {
        try {
          this.setState({
            result: (eval(this.state.formula) || "" ) + ""
        })
        } catch (e) {
            this.setState({
                result: "error"
            })
        }
    };

  calc = () => {
        if(this.state.result[0] == 0){
            this.setState({
                result: (eval(this.state.result.formula(1)) || "" ) + ""
            })
      }else{
            this.setState({
            result: (eval(this.state.formula) || "" ) + ""
        })
          };
    };
  
    reset = () => {
        this.setState({
            formula:"",
            result: "0"
        })
    };

    backspace = () => {
        this.setState({
            formula: this.state.formula.slice(0, -1)
        })
    };

    render() {
        return (
            <div>
                <div className="calculator-body">
                    <h1 className="h1" >JavaScript Calculator</h1>
                    <FormulaComponent formula={this.state.formula} />
                    <ResultComponent id="display" result={this.state.result}/>
                    <KeyPadComponent onClick={this.onClick}/>
                </div>
            </div>
        );
    }
};

class FormulaComponent extends React.Component {
  render() {
    return <div className="formulaScreen">{this.props.formula}</div>;
  }
};

class ResultComponent extends React.Component{
    render() {
        let {result} = this.props;
        return (
            <div className="result">
                <p id="display">{result}</p>
            </div>
    )
        ;
    }
};

class KeyPadComponent extends React.Component{

    render() {
        return (
            <div className="button">
                <button name="(" onClick={e => this.props.onClick(e.target.name)}>(</button>
                <button name="CE" onClick={e => this.props.onClick(e.target.name)}>CE</button>
                <button name=")" onClick={e => this.props.onClick(e.target.name)}>)</button>
                <button id="clear" name="C" onClick={e => this.props.onClick(e.target.name)}>C</button><br/>


                <button id="one" name="1" onClick={e => this.props.onClick(e.target.name)}>1</button>
                <button id="two" name="2" onClick={e => this.props.onClick(e.target.name)}>2</button>
                <button id="three" name="3" onClick={e => this.props.onClick(e.target.name)}>3</button>
                <button id="add" name="+" onClick={e => this.props.onClick(e.target.name)}>+</button><br/>


                <button id="four" name="4" onClick={e => this.props.onClick(e.target.name)}>4</button>
                <button id="five" name="5" onClick={e => this.props.onClick(e.target.name)}>5</button>
                <button id="six" name="6" onClick={e => this.props.onClick(e.target.name)}>6</button>
                <button id="subtract" name="-" onClick={e => this.props.onClick(e.target.name)}>-</button><br/>

                <button id="seven" name="7" onClick={e => this.props.onClick(e.target.name)}>7</button>
                <button id="eight" name="8" onClick={e => this.props.onClick(e.target.name)}>8</button>
                <button id="nine" name="9" onClick={e => this.props.onClick(e.target.name)}>9</button>
                <button id="multiply" name="*" onClick={e => this.props.onClick(e.target.name)}>x</button><br/>


                <button id="decimal" name="." onClick={e => this.props.onClick(e.target.name)}>.</button>
                <button  id="zero" name="0" onClick={e => this.props.onClick(e.target.name)}>0</button>
                <button id="equals" name="=" onClick={e => this.props.onClick(e.target.name)}>=</button>
                <button id="divide" name="/" onClick={e => this.props.onClick(e.target.name)}>÷</button><br/>
            </div>
        );
    }
}


ReactDOM.render(<App />, document.getElementById('app'));
