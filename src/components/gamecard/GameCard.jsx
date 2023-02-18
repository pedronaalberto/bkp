import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { HelioPay } from '@heliofi/react';
import Card from 'react-bootstrap/Card';

import './GameCard.css'

require('@solana/wallet-adapter-react-ui/styles.css');

function GameCard(props) {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);



  return (
    <>
    <Card style={{ width: '100%' }} role='button'>
        <Card.Img src={props.game.image} className='game-card-image' onClick={ handleShow } alt={props.game.title}/>
    </Card>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size="lg"
        centered
      >
        <Modal.Header closeButton className='modal-header'>
          <Modal.Title>Have fun playing {props.game.title} and burning BONK</Modal.Title>
        </Modal.Header>
        <Modal.Body className='modal-body'>
        <Container fluid className='px-0'>
          <Row className='px-0'>
          <Col lg={{ span: 4 }} sm={{ span: 6}} md={{ span: 12}}>
            <img src={props.game.image} className='modal-image' alt={props.game.title}/>
            </Col>
            <Col lg={{ span: 8 }} sm={{ span: 6}} md={{ span: 12}}>
            <h2>{props.game.title}</h2>
            <h5 className='mt-4'>{props.game.description}</h5>
            </Col>
          </Row>
        </Container>
        </Modal.Body>
        <Modal.Footer className='modal-footer'>
          <HelioPay
            cluster='devnet'
            payButtonTitle= { 'Play ' + props.game.title + ' (2$)'}
            paymentRequestId={props.game.paymentCode}
            onSuccess={function (event: SuccessPaymentEvent): void {
              console.log("onSuccess", event);
            }}
            onError={function (event: ErrorPaymentEvent): void {
              
              console.log("onError", event);
            }}
            onPending={function (event: PendingPaymentEvent): void {
              console.log("onPending", event);
            }}
            onStartPayment={function (): void {
              console.log("onStartPayment");
            }}
            theme={
              {
                colors: {
                  primary: '#7239EB'
                }
              }
            }
          />
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default GameCard;