import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'react-apollo';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';

export default BlockChainInfo

function BlockChainInfo ({ data }) {
  return(
    <Card>
      <Card.Header>
        Block Chain Info
      </Card.Header>
      <Card.Body>
        <ListGroup variant='flush'>
          <ListGroup.Item>
            <Row>
              <Col xs={3} className='text-right'><b>Blocks:</b></Col>
              <Col xs={9}>{ data.blocks }</Col>
            </Row>
          </ListGroup.Item>
          <ListGroup.Item>
            <Row>
              <Col xs={3} className='text-right'><b>Best block hash:</b></Col>
              <Col xs={9}>
                <Link to={`/block/${data.bestblockhash}`}>
                  { data.bestblockhash }
                </Link>
              </Col>
            </Row>
          </ListGroup.Item>
          <ListGroup.Item>
            <Row>
              <Col xs={3} className='text-right'><b>Difficulty:</b></Col>
              <Col xs={9}>{ data.difficulty }</Col>
            </Row>
          </ListGroup.Item>
          <ListGroup.Item>
            <Row>
              <Col xs={3} className='text-right'><b>Median time:</b></Col>
              <Col xs={9}>{ data.mediantime }</Col>
            </Row>
          </ListGroup.Item>
          <ListGroup.Item>
            <Row>
              <Col xs={3} className='text-right'><b>Chain work:</b></Col>
              <Col xs={9}>{ data.chainwork }</Col>
            </Row>
          </ListGroup.Item>
        </ListGroup>
      </Card.Body>
    </Card>
  );
}

BlockChainInfo.propTypes = {
  data: PropTypes.shape({
    blocks: PropTypes.number,
    bestblockhash: PropTypes.string,
    difficulty: PropTypes.number,
    mediantime: PropTypes.number,
    chainwork: PropTypes.string
  }).isRequired
};
