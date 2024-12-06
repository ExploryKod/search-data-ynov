<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;


namespace App\Http\Controllers;

use Inertia\Inertia;

class ExplanationController extends Controller
{
    /**
     * Display the explanation page.
     *
     * @return \Inertia\Response
     */
    public function index()
    {
        return Inertia::render('Explanation', [
            'title' => 'Explication du fonctionnement',
        ]);
    }
}
