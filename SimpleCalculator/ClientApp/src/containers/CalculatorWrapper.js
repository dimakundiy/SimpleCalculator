import React, { Component } from 'react';
import { connect } from 'react-redux';
import Calculator from '../components/Calculator';
import ex_operation, { getHistory, ClearHistory } from '../actions/calculator';


class CalculatorWrapper extends Component {
    componentWillMount() {
        this.props.getHistor();
    }
    componentDidMount() {
        this.props.getHistor();
    }
    render() {
        console.log("wrapper"+this.props.Operation.data)
        return <div>
            <Calculator  getHistor={this.props.getHistor} ex_op={this.props.ex_op} data={this.props.Operation.his} clearHistor={this.props.ClearHistor} />
            </div>
    }
}
const mapStateToProps = (state) => {
    return {
        Operation: state.calc,
       
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        ex_op: (value) => dispatch(ex_operation(value)),
        getHistor: () => dispatch(getHistory()),
        ClearHistor: () => dispatch(ClearHistory())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(CalculatorWrapper);