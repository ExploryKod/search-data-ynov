import React, { useState } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, router } from '@inertiajs/react';

const Index = ({ products, query }) => {
    const [searchQuery, setSearchQuery] = useState(query || '');

    const handleSearch = (e) => {
        e.preventDefault();
        router.get(route('products.index'), { q: searchQuery });
    };

    return (
        
           <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    Tableau de bord
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
                        className="flex items-center gap-4 mb-6"
                    >
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="Rechercher des produits..."
                            className="flex-grow px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100 dark:placeholder-gray-400"
                        />
                        <button
                            type="submit"
                            className="px-6 py-2 bg-blue-600 text-white font-medium rounded-lg shadow-md hover:bg-blue-700 transition duration-300 dark:bg-blue-500 dark:hover:bg-blue-600"
                        >
                            Rechercher
                        </button>
                    </form>

                    <ul className="divide-y divide-gray-200 dark:divide-gray-700">
                        {products.map((product, index) => (
                            <li
                                key={index}
                                className="py-4 flex justify-between items-center"
                            >
                                <div className="text-lg text-gray-700 dark:text-gray-200">
                                    {product.name}
                                </div>
                                <div className="text-gray-500 font-medium dark:text-gray-400">
                                    ${product.salePrice}
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            </AuthenticatedLayout>
       
    );
};

export default Index;
