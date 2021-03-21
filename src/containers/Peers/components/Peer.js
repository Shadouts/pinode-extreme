import React from 'react';
import PropTypes from 'prop-types';

export default Peer;

function Peer ({
  id,
  addr,
  services,
  pingtime,
  version,
  subver,
  syncedBlocks
}) {
  return(
    <tr>
      <td>{ id }</td>
      <td>{ addr }</td>
      <td>{ services }</td>
      <td>{ pingtime }</td>
      <td>{ version }</td>
      <td>{ subver }</td>
      <td>{ syncedBlocks }</td>
    </tr>
  );
}

Peer.propTypes = {
  id: PropTypes.string,
  addr: PropTypes.string,
  services: PropTypes.string,
  pingtime: PropTypes.number,
  version: PropTypes.number,
  subver: PropTypes.string,
  syncedBlocks: PropTypes.number
};;
