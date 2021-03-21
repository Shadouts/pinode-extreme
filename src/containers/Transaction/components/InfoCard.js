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
      <Card.Header>Transaction Info</Card.Header>
      <Card.Body>
        {
          loading || !data ?
            <Spinner />
            :
            <ListGroup variant='flush'>
              <InfoItem title='Transaction ID' value={data.txid} />
              <InfoItem title='Hash' value={data.hash} />
              <InfoItem title='Confirmations' value={data.confirmations} />
              <InfoItem title='Block hash' value={data.blockhash} />
              <InfoItem title='Block time' value={data.blocktime} />
              <InfoItem title='Lock time' value={data.locktime} />
              <InfoItem title='Time' value={data.time} />
              <InfoItem title='Size' value={data.size} />
              <InfoItem title='V-size' value={data.vsize} />
              <InfoItem title='Weight' value={data.weight} />
              <InfoItem title='Version' value={data.version} />
              <InfoItem
                title='In active chain'
                value={
                  data.in_active_chain === true ? 'yes' : data.in_active_chain
                }
                />
              <InfoItem title='hex' value={data.hex} />
            </ListGroup>
        }
      </Card.Body>
    </Card>
  );
}

InfoCard.propTypes = {
  loading: PropTypes.bool.isRequired,
  data: PropTypes.shape({
    blockhash: PropTypes.string,
    blocktime: PropTypes.number,
    confirmations: PropTypes.number,
    hash: PropTypes.string,
    hex: PropTypes.string,
    in_active_chain: PropTypes.bool,
    locktime: PropTypes.number,
    size: PropTypes.number,
    time: PropTypes.number,
    txid: PropTypes.string,
    version: PropTypes.number,
    vsize: PropTypes.number,
    weight: PropTypes.number
  })
};

InfoCard.defaultProps = {
  loading: true
}
