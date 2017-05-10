// Load jQuery
(function() {
    var script = document.createElement("SCRIPT");
    script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js';
    script.type = 'text/javascript';
    script.onload = function() {
        var $ = window.jQuery;
        $(function() {
            var ref=false;
            if(document.referrer.length>0){
                ref=document.referrer.replace(/admin.*$/, '');
                ref=ref.replace(/https?:\/\//, '');
                ref="Maybe replace \"your-own-domain-here.com\" with \""+ref+"\" in the config?\n";
            }
            var msg="You did not properly edit your 'config.php' file.\n";
            if(ref){
                msg+=ref;
            }
            msg+="Please read the readme, or check yourls.org!";
            window.alert(msg);
        });
    };
    document.getElementsByTagName("head")[0].appendChild(script);
})();

