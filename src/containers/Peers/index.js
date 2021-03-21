import React from 'react';
import { useQuery } from 'react-apollo';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Table from 'react-bootstrap/Table';
import Spinner from 'Components/Spinner';
import Peer from './components/Peer';

import PEERS_QUERY from './gql/Peers.graphql';

export default Peers;

function Peers () {
  const { loading, data } = useQuery(PEERS_QUERY);

  return(
    <Container fluid>
      <h1 className='text-center'>Peers!</h1>
      <Row>
        <Col xs={12}>
          <Card>
            <Card.Header>
              Peer Info
            </Card.Header>
            <Card.Body>
              {
                loading || !data ?
                <Spinner />
                :
                <Table striped hover>
                  <thead>
                    <tr>
                      <th>Peer ID</th>
                      <th>IP address</th>
                      <th>Services</th>
                      <th>Ping time</th>
                      <th>Version</th>
                      <th>Sub version</th>
                      <th>Block height</th>
                    </tr>
                  </thead>
                  <tbody>
                    { data.peers.map(peer => <Peer key={peer.id} {...peer} />) }
                  </tbody>
                </Table>
              }
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
