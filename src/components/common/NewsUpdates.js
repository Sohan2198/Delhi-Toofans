import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

const categories = ['sports', 'volleyball', 'technology', 'health', 'business'];
const apiKey = '63faa7852d474be094aeaa6aa863785b';

const NewsUpdates = () => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const articlesPerPage = 20;

    const fetchNews = useCallback(async (query) => {
        setLoading(true);
        setError(null);
        try {
            const response = await axios.get(
                `https://newsapi.org/v2/everything?q=${query}&sortBy=publishedAt&apiKey=${apiKey}`
            );
            setArticles(response.data.articles);
        } catch (err) {
            console.error('Error fetching the news:', err);
            setError('Failed to fetch news articles. Please try again later.');
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchNews(categories[0]); // Fetch default category on load
    }, [fetchNews]);

    const handleMenuClick = (category) => {
        setCurrentPage(1); // Reset to first page
        fetchNews(category);
    };

    // Pagination Logic
    const indexOfLastArticle = currentPage * articlesPerPage;
    const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
    const currentArticles = articles.slice(indexOfFirstArticle, indexOfLastArticle);
    const totalPages = Math.ceil(articles.length / articlesPerPage);

    return (
        <div className="bg-gray-100 py-6 px-5 md:px-10">
            <h1 className="text-3xl font-bold mb-4">News Updates</h1>
            {/* Category Buttons */}
            <nav className="mb-4">
                {categories.map((category) => (
                    <button
                        key={category}
                        onClick={() => handleMenuClick(category)}
                        className="bg-[#ffbd00] text-white px-3 py-1 rounded mr-2 hover:bg-black hover:text-[#ffbd00]"
                    >
                        {category.charAt(0).toUpperCase() + category.slice(1)}
                    </button>
                ))}
            </nav>

            {/* Content Section */}
            {loading ? (
                <p className="text-lg">Loading...</p>
            ) : error ? (
                <p className="text-red-500">{error}</p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {currentArticles.length > 0 ? (
                        currentArticles.map((article, index) =>
                            article.urlToImage ? (
                                <div
                                    key={index}
                                    className="bg-white shadow-md rounded-lg overflow-hidden"
                                >
                                    <img
                                        className="w-full h-48 object-cover"
                                        src={article.urlToImage}
                                        alt={article.title || 'Article Image'}
                                    />
                                    <div className="p-4">
                                        {article.title && (
                                            <h2 className="text-xl font-semibold mb-2">
                                                {article.title}
                                            </h2>
                                        )}
                                        {article.description && (
                                            <p className="text-gray-700 mb-4">
                                                {article.description}
                                            </p>
                                        )}
                                        <a
                                            href={article.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-black font-bold hover:underline"
                                        >
                                            Read more
                                        </a>
                                    </div>
                                </div>
                            ) : null
                        )
                    ) : (
                        <p>No articles available.</p>
                    )}
                </div>
            )}

            {/* Pagination */}
            {totalPages > 1 && (
                <div className="flex justify-between mt-4">
                    <button
                        onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                        disabled={currentPage === 1}
                        className="bg-[#ffbd00] hover:bg-black text-black hover:text-[#ffbd00] rounded px-3 py-1 disabled:opacity-50"
                    >
                        Previous
                    </button>
                    <span>{`Page ${currentPage} of ${totalPages}`}</span>
                    <button
                        onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                        disabled={currentPage === totalPages}
                        className="bg-[#ffbd00] hover:bg-black text-black hover:text-[#ffbd00] rounded px-3 py-1 disabled:opacity-50"
                    >
                        Next
                    </button>
                </div>
            )}
        </div>
    );
};

export default NewsUpdates;
