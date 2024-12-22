use Illuminate\Database\Seeder;
use App\Models\Product;
use App\Models\User;

class DatabaseSeeder extends Seeder
{
    public function run()
    {
        // Create sample users
        User::factory(10)->create();

        // Create sample products
        Product::create([
            'name' => 'Sample Product 1',
            'description' => 'This is a sample product description',
            'price' => 29.99,
            'stock' => 100,
            'image_url' => '/images/sample1.jpg'
        ]);

        // Add more sample products as needed
    }
}

// config/database.php (relevant parts)
<?php

return [
    'default' => env('DB_CONNECTION', 'mysql'),
    
    'connections' => [
        'mysql' => [
            'driver' => 'mysql',
            'url' => env('DATABASE_URL'),
            'host' => env('DB_HOST', '127.0.0.1'),
            'port' => env('DB_PORT', '3306'),
            'database' => env('DB_DATABASE', 'ecommerce'),
            'username' => env('DB_USERNAME', 'root'),
            'password' => env('DB_PASSWORD', ''),
            'charset' => 'utf8mb4',
            'collation' => 'utf8mb4_unicode_ci',
            'prefix' => '',
            'strict' => true,
            'engine' => null,
        ],
    ],
];