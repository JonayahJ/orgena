import React from 'react';
import ServicesSection from '../components/Services/ServicesSection';
import AllCards from '../components/Services/AllCards';
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
