<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Shopify App Test</title>

    <!-- Lấy Shopify API Key từ .env -->
    <meta name="shopify-api-key" content="{{ env('SHOPIFY_API_KEY') }}" />
    <link rel="stylesheet" href="{{ mix('css/app.css') }}">
    
    <!-- Shopify App Bridge --> 
    <script src="https://cdn.shopify.com/shopifycloud/app-bridge.js"></script>

</head>
<body>
    <div class="container"></div>
        @yield('content')
        <div id="root"></div>
    </div>
    <script src="{{ mix('js/app.js') }}"></script>
</body>
</html>
