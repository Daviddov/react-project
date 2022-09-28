import React, { Component } from 'react'
import '../App.css'
import Keybords from './components/Keybords';
import FuncButtons from './components/FuncButtons';
import Context from './components/Context';
import Rew from './components/Rew';
class App6 extends Component {
    constructor(props) {
        super(props);
    }
    state = {
        context: [],
        styles: {
            color: 'red',
            fontFamily: 'David',
            fontSize: 'medium'
        },
    }

    keyPress = (e) => {
        this.setState({ context: [...this.state.context, e.target.innerHTML] })

    }
    undo = (e) => {
        this.setState({ context: this.state.context.slice(0, -1) })
    }
    enter = (e) => {
        this.setState({ context: [...this.state.context, '\n'] })
    }
    space = (e) => {
        this.setState({ context: [...this.state.context, ' '] })

    }
    clear = (e) => {
        this.setState({ context: [] })
    }


    chaneColor = (e) => {
        this.setState({ styles: { ...this.state.styles, color: e.target.innerHTML } })
        let word = <span style={this.state.styles} >{this.state.context}</span>
        this.setState({ context: [word] })
    }

    chaneFont = (e) => {
        this.setState({ styles: { ...this.state.styles, fontFamily: e.target.innerHTML } })
        let word = <span style={this.state.styles} >{this.state.context}</span>
        this.setState({ context: [word] })

    }

    chaneSize = (e) => {
        this.setState({ styles: { ...this.state.styles, fontSize: e.target.innerHTML } })
        let word = <span style={this.state.styles} >{this.state.context}</span>
        this.setState({ context: [word] })
        console.log(this.state);
    }

    
    render() {

        return (
            <React.Fragment>
                <Keybords Language={1} clickHandel={this.keyPress} />
                <FuncButtons onClick={this.undo} name={'backspace'} />
                <FuncButtons onClick={this.enter} name={'enter'} />
                <FuncButtons onClick={this.space} name={'space'} />
                <FuncButtons onClick={this.clear} name={'clear'} />

                <hr />
                <span>Color</span>
                <FuncButtons style={{ color: 'green' }} onClick={(e) => this.chaneColor(e)} name={'green'} />
                <FuncButtons style={{ color: 'red' }} onClick={(e) => this.chaneColor(e)} name={'red'} />
                <FuncButtons style={{ color: 'orange' }} onClick={(e) => this.chaneColor(e)} name={'orange'} />
                <hr />
                <span>Font</span>
                <FuncButtons style={{ fontFamily: 'Courier' }} onClick={(e) => this.chaneFont(e)} name={'Courier'} />
                <FuncButtons style={{ fontFamily: 'David' }} onClick={(e) => this.chaneFont(e)} name={'David'} />
                <FuncButtons style={{ fontFamily: 'Ariel' }} onClick={(e) => this.chaneFont(e)} name={'Ariel'} />
                <hr />
                <span>Size</span>
                <FuncButtons onClick={(e) => this.chaneSize(e)} name={'small'} />
                <FuncButtons onClick={(e) => this.chaneSize(e)} name={'large'} />


                <div style={this.state.styles}>
                    {this.state.context}
                </div>





            </React.Fragment >


        );
    }
}

export default App6;