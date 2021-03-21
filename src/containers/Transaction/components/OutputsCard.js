import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Spinner from 'Components/Spinner';
import OutputItem from './OutputItem';
import { outputItemType } from '../types/OutputItem';

export default OutputsCard;

function OutputsCard ({
  loading,
  data
}) {
  return(
    <Card>
      <Card.Header>Outputs</Card.Header>
      <Card.Body>
        <ListGroup>
          {
            loading || !data ?
              <Spinner />
              :
              data.map((output, i) => <OutputItem key={i} output={output} />)
          }
        </ListGroup>
      </Card.Body>
    </Card>
  );
}

OutputsCard.propTypes = {
  loading: PropTypes.bool.isRequired,
  data: PropTypes.arrayOf( outputItemType )
};

OutputsCard.defaultProps = {
  loading: true
}
