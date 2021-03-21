import React, { Fragment } from 'react';
import { useQuery } from 'react-apollo';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import BlockChainInfo from './components/BlockChainInfo';
import MemPoolInfo from './components/MemPoolInfo';
import NetworkInfo from './components/NetworkInfo';
import Spinner from 'Components/Spinner';

import HOME_QUERY from './gql/Home.graphql';

export default Home;

function Home () {
  const { loading, data } = useQuery(HOME_QUERY, { pollInterval: 7000 });

  if (loading || !data) {
    return <BreakSpinner />;
  } else {
    return(
      <Container fluid>
        <h1 className="text-center">Bitcoin!</h1>
        <Row>

          <Col>
            <NetworkInfo data={data.networkInfo} />
          </Col>

          <Col sm={6}>
            <BlockChainInfo data={data.blockChainInfo} />
          </Col>

          <Col>
            <MemPoolInfo data={data.memPoolInfo} />
          </Col>

        </Row>
      </Container>
    );
  }

}

function BreakSpinner () {
  return(
    <Fragment>
      <br />
      <Spinner />
    </Fragment>
  );
}
