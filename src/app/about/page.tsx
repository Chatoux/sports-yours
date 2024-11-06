import React from 'react';
import Header from '../components/Header';

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-gray-100">
            <Header />
            <main className="px-4 py-8">
                <h2 className="text-3xl font-bold mb-4">About Us</h2>
                <p>Sports Yours is dedicated to providing quality content to enhance your sports experience.</p>
                <img src="/trainer-client.jpg" alt="Trainer helping client" className="mt-4 rounded shadow-lg" />
            </main>
        </div>
    );
}