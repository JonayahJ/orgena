import React from 'react'
import { seed, seedling, sprout } from '../components/Services/Data'
import ServicesSection from '../components/Services/ServicesContent'
import AllCards from '../components/Services/servicesPage'
import ServicesHero from '../components/Services/Hero'

const ServicesPage = () => {
    return (
        <div>
            <ServicesHero />
            <ServicesSection { ...seed } />
            <ServicesSection { ...sprout } />
            <ServicesSection { ...seedling } />
            <AllCards />
        </div>
    )
}

export default ServicesPage
