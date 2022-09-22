import React, { Component } from 'react'

class Buttons extends Component {
    constructor(props) {
        super(props);

    }


    state = {  }
    render() { 
        return ( 
            <button onClick={(e)=> this.props.clickHandel(e)}>{this.props.value}</button>
         );
    }
}
 
export default Buttons;