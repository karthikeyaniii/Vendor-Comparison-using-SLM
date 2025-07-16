import React, { useState } from 'react';
import './App.css';
import { Client } from "@gradio/client";
import { Search, ShoppingBag, Truck, Star } from 'lucide-react';

function App() {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const searchProduct = async () => {
        setIsLoading(true);
        
        const client = await Client.connect("https://acaf8306a22c4606dc.gradio.live");
        const result = await client.predict("/predict", [searchTerm]);

        const shoes = result.data[0];
        console.log(shoes);

        setSearchResults(shoes);
        setIsLoading(false);
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            searchProduct();
        }
    };

    return (
        <div className="App">
            <section className="intro">
                <div className="left">
                    <h1>Discover the Best Shoes for Your Style and Comfort</h1>
                    <button className="scroll-btn">Scroll Down 👇</button>
                    <p>Explore our wide selection of high-quality shoes from top vendors.</p>
                </div>
                <div className="right">
                    <div className="hero-bg">
                        <img src=".\src\assets\Shoe.png" alt="shoe" className="hero-img" />
                    </div>
                </div>
            </section>

            <section className="hero">
                <div className="container">
                    <h1>Find the Best Footwear Vendors</h1>
                    <p>Compare prices and find the best deals from top vendors.</p>
                    <form id="search-form" onSubmit={(e) => { e.preventDefault(); searchProduct(); }}>
                        <div className="search-container">
                            <Search className="search-icon" />
                            <input
                                type="text"
                                id="product-input"
                                placeholder="Enter your query..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                onKeyPress={handleKeyPress}
                            />
                            <button type="submit">Search</button>
                        </div>
                    </form>
                </div>
            </section>

            <section className="comparison">
                <div className="container" id="results-container">
                    {isLoading ? (
                        <div className="loader-container">
                            <div className="loader"></div>
                            <p>Searching for the best shoes...</p>
                        </div>
                    ) : (
                        searchResults && (
                            <div className="results-card">
                                <h2>Search Results</h2>
                                <div className="results-content">
                                    {searchResults}
                                </div>
                            </div>
                        )
                    )}
                </div>
            </section>

            <section className="features">
                <div className="container">
                    <div className="feature-grid">
                        <div className="feature-item">
                            <ShoppingBag className="feature-icon" />
                            <h3>Wide Selection</h3>
                            <p>Browse through thousands of shoes from top brands</p>
                        </div>
                        <div className="feature-item">
                            <Star className="feature-icon" />
                            <h3>Best Deals</h3>
                            <p>Find the most competitive prices across vendors</p>
                        </div>
                        <div className="feature-item">
                            <Truck className="feature-icon" />
                            <h3>Fast Shipping</h3>
                            <p>Quick delivery options from trusted vendors</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="faq">
                <div className="faq-container">
                    <h2>Frequently Asked Questions</h2>
                    <div className="faq-grid">
                        <div className="faq-item">
                            <h4>Why use our service?</h4>
                            <p>We provide detailed comparisons to help you find the best deals on footwear.</p>
                        </div>
                        <div className="faq-item">
                            <h4>What should I consider when comparing footwear vendors?</h4>
                            <p>When comparing footwear vendors, consider factors like product quality, pricing, shipping options, return policies, customer reviews, and vendor reputation.</p>
                        </div>
                        <div className="faq-item">
                            <h4>What are the typical shipping costs and delivery times?</h4>
                            <p>Shipping costs and delivery times can vary significantly between vendors. Check each vendor's shipping policy for details on costs, delivery times, and any expedited shipping options available.</p>
                        </div>
                    </div>
                </div>
            </section>

            <footer>
                <div className="container">
                    <p>&copy; 2024 Vendor Comparison. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}

export default App;
