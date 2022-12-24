import React from 'react'
import styled from 'styled-components'
import Section from './Section'
import car1 from '../images/model-s.jpg'
import car2 from '../images/model-x.jpg'
import car3 from '../images/model-y.jpg'
import car4 from '../images/model-3.jpg'
import solarIMG from '../images/solar-panel.jpg'
import roofIMG from '../images/solar-roof.jpg'
import accessories from '../images/accessories.jpg'

function Home() {
  return (
    <Container>
        <Section 
        title='Modal S'
        description= 'Order Online for Touchless Delivery'
        img={car1}
        leftButtonText='Coustom Order'
        rightButtonText='Existing inventor'
        />
        <Section 
        title='Modal Y'
        description= 'Order Online for Touchless Delivery'
        leftButtonText='Coustom Order'
        rightButtonText='Existing inventor'
        img={car2} />

        <Section 
        title='Modal  x'
        description= 'Order Online for Touchless Delivery'
        leftButtonText='Coustom Order'
        rightButtonText='Existing inventor'
        img={car3} />

        <Section 
        title='Modal  3'
        description= 'Order Online for Touchless Delivery'
        leftButtonText='Coustom Order'
        rightButtonText='Existing inventor'
        img={car4} />

        <Section 
        title='Lowest COst SOlar Panels in Amerca'
        description= 'Money-back guarantee'
        leftButtonText='Order now'
        rightButtonText='Learn more'
        img={solarIMG} />
        
        <Section 
        title='Solar for New Roofs'
        description= 'Solar Roof Costs Less Than a New Roof'
        leftButtonText='Order now'
        rightButtonText='Learn more'
        img={roofIMG} />

        <Section 
        title='Accessories'
        description= ''
        leftButtonText='Shop now'
        img={accessories} />
        
    </Container>
  )
}

export default Home

const Container = styled.div`
    height: 100vh;

`