import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Navigation from '../../components/Navigation';
import Packages from '../../components/Packages';

const Home = () => {
    return (
        <div>
            <Header />
            <Navigation />
            <main>
                <h1>Welcome to Our Travel Agency</h1>
                <p>Your adventure starts here! Explore our amazing travel packages and destinations.</p>
                <Packages />
            </main>
            <Footer />
        </div>
    );
};

export default Home;