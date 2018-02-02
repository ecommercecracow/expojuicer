import React from 'react';
import PropTypes from 'prop-types';
import slack from './slack';

class Monitor extends React.PureComponent {
  static propTypes = {
    name: PropTypes.string.isRequired,
    services: PropTypes.array.isRequired,
    children: PropTypes.element.isRequired
  };

  static defaultProps = {
    name: undefined,
    services: undefined
  };

  onClick = event => {
    const { services, name, children } = this.props;

    const elem = React.Children.only(children);

    // const result = copy(text, options);
    //
    // if (onCopy) {
    //   onCopy(text, result);
    // }

    // Bypass onClick if it was present
    if (elem && elem.props && typeof elem.props.onClick === 'function') {
      elem.props.onClick(event);
    }

    slack(`clicked ${name}`);
  };

  render() {
    const { name: _name, services: _services, children, ...props } = this.props;

    const elem = React.Children.only(children);

    return React.cloneElement(elem, { ...props, onClick: this.onClick });
  }
}

export default Monitor;
