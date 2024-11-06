import React from 'react';
import Header from '../components/Header';

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-gray-100">
            <Header />
            <main className="px-4 py-8">
                <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
                <p>We would love to hear from you! Get in touch with us for any queries or feedback.</p>
            </main>
        </div>
    );
}