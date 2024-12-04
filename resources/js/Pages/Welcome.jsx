import { Head, Link } from '@inertiajs/react';

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    const handleImageError = () => {
        document
            .getElementById('screenshot-container')
            ?.classList.add('!hidden');
        document.getElementById('docs-card')?.classList.add('!row-span-1');
        document
            .getElementById('docs-card-content')
            ?.classList.add('!flex-row');
        document.getElementById('background')?.classList.add('!hidden');
    };

    return (
        <>
            <Head title="Welcome" />
            <div className="bg-gray-50 text-black/50 dark:bg-black dark:text-white/50">
                <img
                    id="background"
                    className="absolute -left-20 top-0 max-w-[877px]"
                    src="https://laravel.com/assets/img/welcome/background.svg"
                />
                <div className="relative flex min-h-screen flex-col items-center justify-center selection:bg-[#FF2D20] selection:text-white">
                    <div className="relative w-full max-w-2xl px-6 lg:max-w-7xl">
                        <header className="grid grid-cols-2 items-center gap-2 py-10 lg:grid-cols-3">
                            <div className="flex lg:col-start-2 lg:justify-center">

                            </div>
                            <nav className="-mx-3 flex flex-1 justify-end">
                                {auth.user ? (
                                    <Link
                                        href={route('dashboard')}
                                        className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                                    >
                                        Mon Tableau de bord
                                    </Link>
                                ) : (
                                    <>
                                        <Link
                                            href={route('login')}
                                            className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                                        >
                                            Se connecter
                                        </Link>
                                        <Link
                                            href={route('register')}
                                            className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                                        >
                                            S'inscrire
                                        </Link>
                                    </>
                                )}
                            </nav>
                        </header>

                        <main className="mt-6">
                            <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
                                <a
                                    href="https://laravel.com/docs"
                                    id="docs-card"
                                    className="flex flex-col items-start gap-6 overflow-hidden rounded-lg bg-white p-6 shadow-[0px_14px_34px_0px_rgba(0,0,0,0.08)] ring-1 ring-white/[0.05] transition duration-300 hover:text-black/70 hover:ring-black/20 focus:outline-none focus-visible:ring-[#FF2D20] md:row-span-3 lg:p-10 lg:pb-10 dark:bg-zinc-900 dark:ring-zinc-800 dark:hover:text-white/70 dark:hover:ring-zinc-700 dark:focus-visible:ring-[#FF2D20]"
                                >
                                     <div className="relative flex items-center gap-6 lg:items-end">
                                        <div
                                            id="docs-card-content"
                                            className="flex items-start gap-6 lg:flex-col"
                                        >
                            
                                            <div className="pt-3 sm:pt-5 lg:pt-0">
                                                <h2 className="text-xl font-semibold text-black dark:text-white">
                                                    Algolia, Scout et Laravel
                                                </h2>

                                                <p className="mt-4 text-sm/relaxed">
                                                    Ce POC illustre l'intégration d'Algolia dans un projet Laravel pour implémenter une recherche rapide et performante des produits.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        id="screenshot-container"
                                        className="relative gap-4 flex w-full flex-1 items-stretch"
                                    >
                                         {auth.user ? (
                                    <Link
                                        href={route('dashboard')}
                                        className="rounded-md px-0 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                                    >
                                        Mon Tableau de bord
                                    </Link>
                                ) : (
                                    <div className="max-h-10 flex gap-4 items-center justify-center">
                                        <Link
                                            href={route('login')}
                                            className=" bg-gray-500 rounded-md px-4 py-4 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                                        >
                                            Se connecter
                                        </Link>
                                        <Link
                                            href={route('register')}
                                            className=" bg-green-800 rounded-md px-4 py-4 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                                        >
                                            S'inscrire
                                        </Link>
                                    </div>
                                )}
                                        <div className="absolute -bottom-16 -left-16 h-40 w-[calc(100%+8rem)] bg-gradient-to-b from-transparent via-white to-white dark:via-zinc-900 dark:to-zinc-900"></div>
                                    </div>

                                   
                                </a>

                                <a
                                    href="https://laracasts.com"
                                    className="flex items-start gap-4 rounded-lg bg-white p-6 shadow-[0px_14px_34px_0px_rgba(0,0,0,0.08)] ring-1 ring-white/[0.05] transition duration-300 hover:text-black/70 hover:ring-black/20 focus:outline-none focus-visible:ring-[#FF2D20] lg:pb-10 dark:bg-zinc-900 dark:ring-zinc-800 dark:hover:text-white/70 dark:hover:ring-zinc-700 dark:focus-visible:ring-[#FF2D20]"
                                >
                                
                                    <div className="pt-3 sm:pt-5">
                                        <h2 className="text-xl font-semibold text-black dark:text-white">
                                            Algolia avec Laravel
                                        </h2>

                                        <p className="mt-4 text-sm/relaxed">
                                           Nous pouvons intégrer Algolia dans votre projet Laravel via Scout pour créer des recherches instantanées avec une interface intuitive.
                                        </p>
                                    </div>

                                </a>

                                <a
                                    href="https://laravel-news.com"
                                    className="flex items-start gap-4 rounded-lg bg-white p-6 shadow-[0px_14px_34px_0px_rgba(0,0,0,0.08)] ring-1 ring-white/[0.05] transition duration-300 hover:text-black/70 hover:ring-black/20 focus:outline-none focus-visible:ring-[#FF2D20] lg:pb-10 dark:bg-zinc-900 dark:ring-zinc-800 dark:hover:text-white/70 dark:hover:ring-zinc-700 dark:focus-visible:ring-[#FF2D20]"
                                >
                                
                                    <div className="pt-3 sm:pt-5">
                                        <h2 className="text-xl font-semibold text-black dark:text-white">
                                            Laravel News
                                        </h2>

                                        <p className="mt-4 text-sm/relaxed">
                                            Laravel News fournit des informations importantes sur l'écosystème Laravel, y compris des mises à jour de packages et des tutoriels sur l'intégration d'Algolia.
                                        </p>
                                    </div>

                                </a>

                                <div className="flex items-start gap-4 rounded-lg bg-white p-6 shadow-[0px_14px_34px_0px_rgba(0,0,0,0.08)] ring-1 ring-white/[0.05] lg:pb-10 dark:bg-zinc-900 dark:ring-zinc-800">
                                

                                    <div className="pt-3 sm:pt-5">
                                        <h2 className="text-xl font-semibold text-black dark:text-white">
                                            Scout
                                        </h2>

                                        <p className="mt-4 text-sm/relaxed">
                                            Scout est un package Laravel pour faciliter la recherche instantanée avec Elasticsearch, Algolia ou Sphinx. Vous pouvez l'utiliser pour indexer des données dans votre base de données et effectuer des recherches sur les données.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </main>
                    </div>
                </div>
            </div>
        </>
    );
}
