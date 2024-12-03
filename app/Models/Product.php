<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Laravel\Scout\Searchable;

class Product extends Model
{
    use HasFactory, Searchable;

    // Define the index name if it's different from the model's default
    public function searchableAs()
    {
        return 'ecommerce';
    }

    // Define the fields to be indexed if necessary
    public function toSearchableArray()
    {
        return $this->toArray(); // Customize if you need to.
    }
}
