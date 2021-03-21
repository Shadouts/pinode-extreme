import React, { Fragment, useState } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useHistory } from 'react-router-dom';

export default PiBar;

const actions = [
  'Block',
  'Transaction'
];

function PiBar () {
  const [showDonateModal, setShowDonateModal] = useState(false);
  const [action, setAction] = useState(0);
  const [fieldValue, setFieldValue] = useState('');
  let history = useHistory();

  const buttonStyle = action === 0 ?
    { paddingLeft: '2.1rem', paddingRight: '2.1rem' } : {};

  const handleSubmit = e => {
    e.preventDefault();
    history.push(`${action > 0 ? '/transaction/' : '/block/'}${fieldValue}`);
  }

  let fieldPlaceholder;
  switch (action) {
    case 0:
      fieldPlaceholder = "Enter blockhash";
      break;

    case 1:
      fieldPlaceholder = "Enter txid";
      break;

    default:
      fieldPlaceholder = "";
  }

  return(
    <Fragment>
      <Navbar bg='dark' variant='dark'>
        <Navbar.Brand as={Link} to='/'>
          <img
            alt=''
            src='/pilogo-small.png'
            width='auto'
            height='30'
            className='d-inline-block align-top'
            />
          &nbsp;
          PiNode EXTREME!
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='mr-auto'>
            <Form inline onSubmit={handleSubmit}>
              <FormControl
                required
                className='mr-sm-2'
                placeholder={fieldPlaceholder}
                value={fieldValue}
                onChange={e => setFieldValue(e.target.value)}
                />
              <Dropdown as={ButtonGroup}>
                <Button
                  type='submit'
                  style={buttonStyle}
                  variant='outline-success'
                  >
                  {`Check a ${actions[action]}!`}
                </Button>
                <Dropdown.Toggle split variant='outline-success' />
                <Dropdown.Menu>
                  <Dropdown.Item
                    onSelect={() => setAction(0)}
                    >
                    Block
                  </Dropdown.Item>
                  <Dropdown.Item
                    onSelect={() => setAction(1)}
                    >
                    Transaction
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Form>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Fragment>
  );
}
