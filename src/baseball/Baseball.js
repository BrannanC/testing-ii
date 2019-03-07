import React from 'react';

class Baseball extends React.Component {
    state = {
        strikes: 0,
        balls: 0,
    }

    handleStrike = e => {
        const s = this.state.strikes + 1
        this.setState({
            strikes: s === 3 ? 0 : s
        })
    }

    handleBall = e => {
        const b = this.state.balls + 1
        this.setState({
            balls: b === 4 ? 0 : b
        })
    }

    handleFoul = e => {
        const s = this.state.strikes + 1
        this.setState({
            strikes: s === 3 ? 2 : s
        })
    }

    handleHit = e => {
        this.setState({
            strikes: 0,
            balls: 0
        })
    }

    render(){
        return (
            <>
            <h1>Baseball</h1>
            <div className="count">
                <h2>Count:</h2>
                <h4>Strikes: {this.state.strikes}</h4>
                <h4>Balls: {this.state.balls}</h4>
            </div>
            <button onClick={this.handleStrike}>Strike!</button>
            <button onClick={this.handleBall}>Ball!</button>
            <button onClick={this.handleFoul}>Foul!</button>
            <button onClick={this.handleHit}>Hit!</button>
            </>
        );
    }
}

export default Baseball;