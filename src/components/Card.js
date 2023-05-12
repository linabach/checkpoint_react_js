
import React from 'react'
import { Card, Button} from 'react-bootstrap'
import './Card.css'

const Cards = () => {
  return (
    <div>
         <div style={{ display: 'flex', justifyContent:'space-around',alignItems:'center'}} className='backcolr'>
         {/*Set the width and height of the card element*/} 
        <Card id='cardcs'  style={{ width: '22rem', heigh:'18rem',marginBottom:'30px', marginTop: '50px' }}>
          <Card.Body>
           {/*Set the title of the card element*/} 
            <Card.Title style={{ marginBottom:'30px' }}>Meet our talented architect</Card.Title>
             {/*Set the image of the card element*/} 
            <Card.Img style={{ marginBottom:'30px' }} variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREAf-iqlaYWou6wlsLf7LplV9oeADr3A1gEA&usqp=CAU" />
            <Button variant="primary">Book a meeting</Button>
           </Card.Body>
        </Card>

        <Card id='cardcs' style={{ width: '22rem', heigh:'25rem', marginBottom:'30px', marginTop: '50px' }}>
          <Card.Body>
            <Card.Title style={{ marginBottom:'30px' }}>Meet our Interior Designer</Card.Title>
            <Card.Img style={{ marginBottom:'30px' }} variant="top" src="https://images.ctfassets.net/wp1lcwdav1p1/5mr7kXigbSSMhnAWo0e7hH/63af10211e71706bcc5c9292fcec23a4/data_architect.png?w=1500&h=680&q=60&fit=fill&f=faces&fm=jpg&fl=progressive" />
            <Button variant="primary">Book a meeting</Button>
           </Card.Body>
        </Card>
      
        <Card id='cardcs' style={{ width: '22rem', heigh:'40rem', marginBottom:'30px',  marginTop: '50px' }}>
          <Card.Body>
            <Card.Title style={{ marginBottom:'30px' }}>Meet our talented architect</Card.Title>
            <Card.Img style={{ marginBottom:'30px' }} variant="top" src="https://cdn.careeronestop.org/OccVids/OccupationVideos/17-1011.00.jpg" />
            <Button variant="primary">Book a meeting</Button>
           </Card.Body>
        </Card>
    </div>
    </div>
  )
}

export default Cards