import React from 'react';

const Packages = () => {
    const travelPackages = [
        {
            id: 1,
            title: 'Beach Getaway',
            description: 'Enjoy a relaxing week at the beach with all-inclusive amenities.',
            price: '$499',
        },
        {
            id: 2,
            title: 'Mountain Adventure',
            description: 'Experience the thrill of hiking and exploring the mountains.',
            price: '$699',
        },
        {
            id: 3,
            title: 'City Tour',
            description: 'Discover the vibrant culture and attractions of the city.',
            price: '$399',
        },
    ];

    return (
        <div className="packages">
            <h1>Our Travel Packages</h1>
            <div className="package-list">
                {travelPackages.map((pkg) => (
                    <div key={pkg.id} className="package-item">
                        <h2>{pkg.title}</h2>
                        <p>{pkg.description}</p>
                        <p className="price">{pkg.price}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Packages;