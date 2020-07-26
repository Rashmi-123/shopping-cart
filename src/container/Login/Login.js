import React from 'react'
import { Box } from './board-box';
import Button from '../../component/UI/Button/Button';
import './Login.css';

class Login extends React.Component {
    constructor(props) {
    super(props)
        this.state = {
            inputValue:'',
            history: [],
            error:'',
        }
    }

    // Handle onclick on Button and set the value of Input 
    handleBoxClick = (index) => {
        let inputValue = this.state.inputValue;
        let history = this.state.history;
        history.push(index);
        inputValue = history.reduce((acc,curr)=>{
            return acc+''+curr;
        })
        this.setState({
            inputValue : inputValue,
            history: history,
            error:''
        })
    }

    // Handle Clear data from input
    clearDataInput = () =>{
        let history = this.state.history;
        history.pop();
        let inputValue = '';
        if(history.length !== 0){
            inputValue = history.reduce((acc,curr)=>{
                return acc+''+curr;
            })
        }
        this.setState({
            inputValue : inputValue,
            history: history
        })
    }

    // Handle data after click on Enter
    hadleFormInput = () => {
        const inputValue = this.state.inputValue;
        if(inputValue === '123'){
            this.props.history.push('/dashboard')
        }else{
            this.setState({
                inputValue: '',
                history:[],
                error:'Please Enter Valid code.'
            })
        }
        
    }

    render() {
        return (
            <>
                <div className="board-wrapper">
                    <div className="board">
                        <h2 className="Login-heading">Login</h2>
                        <h2 className="error">{this.state.error}</h2>
                    <div className="board-row">
                        <input value={this.state.inputValue} className="inputBox"/>
                    </div>
                        <div className="board-row">
                            <Box value="1" onClick={() => this.handleBoxClick(1)} />
                            <Box value="2" onClick={() => this.handleBoxClick(2)} />
                            <Box value="3" onClick={() => this.handleBoxClick(3)} />
                        </div>

                        <div className="board-row">
                            <Box value="4" onClick={() => this.handleBoxClick(4)} />
                            <Box value="5" onClick={() => this.handleBoxClick(5)} />
                            <Box value="6" onClick={() => this.handleBoxClick(6)} />
                        </div>

                        <div className="board-row">
                            <Box value="7" onClick={() => this.handleBoxClick(7)} />
                            <Box value="8" onClick={() => this.handleBoxClick(8)} />
                            <Box value="9" onClick={() => this.handleBoxClick(9)} />
                        </div>

                        <div className="board-row">
                            <Button btnType="Enter" clicked={this.hadleFormInput}>Enter</Button>
                            <Button btnType="Clear" clicked={this.clearDataInput}>Clear</Button>
                        </div>
                    </div>
                   
                </div>
            </>
        )
    }
}

export default Login;