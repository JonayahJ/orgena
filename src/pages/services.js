import React from 'react'
import { seed, seedling, sprout } from '../components/Services/Data'
import ServicesSection from '../components/Services/ServicesContent'
import AllCards from '../components/Services/servicesPage'

const ServicesPage = () => {
    return (
        <div>
            <ServicesSection { ...seed } />
            <ServicesSection { ...sprout } />
            <ServicesSection { ...seedling } />
            <AllCards />
        </div>
    )
}

export default ServicesPage
