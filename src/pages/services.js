import React from 'react';
import ServicesSection from '../components/Services/ServicesContent';
import AllCards from '../components/Services/servicesPage';
import ServicesHero from '../components/Services/Hero';

const ServicesPage = () => {
    return (
        <div>
            <ServicesHero />
            <ServicesSection />
            <AllCards />
        </div>
    )
}

export default ServicesPage
