import React, { Component } from 'react'
import Keybords from './components/Keybords';
import FuncButtons from './components/FuncButtons';
import './app6.css'
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
    undoArr = []
    redoArr = []

    keyPress = (e) => {
        this.undoArr.push(this.state)
        this.setState({ context: [...this.state.context, e.target.innerHTML] })

    }

    backspace = (e) => {
        this.setState({ context: this.state.context.slice(0, -1) })
    }
    undo = (e) => {
        if( this.undoArr.length > 0) {
        this.redoArr.push(this.undoArr.slice(-1)[0])
        this.setState({ context: this.undoArr.slice(-1)[0].context })
        this.setState({ styles: this.undoArr.slice(-1)[0].styles })
        this.undoArr.pop()
    }
    }

    redo = (e) => {
        if (this.redoArr.length > 0 ){
        this.undoArr.push(this.redoArr.slice(-1)[0])
        this.setState({ context: this.redoArr.slice(-1)[0].context })
        this.setState({ styles: this.redoArr.slice(-1)[0].styles })
        this.redoArr.pop()
        }
    }

    enter = (e) => {
        this.setState({ context: [...this.state.context, <br />] })
    }

    space = (e) => {
        this.setState({ context: [...this.state.context, ' '] })
    }

    clear = (e) => {
        this.setState({ context: [] })
    }


    changeColor = (e) => {
        this.setState({ styles: { ...this.state.styles, color: e.target.innerHTML } })
        let word = <span style={this.state.styles} >{this.state.context}</span>
        this.setState({ context: [word] })
    }

    changeFont = (e) => {
        this.setState({ styles: { ...this.state.styles, fontFamily: e.target.innerHTML } })
        let word = <span style={this.state.styles} >{this.state.context}</span>
        this.setState({ context: [word] })
    }

    changeSize = (e) => {
        this.setState({ styles: { ...this.state.styles, fontSize: e.target.innerHTML } })
        let word = <span style={this.state.styles} >{this.state.context}</span>
        this.setState({ context: [word] })

    }

    allUpper = (e) => {
        this.setState({ context: this.state.context.map(char => char.toUpperCase()) })
    }
    allLower = (e) => {
        this.setState({ context: this.state.context.map(char => char.toLowerCase()) })
    }


    render() {

        return (
            <React.Fragment>
                <div id='display' style={this.state.styles}>
                    {this.state.context}
                </div>

                <Keybords Language={1} clickHandel={this.keyPress} />
                <FuncButtons onClick={this.backspace} name={'backspace'} />
                <FuncButtons onClick={this.enter} name={'enter'} />
                <FuncButtons onClick={this.space} name={'space'} />
                <FuncButtons onClick={this.clear} name={'clear'} />
                <hr />
                {this.undoArr.length}
                <FuncButtons onClick={this.undo} name={'undo'} />
                <FuncButtons onClick={this.redo} name={'redo'} />


                <hr />
                <span>Color</span>

                <FuncButtons style={{ color: 'green' }} onClick={(e) => this.changeColor(e)} name={'green'} />
                <FuncButtons style={{ color: 'red' }} onClick={(e) => this.changeColor(e)} name={'red'} />
                <FuncButtons style={{ color: 'orange' }} onClick={(e) => this.changeColor(e)} name={'orange'} />
                <div style={{
                    backgroundColor: this.state.styles.color,
                    width: 50,
                    height: 50,
                    display: 'inline-block'
                }}></div>
                <hr />
                <span>Font</span>
                <FuncButtons style={{ fontFamily: 'Courier' }} onClick={(e) => this.changeFont(e)} name={'Courier'} />
                <FuncButtons style={{ fontFamily: 'David' }} onClick={(e) => this.changeFont(e)} name={'David'} />
                <FuncButtons style={{ fontFamily: 'Ariel' }} onClick={(e) => this.changeFont(e)} name={'Ariel'} />
                <hr />
                <span>Size</span>
                <FuncButtons onClick={(e) => this.changeSize(e)} name={20 + 'px'} />
                <FuncButtons onClick={(e) => this.changeSize(e)} name={30 + 'px'} />
                <hr />
                <FuncButtons onClick={(e) => this.allUpper(e)} name={'all upper'} />
                <FuncButtons onClick={(e) => this.allLower(e)} name={'all lower'} />

            </React.Fragment >


        );
    }
}

export default App6;