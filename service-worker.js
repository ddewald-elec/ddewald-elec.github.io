<script>

if ("serviceWorker" in navigator) {

navigator.serviceWorker.register("./service-worker.js")
.then(function() {
console.log("Service Worker Registered");
})
.catch(function(error) {
console.log("Service Worker failed:", error);
});

}

</script>
