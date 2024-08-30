<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>
        Vue 3 + Vite
    </title>
    @vite(['resources/js/src/main.js'])
</head>
<body>
    <div id="app">
        <router-view></router-view> <!-- Display Vue component based on route -->
    </div>
</body>
</html>
