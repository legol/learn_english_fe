import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

import { Utilities } from '../utilities/Utilities.js'

class SentenceContainer extends React.Component {

  test() {
  	alert('calling Utilities');

  	var utilities = new Utilities();
  	utilities.init();

  	console.log(window.location.origin);

  	// utilities.post(
  	// 	window.location.origin + '/index.php?c=sentences&m=saveSentence',
  	// 	{input: $("#new_sentence").val()},
  	// 	this.onSentenceSaved,
  	// 	this.onSaveSentenceError,
  	// );

    utilities.get(
  		'http://192.168.1.130:10001/index.php?c=sentences&m=getSentences',
  		this.onSentenceSaved,
  		this.onSaveSentenceError,
  	);
  }

  onSentenceSaved(response) {
  	alert('hello');

    console.log(response);
  }

  onSaveSentenceError(response) {
  	alert('error');
  }

  render() {
    this.test();

    return (
      <Grid>
        <Row className="show-border">
          <Col lg={2} className="show-border">{'Col lg={2}'}</Col>
          <Col lg={18} className="show-border">{'Col lg={18}'}</Col>
        </Row>
      </Grid>
    );
  }
}


export { SentenceContainer };
