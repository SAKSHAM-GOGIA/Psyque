import React from 'react'
import Aboutus from "../components/Aboutus/Aboutus.js";
import Services from '../components/services/services.js';
import OurFeatures from '../components/ourfeatures/ourfeatures.js';
import Hero from '../components/Hero/Hero.js';
import Abovefooter from '../components/abovefooter/abovefooter.js';

export default function Home() {
    return (
        <>
            <Hero />
            <Aboutus />
            <Services />
            <OurFeatures />
            <Abovefooter />
        </>
    )
}
