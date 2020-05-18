import React from 'react';


class Display extends React.Component{
    render(){
        let {result} = this.props;
        return(
            <div className ="component-display">
            <p>{result}</p>
            </div>
        );
    }
}

export default Display;