import React from 'react';
import { InputGroup, FormControl } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

class SentenceInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <InputGroup>
        <FormControl type="text" />
        <InputGroup.Button>
          <Button>Enter</Button>
        </InputGroup.Button>
      </InputGroup>
    );
  }
}

SentenceInput.propTypes = {
};

export { SentenceInput };
