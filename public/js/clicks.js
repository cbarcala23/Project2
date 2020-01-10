$("#kpop").on("click", function(event) {
    event.preventDefault();
    console.log("click is firing");
    window.location.replace("http://localhost:8080/kpop");
});
$("#back").on("click", function(event) {
    event.preventDefault();
    console.log("click is firing");
    window.location.replace("http://localhost:8080/");
});
