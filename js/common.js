// Load jQuery
(function() {
    var script = document.createElement("SCRIPT");
    script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js';
    script.type = 'text/javascript';
    script.onload = function() {
        var $ = window.jQuery;
        $(function() {
            window.alert("You did not properly edit your 'config.php' file. Please read the readme, or check yourls.org!");
        });
    };
    document.getElementsByTagName("head")[0].appendChild(script);
})();

