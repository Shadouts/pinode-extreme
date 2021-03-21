import PropTypes from 'prop-types';

const outputItemType = PropTypes.shape({
  value: PropTypes.number,
  n: PropTypes.number,
  scriptPubKey: PropTypes.shape({
    addresses: PropTypes.arrayOf( PropTypes.string ),
    asm: PropTypes.string,
    hex: PropTypes.string,
    reqSigs: PropTypes.number,
    type: PropTypes.string
  })
});

export { outputItemType }
