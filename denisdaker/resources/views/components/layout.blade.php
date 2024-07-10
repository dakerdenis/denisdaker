<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Denis Akershteyn</title>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap" rel="stylesheet">
    @vite('resources/css/app.css')
    @vite('resources/css/custom.css') <!-- Include your custom CSS file -->
</head>

<body class="font-montserrat min-h-screen w-full bg-black smooth-scroll">
    <x-navigation/>
    <main class="pt-16">
      {{ $slot }}
    </main>

    @vite('resources/js/app.js') <!-- Include your script file here -->
</body>

</html>
