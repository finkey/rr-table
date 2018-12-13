import React from 'react';
import PropTypes from 'prop-types';

class Media extends React.Component {
  static propTypes = {
    query: PropTypes.string.isRequired,
    children: PropTypes.func,
  };

  state = {
    matches: window.matchMedia(this.props.query).matches,
  };

  componentDidMount() {
    this.setup();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.query !== this.props.query) {
      this.removeListener();
      this.setup();
    }
  }

  componentWillUnmount() {
    this.removeListener();
  }

  setup() {
    const media = window.matchMedia(this.props.query);
    if (media.matches !== this.state.matches) {
      this.setState({ matches: media.matches });
    }
    const listener = () => this.setState({ matches: media.matches });
    media.addListener(listener);
    this.removeListener = () => media.removeListener(listener);
  }

  render() {
    return this.props.children(this.state.matches);
  }
}

export default Media;
