import React from 'react';
import Spinner from 'react-loader-spinner';

class Loader extends React.Component {
  render() {
    return (
      <React.Fragment>

        <Spinner
          type="Puff"
          color="salmon"
          height="200"
          width="200" />

      </React.Fragment>
    );
  }
}

export default Loader;