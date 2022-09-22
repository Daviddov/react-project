import React, { Component } from 'react'
import Keybords from './components/Keybords';

// for (let i = 1488; i <= 1514; i++) {
//       console.log(i, String.fromCharCode(i));  
        
//     }

class App6 extends Component {
    constructor(props) {
        super(props);
    }
    state = {context: ''}

   keypress = (e) => { 
   
  this.setState({context: this.state.context + e.target.innerHTML})

   }

    render() {

        return (
            <React.Fragment>
              <Keybords Language= {1} clickHandel={this.keypress}/>
              <textarea cols="30" rows="10" value={this.state.context}></textarea>
            </React.Fragment >
            
             
        );
    }
}

export default App6;