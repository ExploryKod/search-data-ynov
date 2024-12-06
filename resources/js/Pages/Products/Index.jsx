import React, { useState, useEffect } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, router } from '@inertiajs/react';

const Index = ({ products, query, batch }) => {
    const [searchQuery, setSearchQuery] = useState(query || '');
    const [searchBatchQuery, setSearchBatchQuery] = useState(batch || 50);
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedCategory, setSelectedCategory] = useState('');
    const [categories, setCategories] = useState([]);
    const productsPerPage = 10;
    const totalPages = Math.ceil(products.length / productsPerPage);

    useEffect(() => {
        const uniqueCategories = new Set();
        products.forEach(product => {
            if (product.categories) {
                product.categories.forEach(category => uniqueCategories.add(category));
            }
        });
        setCategories([...uniqueCategories]);
    }, [products]);

    const handleSearch = (e) => {
        e.preventDefault();
        router.get(route('products.index'), { q: searchQuery, batch: searchBatchQuery });
    };

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const handleCategoryChange = (e) => {
        setSelectedCategory(e.target.value);
    };

    const filteredProducts = products.filter(product => {
        const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesCategory = !selectedCategory || (product.categories && product.categories.includes(selectedCategory));
        return matchesSearch && matchesCategory;
    });

    const paginatedProducts = filteredProducts.slice(
        (currentPage - 1) * productsPerPage,
        currentPage * productsPerPage
    );

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    Produits
                </h2>
            }
        >
            <Head title="Products" />
            <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10 dark:bg-gray-800">
                <div className="w-full max-w-4xl bg-white shadow-md rounded-lg p-6 dark:bg-gray-900">
                    <h1 className="text-3xl font-semibold text-gray-800 mb-6 dark:text-gray-100">
                        Nos produits
                    </h1>

                    <form
                        onSubmit={handleSearch}
                        className="flex flex-col gap-4 mb-6"
                    >
                        <div className="flex flex-col gap-4">
                            <div className="flex items-center gap-4">
                                <input
                                    type="text"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    placeholder="Rechercher des produits..."
                                    className="flex-grow px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100 dark:placeholder-gray-400"
                                />
                            </div>
                            <div className="flex flex-col">
                                <label
                                    htmlFor="batch-input"
                                    className="text-sm font-medium text-gray-700 dark:text-gray-200"
                                >
                                    Nombre de résultats
                                </label>
                                <input
                                    id="batch-input"
                                    type="number"
                                    value={searchBatchQuery}
                                    onChange={(e) => setSearchBatchQuery(e.target.value)}
                                    placeholder="Nombre de batch"
                                    className="flex-grow px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100 dark:placeholder-gray-400"
                                />
                            </div>
                            <div className="flex flex-col">
                                <label
                                    htmlFor="category-select"
                                    className="text-sm font-medium text-gray-700 dark:text-gray-200"
                                >
                                    Catégories
                                </label>
                                <select
                                    id="category-select"
                                    value={selectedCategory}
                                    onChange={handleCategoryChange}
                                    className="px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100"
                                >
                                    <option value="">Toutes les catégories</option>
                                    {categories.map((category, index) => (
                                        <option key={index} value={category}>
                                            {category}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <button
                                type="submit"
                                className="px-6 py-2 bg-blue-600 text-white font-medium rounded-lg shadow-md hover:bg-blue-700 transition duration-300 dark:bg-blue-500 dark:hover:bg-blue-600"
                            >
                                Rechercher
                            </button>
                        </div>
                    </form>

                    <ul className="divide-y divide-gray-200 dark:divide-gray-700">
                        {paginatedProducts.map((product) => (
                            <li
                                key={product.objectID}
                                className="py-4 flex items-center gap-3"
                            >
                                <div className="grow">
                                    <img
                                        className="w-[50px] h-[50px] object-cover aspect-square"
                                        src={product.image}
                                        alt={product.name}
                                    />
                                </div>
                                <div className={"flex flex-col gap-2"}>
                                    <div className="text-lg text-gray-700 dark:text-gray-200">
                                        {product.name}
                                    </div>
                                    <div className="text-lg text-orange-700 dark:text-orange-600">
                                        {product.type}
                                    </div>
                                </div>
                                <div className="text-gray-500 font-medium dark:text-gray-400">
                                    ${product.salePrice ? product.salePrice : '$00.00'}
                                </div>
                            </li>
                        ))}
                    </ul>

                    <div className="flex justify-center mt-6">
                        {Array.from({length: totalPages}, (_, index) => (
                            <button
                                key={index}
                                onClick={() => handlePageChange(index + 1)}
                                className={`mx-1 px-3 py-1 rounded ${
                                    currentPage === index + 1
                                        ? 'bg-blue-600 text-white'
                                        : 'bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-300'
                                }`}
                            >
                                {index + 1}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default Index;
