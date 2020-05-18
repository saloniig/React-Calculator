import React from "react";
import ButtonPanel from "./ButtonPanel";
import Display from './Display';
import "./App.css";
class App extends React.Component{
    constructor(){
        super();

        this.state={
            result:""
        }
    }

    onClick=button=>{
        if(button==="="){
            this.calculate()
        }
        else if(button==="C"){
            this.reset()
        }
        else if(button==="CE"){
            this.backspace()
        }
        else{
            this.setState({
                result:this.state.result + button
            })
        }
    };
    calculate=()=>{
        var checkResult=''
        if(this.state.result.includes('--')){
            checkResult=this.state.result.replace('--','+')
        }
        else{
            checkResult=this.state.result
        }
        try{
            this.setState({
                result:(eval(checkResult)||"") + ""

            })
        }
        catch(e){
            this.setState({
                result:"error"
            })
        }
    };
    reset=()=>{
        this.setState({
            result:""
        })
    };
    backspace=()=>{
        this.setState({
            result:this.state.result.slice(0,-1)


        })
    };

    render(){
        return(
            <div className="component-app">
                <Display result={this.state.result} />
                <ButtonPanel onClick={this.onClick} />
            </div>
        );
    }
};

export default App;