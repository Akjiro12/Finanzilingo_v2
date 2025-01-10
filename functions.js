
var navlinks= document.getElementById("navlinks");

            function showmenu(){
                navlinks.style.right="0";
            }
            function hidemenu(){
                navlinks.style.right="-200px";
            }
             function finelogina(){
                window.location.href="home.html";
            }

document.getElementById('lezione-banche').addEventListener('click', function() {
        window.location.href = 'banchebase.html';
     });

     document.getElementById('lezione-tasse').addEventListener('click', function() {
        window.location.href = 'tassebase.html';
     });

     document.getElementById('lezione-investimenti').addEventListener('click', function() {
        window.location.href = 'investimentibase.html';
     });