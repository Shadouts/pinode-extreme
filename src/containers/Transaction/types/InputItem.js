import PropTypes from 'prop-types';

const inputItemType = PropTypes.shape({
  coinbase: PropTypes.string,
  sequence: PropTypes.number,
  scriptSig: PropTypes.shape({
    asm: PropTypes.string,
    hex: PropTypes.string
  }),
  txid: PropTypes.string,
  txinwitness: PropTypes.arrayOf( PropTypes.string ),
  vout: PropTypes.number
});

export { inputItemType }
