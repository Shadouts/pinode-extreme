import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'react-apollo'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';

export default MemPoolInfo;

function MemPoolInfo ({ data }) {
  return(
    <Card>
      <Card.Header>
        MemPool Info
      </Card.Header>
      <Card.Body>
        <ListGroup variant='flush'>
          <ListGroup.Item>
            <Row>
              <Col xs={6} className='text-right'><b>Size:</b></Col>
              <Col xs={6}>{ data.size }</Col>
            </Row>
          </ListGroup.Item>
          <ListGroup.Item>
            <Row>
              <Col xs={6} className='text-right'><b>Bytes:</b></Col>
              <Col xs={6}>{ data.bytes }</Col>
            </Row>
          </ListGroup.Item>
        </ListGroup>
      </Card.Body>
    </Card>
  );
}

MemPoolInfo.propTypes = {
  data: PropTypes.shape({
    size: PropTypes.number,
    bytes: PropTypes.number
  }).isRequired
};
