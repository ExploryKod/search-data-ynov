import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';
import { InstantSearch, RefinementList } from 'react-instantsearch';

export default function Dashboard() {
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    Tableau de bord
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            Bienvenue sur le POC de recherche de produits
                        </div>
                    </div>

                    <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                     
                        <Link 
                            href={route('products.index')} 
                            className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 dark:bg-gray-800"
                        >
                            <div className="flex items-center">
                                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M3 7h18M9 3v4m6-4v4M3 11h18M3 15h18M9 11v8m6-8v8"
                                        />
                                    </svg>
                                </div>
                                <div className="ml-4">
                                    <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200">
                                        Produits
                                    </h3>
                                    <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                                        Accédez à la liste des produits et gérez vos recherches.
                                    </p>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <RefinementList attribute="brand" />
                
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
