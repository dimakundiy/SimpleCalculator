import React from 'react';
import { connect } from 'react-redux';
import CalculatorWrapper from '../containers/CalculatorWrapper'

const Home = props => (
    <div>
        <CalculatorWrapper/>
  </div>
);

export default connect()(Home);
