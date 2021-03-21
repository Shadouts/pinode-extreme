import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';
import { inputItemType } from '../types/InputItem';

export default InputItem;

function InputItem ({ input }) {
  return(
    <ListGroup.Item>
      {
        input.coinbase ? // Coinbases don't take txid as input
          <Fragment>
            <Row>
              <Col className='text-right' xs={3}>
                <b>Coinbase</b>
              </Col>
              <Col xs={9}>{ input.coinbase }</Col>
            </Row>
            <br />
            <Row>
              <Col className='text-right' xs={3}>
                <b>Sequence</b>
              </Col>
              <Col xs={9}>{ input.sequence }</Col>
            </Row>
          </Fragment>
          :
          <Fragment>
            <Row>
              <Col className='text-right' xs={3}>
                <b>Transaction ID</b>
              </Col>
              <Col xs={9}>
                <Link to={`/transaction/${input.txid}`}>{ input.txid }</Link>
              </Col>
            </Row>
            <br />
            <Row>
              <Col className='text-right' xs={3}>
                <b>Vout</b>
              </Col>
              <Col xs={9}>{ input.vout }</Col>
            </Row>
            <br />
            <Row>
              <Col className='text-right' xs={3}>
                <b>Txinwitness</b>
              </Col>
              <Col xs={9}>
                {
                  input.txinwitness && input.txinwitness.length > 0 &&
                  input.txinwitness.map((witness, i) => (
                    <Fragment key={i}>
                      <span style={{ display: 'block' }}>
                        { witness }
                      </span>
                      <br />
                    </Fragment>
                  ))
                }
              </Col>
            </Row>
            <br />
            <Row>
              <Col className='text-right' xs={3}>
                <b>ScriptSig</b>
              </Col>
              <Col xs={9}>
                <span>{ input.scriptSig.asm }</span>
                <br />
                <span>{ input.scriptSig.hex }</span>
              </Col>
            </Row>
          </Fragment>
      }
    </ListGroup.Item>
  );
}

InputItem.propTypes = {
  input: inputItemType.isRequired
}
