import React, { Component } from 'react'
import { connect } from 'react-redux'

import CounterControl from '../../components/CounterControl/CounterControl'
import CounterOutput from '../../components/CounterOutput/CounterOutput'

class Counter extends Component {
	render() {
		return (
			<div>
				<CounterOutput value={this.props.ctr} />
				<CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
				<CounterControl label="Decrement" clicked={this.props.onDecrementCounter} />
				<CounterControl label="Add_5" clicked={this.props.onAddCounter} />
				<CounterControl label="Subtract_10" clicked={this.props.onSubCounter} />
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		ctr: state.counter
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onIncrementCounter: () => dispatch({ type: 'INCREMENT' }),
		onDecrementCounter: () => dispatch({ type: 'DECREMENT' }),
		onAddCounter: () => dispatch({ type: 'ADD_5', val: 5 }),
		onSubCounter: () => dispatch({ type: 'SUB_10', val: 10 })
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
