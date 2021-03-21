import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Spinner from 'Components/Spinner';
import InputItem from './InputItem';
import { inputItemType } from '../types/InputItem';

export default InputsCard;

function InputsCard ({
  loading,
  data
}) {
  return(
    <Card>
      <Card.Header>Inputs</Card.Header>
      <Card.Body>
        <ListGroup>
          {
            loading || !data ?
              <Spinner />
              :
              data.map((input, i) => <InputItem key={i} input={input} />)
          }
        </ListGroup>
      </Card.Body>
    </Card>
  );
}

InputsCard.propTypes = {
  loading: PropTypes.bool.isRequired,
  data: PropTypes.arrayOf( inputItemType )
};

InputsCard.defaultProps = {
  loading: true
}
