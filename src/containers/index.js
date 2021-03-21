import React from 'react';
import Home from 'Containers/Home';
import Block from 'Containers/Block';
import Peers from 'Containers/Peers'
import PiBar from 'Containers/PiBar';
import Transaction from 'Containers/Transaction';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useParams
} from 'react-router-dom';

export default Root;

function Root () {
  return(
    <Router>
      <PiBar />

      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>

        <Route path='/block/:blockHash' children={<BlockWrapper />} />

        <Route exact path='/peers'>
          <Peers />
        </Route>

        <Route path='/transaction/:txid' children={<TransactionWrapper />} />
      </Switch>
    </Router>
  );
}

function BlockWrapper () {
  const { blockHash } = useParams();

  return <Block blockHash={blockHash} />;
}

function TransactionWrapper () {
  const { txid } = useParams();

  return <Transaction txid={txid} />;
}
