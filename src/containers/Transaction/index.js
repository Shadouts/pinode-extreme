import React from 'react';
import PropTypes from 'prop-types';
import { useQuery } from 'react-apollo';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import InfoCard from './components/InfoCard';
import InputsCard from './components/InputsCard';
import OutputsCard from './components/OutputsCard';

import TRANSACTION_QUERY from './gql/Transaction.graphql';

export default Transaction;

function Transaction ({ txid }) {
  const { loading, data } = useQuery(
    TRANSACTION_QUERY,
    { variables: { txid } }
  );

  const transaction = data ? data.transaction : null;
  const { vin, vout, ...rest } = transaction || {};

  return(
    <Container fluid>
      <h1 className='text-center'>Transaction!</h1>
      <Row>
        <Col md={6}>
          <InfoCard loading={loading} data={rest} />
        </Col>
        <Col md={6}>
          <InputsCard loading={loading} data={vin} />
          <br />
          <OutputsCard loading={loading} data={vout} />
        </Col>
      </Row>
    </Container>
  );
}

Transaction.propTypes = {
  txid: PropTypes.string.isRequired
};
