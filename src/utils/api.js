const API_BASE_URL = 'https://api.example.com'; // Replace with your actual API base URL

export const fetchDestinations = async () => {
    try {
        const response = await fetch(`${API_BASE_URL}/destinations`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return await response.json();
    } catch (error) {
        console.error('Error fetching destinations:', error);
        throw error;
    }
};

export const fetchPackages = async () => {
    try {
        const response = await fetch(`${API_BASE_URL}/packages`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return await response.json();
    } catch (error) {
        console.error('Error fetching packages:', error);
        throw error;
    }
};

export const fetchAboutInfo = async () => {
    try {
        const response = await fetch(`${API_BASE_URL}/about`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return await response.json();
    } catch (error) {
        console.error('Error fetching about info:', error);
        throw error;
    }
};