import React from 'react';
import Header from '../components/Header';

export default function ServicesPage() {
    return (
        <div className="min-h-screen bg-gray-100">
            <Header />
            <main className="px-4 py-8">
                <h2 className="text-3xl font-bold mb-4">Our Services</h2>
                <p>Discover our wide range of services designed for athletes and sports enthusiasts.</p>
            </main>
        </div>
    );
}