import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import { outputItemType } from '../types/OutputItem';

export default OutputItem;

function OutputItem ({ output }) {
  return(
    <ListGroup.Item>
      <Row>
        <Col className='text-right' xs={3}>
          <b>n</b>
        </Col>
        <Col xs={9}>{ output.n }</Col>
      </Row>
      <br />
      <Row>
        <Col className='text-right' xs={3}>
          <b>Value</b>
        </Col>
        <Col xs={9}>{ output.value }</Col>
      </Row>
      <br />
      <Row>
        <Col className='text-right' xs={3}>
          <b>Addresses</b>
        </Col>
        <Col xs={9}>
          {
            output.scriptPubKey.addresses
            && output.scriptPubKey.addresses.length > 0
            && output.scriptPubKey.addresses.map((address, i) => (
              <Fragment key={i}>
                <span>{ address }</span>
                <br />
              </Fragment>
            ))
          }
        </Col>
      </Row>
      <br />
      <Row>
        <Col className='text-right' xs={3}>
          <b>asm</b>
        </Col>
        <Col xs={9}>{ output.scriptPubKey.asm }</Col>
      </Row>
      <br />
      <Row>
        <Col className='text-right' xs={3}>
          <b>Hex</b>
        </Col>
        <Col xs={9}>{ output.scriptPubKey.hex }</Col>
      </Row>
      <br />
      <Row>
        <Col className='text-right' xs={3}>
          <b>ReqSigs</b>
        </Col>
        <Col xs={9}>{ output.scriptPubKey.reqSigs }</Col>
      </Row>
      <br />
      <Row>
        <Col className='text-right' xs={3}>
          <b>type</b>
        </Col>
        <Col xs={9}>{ output.scriptPubKey.type }</Col>
      </Row>
    </ListGroup.Item>
  );
}

OutputItem.propTypes = {
  output: outputItemType.isRequired
}
