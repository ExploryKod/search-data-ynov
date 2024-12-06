import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

const Explanation = ({ title }) => {
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    Explication
                </h2>
            }
        >
        <div className="min-h-screen bg-gradient-to-r from-blue-50 to-blue-100 dark:from-gray-800 dark:to-gray-900 p-10">
            <Head title={title} />
            <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 shadow-md rounded-lg p-8">
                <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-6">
                    {title}
                </h1>

                <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
                    Ce composant React permet d'afficher une liste de produits avec des fonctionnalités de
                    recherche, de pagination et de filtrage par catégorie. Il utilise <span
                    className="font-semibold">TailwindCSS</span> pour le style et <span
                    className="font-semibold">Inertia.js</span> pour la navigation et <span
                    className="font-semibold">Algolia</span> pour les recherches.
                </p>

                <div className="mt-6">
                    <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
                        Fonctionnalités
                    </h2>
                    <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2">
                        <li>
                            <span className="font-semibold">Recherche : </span>
                            Permet de rechercher des produits par nom en utilisant la bibliothèque PHP d'Algolia.
                            <a
                                href="https://www.algolia.com/doc/libraries/php/v4/methods/search/search/?client=php"
                                className="text-blue-600 hover:underline"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Documentation de la recherche PHP
                            </a>.
                        </li>
                        <li>
                            <span className="font-semibold">Filtrage par Catégorie : </span>
                            Affiche les produits en fonction de la catégorie sélectionnée grâce aux filtres d'Algolia.
                            <a
                                href="https://www.algolia.com/doc/guides/managing-results/refine-results/faceting/"
                                className="text-blue-600 hover:underline"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Guide sur le faceting
                            </a>.
                        </li>
                        <li>
                            <span className="font-semibold">Scout Extended : </span>
                            Une extension pour Laravel Scout qui facilite l'intégration avec Algolia.
                            <a
                                href="https://github.com/algolia/scout-extended"
                                className="text-blue-600 hover:underline"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Scout Extended sur GitHub
                            </a>.
                        </li>
                        <li>
                            <span className="font-semibold">Algolia API (PHP) : </span>
                            Permet une interaction directe avec Algolia à travers leur bibliothèque PHP.
                            <a
                                href="https://www.algolia.com/doc/api-client/getting-started/install/php/"
                                className="text-blue-600 hover:underline"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Documentation de l'API PHP
                            </a>.
                        </li>
                    </ul>
                </div>

                <div className="mt-6">
                    <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
                        Dépendances
                    </h2>
                    <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2">
                        <li>
                            <span className="font-semibold">Recherche via un outil externe : </span> Algolia
                        </li>
                        <li>
                            <span className="font-semibold">Recherche par Laravel : </span> Scout
                        </li>
                    </ul>
                </div>

                <div className="mt-6">
                    <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
                        Principales Sections du Code
                    </h2>
                    <div className="space-y-6">
                        {/* Section 1 */}
                        <div>
                            <h3 className="text-xl font-medium text-gray-700 dark:text-gray-300">
                                1. Récupération des Paramètres
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400 mt-2">
                                Le contrôleur récupère les valeurs de la requête HTTP, notamment la chaîne de recherche
                                et le nombre de résultats à afficher par page.
                            </p>
                            <pre
                                className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg text-sm overflow-auto text-gray-800 dark:text-gray-300">
{`$query = $request->input('q', ''); // Recherche par nom<br />
$batch = $request->input('batch', 50); // Nombre de résultats par page`}
                            </pre>
                        </div>

                        {/* Section 2 */}
                        <div>
                            <h3 className="text-xl font-medium text-gray-700 dark:text-gray-300">
                                2. Création du Client Algolia
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400 mt-2">
                                Un client Algolia est créé à l'aide des informations de configuration pour interagir
                                avec l'API Algolia.
                            </p>
                            <pre
                                className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg text-sm overflow-auto text-gray-800 dark:text-gray-300">
{`$client = SearchClient::create(
    config('scout.algolia.id'),
    config('scout.algolia.secret')
);`}
                            </pre>
                        </div>

                        {/* Section 3 */}
                        <div>
                            <h3 className="text-xl font-medium text-gray-700 dark:text-gray-300">
                                3. Recherche et Récupération des Produits
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400 mt-2">
                                La méthode <code>search</code> d'Algolia est utilisée pour rechercher des produits
                                dans un index donné ("ecommerce"). Les résultats sont extraits et retournés pour
                                affichage.
                            </p>
                            <pre
                                className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg text-sm overflow-auto text-gray-800 dark:text-gray-300">
{`$searchResponse = $client->search([
    ['indexName' => 'ecommerce', 'query' => $query, 'hitsPerPage' => $batch]
]);<br />
$products = $searchResponse['results'][0]['hits'];`}
                            </pre>
                        </div>

                        {/* Section 4 */}
                        <div>
                            <h3 className="text-xl font-medium text-gray-700 dark:text-gray-300">
                                4. Envoi des Résultats à la Vue
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400 mt-2">
                                Les résultats de la recherche sont envoyés à la vue React via Inertia.js. Les données
                                nécessaires (produits, recherche, nombre de résultats) sont passées à la vue.
                            </p>
                            <pre
                                className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg text-sm overflow-auto text-gray-800 dark:text-gray-300">
{`return inertia('Products/Index', [
    'products' => $products,
    'query' => $query,
    'batch' => $batch,
]);`}
                            </pre>
                        </div>
                    </div>
                </div>

                <div className="mt-8">
                    <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
                        Conclusion
                    </h2>
                    <p className="text-gray-700 dark:text-gray-300">
                        Ce contrôleur permet de gérer la recherche de produits via Algolia en Laravel, avec des
                        options de filtrage et de pagination. Il fournit également une interaction fluide entre le
                        backend Laravel et le frontend React via Inertia.js.
                    </p>
                </div>
            </div>
        </div>
        </AuthenticatedLayout>
    );
};

export default Explanation;
