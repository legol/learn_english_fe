import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

class Sentences extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  _renderSentences() {
    return (
      <div>
        {JSON.stringify(this.props.data_source)}
      </div>
    );
  }

  render() {
    return (
      <div>
        {this._renderSentences()}
      </div>
    );
  }
}

Sentences.propTypes = {
  data_source: React.PropTypes.array.isRequired,
};

export { Sentences };
