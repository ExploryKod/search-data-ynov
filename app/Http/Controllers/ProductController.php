<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Algolia\AlgoliaSearch\Api\SearchClient;

class ProductController extends Controller
{
    public function index(Request $request)
    {
        $query = $request->input('q', '');
        $batch = $request->input('batch', 50);

        $indexName = "ecommerce";

        $client = SearchClient::create(
            config('scout.algolia.id'),
            config('scout.algolia.secret')
        );

        $searchResponse = $client->search(
            ['requests' => [
            ['indexName' => $indexName, 'query' => $query, 'hitsPerPage' => $batch]
            ]],
        );

        $products = $searchResponse['results'][0]['hits'];

        return inertia('Products/Index', [
            'products' => $products,
            'query' => $query,
            'batch' => $batch,
        ]);
    }
}
