import React, { Component } from 'react'
import PropTypes from "prop-types"

import Button from './Button'

class Counter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            good: 0,
            neutral: 0,
            bad: 0
        }
    }

    handleIncrement = buttonType => {
        this.setState(prevState => ({
            [buttonType]: prevState[buttonType] + 1
        }))
    }

    render() {
        const { good, neutral, bad } = this.state
        
        return (
            <>
                <div>
                    <Button handleClick={() => this.handleIncrement('good')}>Good</Button>
                    <Button handleClick={() => this.handleIncrement('neutral')}>Neutral</Button>
                    <Button handleClick={() => this.handleIncrement('bad')}>Bad</Button>
                </div>
            
                <p>Statistics</p>
                <div>Good: {good}</div>
                <div>Neutral:{neutral}</div>
                <div>Bad:{bad}</div>
            </>
        )
    }
}

Counter.propTypes = {
            data: PropTypes.shape({
                good: PropTypes.number,
                neutral: PropTypes.number,
                bad: PropTypes.number,
            }),
        };
        export default Counter
    