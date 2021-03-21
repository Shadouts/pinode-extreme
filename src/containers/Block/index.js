import React from 'react';
import PropTypes from 'prop-types';
import { useQuery } from 'react-apollo';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import InfoCard from './components/InfoCard';
import TransactionsCard from './components/TransactionsCard';

import BLOCK_QUERY from './gql/Block.graphql';

export default Block;

function Block ({ blockHash }) {
  const { loading, data } = useQuery(BLOCK_QUERY, { variables: { blockHash } });

  const { tx = [], ...rest } = data ? data.block : {};

  return(
    <Container fluid>
      <h1 className='text-center'>Block!</h1>
      <Row>
        <Col md={6}>
          <InfoCard
            loading={loading}
            data={ Object.keys(rest).length > 0 ? rest : null }
            />
        </Col>
        <Col md={6}>
          <TransactionsCard loading={loading} transactions={tx || []} />
        </Col>
      </Row>
    </Container>
  );
}

Block.propTypes = {
  blockHash: PropTypes.string.isRequired
};
