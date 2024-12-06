<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Algolia\AlgoliaSearch\Api\SearchClient;

class ProductController extends Controller
{
    public function index(Request $request)
    {
        $query = $request->input('q', '');
        $indexName = "ecommerce";

        // Initialize the Algolia client
        $client = SearchClient::create(
            config('scout.algolia.id'),
            config('scout.algolia.secret')
        );

        $searchResponse = $client->search(
            ['requests' => [
            ['indexName' => $indexName, 'query' => $query, 'hitsPerPage' => 50]
            ]],
        );

        $products = $searchResponse['results'][0]['hits'];

        return inertia('Products/Index', [
            'products' => $products,
            'query' => $query,
        ]);
    }
}
