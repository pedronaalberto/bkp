import 'bootstrap/dist/css/bootstrap.min.css';
import './Layout.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import TopMenu from '../components/topmenu/TopMenu'
import TopCarousel from '../components/topcarousel/TopCarousel'
// import GameSwiper from '../components/gameswiper/GameSwiper'
import GameCard from '../components/gamecard/GameCard'

export default function Layout({ children }) {

  const Game1 = {
    type : 1,
    image : '/Img/FlappyBonk.jpg',
    title : 'Flappy Bonk',
    description : 'Increase the value of BONK avoiding flying across the charts. Take BONK to the moon!',
    paymentCode : '63c80029793c94040c25afeb',
  };
  const Game2 = {
    type : 1,
    image : '/Img/DogeInvaders.jpg',
    title : 'Doge Invaders',
    description : '',
    paymentCode : '63c80029793c94040c25afeb',
  };
  const Game3 = {
    type : 1,
    image : '/Img/BitcoinFlip.jpg',
    title : 'Bitcoin Flip',
    description : '',
    paymentCode : '63ec2f49ad45405b62884b2c',
  };
  const Game4 = {
    type : 1,
    image : '/Img/WishingWell.jpg',
    title : 'Wishing Well',
    description : '',
    paymentCode : '63c80029793c94040c25afeb',
  };

  const Attraction1 = {
    type : 2,
    image : '/Img/Attractions/JurassicBonk.jpg',
    title : 'Jurassic Bonk',
    description : '',
    paymentCode : '63ec300857d0c5b902fd634d',
  };

  const Attraction2 = {
    type : 2,
    image : '/Img/Attractions/NightOfTheLivingBonk.jpg',
    title : 'Evil Bonk',
    description : '',
    paymentCode : '63ec300857d0c5b902fd634d',
  };

  const Attraction3 = {
    type : 2,
    image : '/Img/Attractions/StarshipBonkers.jpg',
    title : 'Starship Bonkers',
    description : '',
    paymentCode : '',
  };

  const Attraction4 = {
    type : 2,
    image : '/Img/Attractions/Paws.jpg',
    title : 'Paws',
    description : '',
    paymentCode : '',
  };

  return (
    <>
    <div className="App">
    <Container fluid className='px-0'>
      <Row className='px-0'>
        <Col>
          <TopMenu />
        </Col>
      </Row>
      <Row className='px-0'>
        <Col>
          <TopCarousel />
        </Col>
      </Row>
    </Container>
    <Container fluid className='pt-5 pb-5 px-0'>
    <Row className='pb-5 px-0'>
        <Col lg={{ span: 8, offset: 2}} sm={{ span: 10, offset: 1}}>
          <h1>The Games</h1>
          <h2>Have Fun,Burn Bonk</h2>
        </Col>
      </Row>
      <Row className='px-0'>
        <Col lg={{ span: 8, offset: 2}} sm={{ span: 10, offset: 1}} md={{ span: 12, offset: 0}}>
          <Container fluid className='px-0'>
            <Row className='px-0'>
              <Col lg={{ span: 3, offset: 0}} sm={{ span: 10, offset: 1}} className='pb-2 pt-2'>
                <GameCard game={ Game1 }/>
              </Col>
              <Col lg={{ span: 3, offset: 0}} sm={{ span: 10, offset: 1}} className='pb-2 pt-2'>
              <GameCard game={ Game2 }/>
              </Col>
              <Col lg={{ span: 3, offset: 0}} sm={{ span: 10, offset: 1}} className='pb-2 pt-2'>
                <GameCard game={ Game3 } />
              </Col>
              <Col lg={{ span: 3, offset: 0}} sm={{ span: 10, offset: 1}} className='pb-2 pt-2'>
              <GameCard game={ Game4 } />
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>
    <Container fluid className='pt-5 pb-5 px-0'>
    <Row className='pb-5 px-0'>
        <Col lg={{ span: 8, offset: 2}} sm={{ span: 10, offset: 1}}>
          <h1>The Games</h1>
          <h2>Have Fun,Burn Bonk</h2>
        </Col>
      </Row>
      <Row className='px-0'>
        <Col lg={{ span: 8, offset: 2}} sm={{ span: 10, offset: 1}}>
          <Container fluid className='px-0'>
            <Row className='px-0'>
              <Col lg={{ span: 3, offset: 0}} sm={{ span: 10, offset: 1}} className='pb-2 pt-2'>
                <GameCard game={ Attraction1 }/>
                
              </Col>
              <Col lg={{ span: 3, offset: 0}} sm={{ span: 10, offset: 1}} className='pb-2 pt-2'>
                <GameCard game={ Attraction2 }/>
              </Col>
              <Col lg={{ span: 3, offset: 0}} sm={{ span: 10, offset: 1}} className='pb-2 pt-2'>
              <GameCard game={ Attraction3 } />
              </Col>
              <Col lg={{ span: 3, offset: 0}} sm={{ span: 10, offset: 1}} className='pb-2 pt-2'>
              <GameCard game={ Attraction4 } />
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
    
    </Container>
    <Container fluid className='px-0'>
    </Container>
    </div>
    
    </>
  )
}