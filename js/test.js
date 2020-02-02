function progressBar () {

    let i = 0;
    if(i == 0) {
        i = 1;
        var bar = document.getElementById("Lbar");
        var width = 1;
        var id = setInterval(loadBar, 65);
    }
    function loadBar() {

        if (width >= 100) {
            clearInterval(id);
            i = 0;
            console.log("sup");
            
        } else {
            width++;
            bar.style.width = width + "%";
        }
    }
}