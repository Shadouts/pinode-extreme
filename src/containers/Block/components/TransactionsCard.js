import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from 'react-router-dom';
import Spinner from 'Components/Spinner';

export default TransactionsCard;

function TransactionsCard ({ loading, transactions }) {
  return(
    <Card>
      <Card.Header>Transactions</Card.Header>
      <Card.Body>
        <ListGroup variant='flush'>
          {
            loading ?
              <Spinner />
              :
              transactions.map(txn => (
                <ListGroup.Item key={txn}>
                  <Link to={`/transaction/${txn}`}>{ txn }</Link>
                </ListGroup.Item>
              ))
          }
        </ListGroup>
      </Card.Body>
    </Card>
  );
}

TransactionsCard.propTypes = {
  loading: PropTypes.bool.isRequired,
  transactions: PropTypes.arrayOf(PropTypes.string)
}

TransactionsCard.defaultProps ={
  loading: true,
  transactions: []
}
