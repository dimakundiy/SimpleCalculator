import React, { Component } from 'react';
import { connect } from 'react-redux';
import Calculator from '../components/Calculator';
import ex_operation from '../actions/calculator';


class CalculatorWrapper extends Component {
    render() {
        return <div>
            <Calculator ex_op={this.props.ex_op} />
            </div>
    }
}

const mapStateToProps = (state) => (state.Operation);

const mapDispatchToProps = (dispatch) => {
    return {
        ex_op: (value) => dispatch(ex_operation(value))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(CalculatorWrapper);