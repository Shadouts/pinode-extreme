import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Spinner from 'Components/Spinner';
import InfoItem from './InfoItem';

export default InfoCard;

function InfoCard ({
  loading,
  data
}) {
  return(
    <Card>
      <Card.Header>Block Info</Card.Header>
      <Card.Body>
        {
          loading || !data ?
            <Spinner />
            :
            <ListGroup variant='flush'>
              <InfoItem title='Block hash' value={data.hash} />
              <InfoItem title='Confirmations' value={data.confirmations} />
              <InfoItem title='Size' value={data.size} />
              <InfoItem title='Stripped size' value={data.strippedsize} />
              <InfoItem title='Weight' value={data.weight} />
              <InfoItem title='Height' value={data.height} />
              <InfoItem title='Version' value={data.version} />
              <InfoItem title='Version hex' value={data.versionHex} />
              <InfoItem title='Merkle root' value={data.merkleroot} />
              <InfoItem title='Time' value={data.time} />
              <InfoItem title='Median time' value={data.mediantime} />
              <InfoItem title='Nonce' value={data.nonce} />
              <InfoItem title='Bits' value={data.bits} />
              <InfoItem title='Difficulty' value={data.difficulty} />
              <InfoItem title='Chainwork' value={data.chainwork} />
              <InfoItem title='Previous block' value={data.previousblockhash} />
              <InfoItem title='Next block' value={data.nextblockhash} />
            </ListGroup>
        }
      </Card.Body>
    </Card>
  );
}

InfoCard.propTypes = {
  loading: PropTypes.bool.isRequired,
  data: PropTypes.shape({
    hash: PropTypes.string,
    confirmations: PropTypes.number,
    size: PropTypes.number,
    strippedsize: PropTypes.number,
    weight: PropTypes.number,
    height: PropTypes.number,
    version: PropTypes.number,
    versionHex: PropTypes.string,
    merkleroot: PropTypes.string,
    time: PropTypes.number,
    mediantime: PropTypes.number,
    nonce: PropTypes.number,
    bits: PropTypes.string,
    difficulty: PropTypes.number,
    chainwork: PropTypes.string,
    previousblockhash: PropTypes.string,
    nextblockhash: PropTypes.string
  })
};

InfoCard.defaultProps = {
  loading: true
}
