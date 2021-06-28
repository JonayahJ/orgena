import React from 'react'
import { seed, seedling, sprout } from '../components/Services/Data'
import ServicesSection from '../components/Services/ServicesContent'
import AllCards from '../components/Services/servicesPage'
import { Heading } from "../components/Services/ServiceContentElements"

const ServicesPage = () => {
    return (
        <div>
            <Heading>Our Services</Heading>
            <ServicesSection { ...seed } />
            <ServicesSection { ...sprout } />
            <ServicesSection { ...seedling } />
            <AllCards />
        </div>
    )
}

export default ServicesPage
