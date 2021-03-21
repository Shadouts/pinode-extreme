import React from 'react';
import PropTypes from 'prop-types';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';

export default InfoItem;

function InfoItem ({ title, value }) {
  let valueComponent = value;

  if (title === "Block hash") {
    valueComponent = <Link to={`/block/${value}`}>{ value }</Link>
  }

  return(
    <ListGroup.Item>
      <Row>
        <Col className='text-right' xs={3}>
          <b>{ title }</b>
        </Col>
        <Col xs={9}>{ valueComponent }</Col>
      </Row>
    </ListGroup.Item>
  )
}

InfoItem.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.number,
    PropTypes.string
  ])
}
