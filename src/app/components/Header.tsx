import React from 'react';
import Link from 'next/link';

export default function Header() {
    return (
        <header className="bg-white shadow-md">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <h1 className="text-xl font-bold text-gray-800">Sports Yours</h1>
                <nav className="flex space-x-4">
                    <Link href="/"><a className="text-gray-800 hover:text-blue-600">Home</a></Link>
                    <Link href="/about"><a className="text-gray-800 hover:text-blue-600">About</a></Link>
                    <Link href="/services"><a className="text-gray-800 hover:text-blue-600">Services</a></Link>
                    <Link href="/contact"><a className="text-gray-800 hover:text-blue-600">Contact</a></Link>
                </nav>
            </div>
        </header>
    );
}