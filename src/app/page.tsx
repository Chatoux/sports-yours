import React from 'react';
import Header from './components/Header';

export default function HomePage() {
    return (
        <div className="min-h-screen bg-gray-100">
            <Header />
            <main>
                <section className="bg-cover bg-center h-screen flex items-center justify-center" style={{backgroundImage: 'url(/hero-gym.jpg)'}}>
                    <div className="text-center text-white">
                        <h1 className="text-4xl font-bold mb-4">Welcome to Sports Yours</h1>
                        <p className="mb-6">Empowering Your Sports Journey</p>
                        <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Get Started</button>
                    </div>
                </section>
            </main>
        </div>
    );
}