import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'react-apollo'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';

export default NetworkInfo;

function NetworkInfo ({ data }) {
  return(
    <Card>
      <Card.Header>
        Network Info
      </Card.Header>
      <Card.Body>
        <ListGroup variant='flush'>
          <ListGroup.Item>
            <Row>
              <Col xs={6} className='text-right'><b>Version:</b></Col>
              <Col xs={6}>{data.version}</Col>
            </Row>
          </ListGroup.Item>
          <ListGroup.Item>
            <Row>
              <Col xs={6} className='text-right'><b>Sub version:</b></Col>
              <Col xs={6}>{ data.subversion }</Col>
            </Row>
          </ListGroup.Item>
          <ListGroup.Item>
            <Row>
              <Col xs={6} className='text-right'><b>Protocol version:</b></Col>
              <Col xs={6}>{ data.protocolversion }</Col>
            </Row>
          </ListGroup.Item>
          <ListGroup.Item>
            <Row>
              <Col xs={6} className='text-right'><b>Time offset:</b></Col>
              <Col xs={6}>{ data.timeoffset }</Col>
            </Row>
          </ListGroup.Item>
          <ListGroup.Item>
            <Row>
              <Col xs={6} className='text-right'><b>Connections:</b></Col>
              <Col xs={6}>
                <Link to='/peers'>
                  { data.connections }
                </Link>
              </Col>
            </Row>
          </ListGroup.Item>
          <ListGroup.Item>
            <Row>
              <Col xs={6} className='text-right'><b>Relay fee:</b></Col>
              <Col xs={6}>{ data.relayfee }</Col>
            </Row>
          </ListGroup.Item>
          <ListGroup.Item>
            <Row>
              <Col xs={6} className='text-right'><b>Local services:</b></Col>
              <Col xs={6}>{ data.localservices }</Col>
            </Row>
          </ListGroup.Item>
        </ListGroup>
      </Card.Body>
    </Card>
  );
}

NetworkInfo.propTypes = {
  data: PropTypes.shape({
    version: PropTypes.number,
    subversion: PropTypes.string,
    protocolversion: PropTypes.number,
    timeoffset: PropTypes.number,
    connections: PropTypes.number,
    relayfee: PropTypes.number,
    localservices: PropTypes.string
  }).isRequired
};
