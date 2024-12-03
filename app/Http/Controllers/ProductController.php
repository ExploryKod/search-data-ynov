<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Algolia\AlgoliaSearch\Api\SearchClient;

class ProductController extends Controller
{
    public function index(Request $request)
    {
        // Get the search query from the request
        $query = $request->input('q', ''); // Default to an empty string if no query is provided
        $indexName = "ecommerce";

        // Initialize the Algolia client
        $client = SearchClient::create(
            config('scout.algolia.id'),      // App ID
            config('scout.algolia.secret')  // API Key
        );

       // Search for 'test'
        $searchResponse = $client->search(
            ['requests' => [
            ['indexName' => $indexName, 'query' => $query]
            ]],
        );

        // Extract hits (the actual search results)
        $products = $searchResponse;
      
        // Pass the results to the Inertia view
        return inertia('Products/Index', [
            'products' => $products['results'][0]['hits'],
            'query' => $query,
        ]);
    }
}
