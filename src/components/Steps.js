import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Steps extends Component {
  componentWillMount() {
    const steps = React.Children.map(
      this.props.children,
      ({ props: { children, render, ...config } }) => config,
    );
    this.context.wizard.init(steps);
  }

  render() {
    const { id: activeId } = this.props.step || this.context.wizard.step;
    const [child = null] = React.Children.toArray(this.props.children).filter(
      ({ props: { id } }) => id === activeId,
    );
    return child;
  }
}

Steps.propTypes = {
  children: PropTypes.node.isRequired,
  step: PropTypes.shape({
    id: PropTypes.string.isRequired,
  }),
};

Steps.defaultProps = {
  step: null,
};

Steps.contextTypes = {
  wizard: PropTypes.object,
};

export default Steps;
