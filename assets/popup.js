// Überprüfen, ob das Popup bereits geschlossen wurde oder 24 Stunden vergangen sind
const popupClosedTimestamp = localStorage.getItem("popupClosedTimestamp");
if (!popupClosedTimestamp || (Date.now() - parseInt(popupClosedTimestamp)) >= 24 * 60 * 60 * 1000) {
    document.addEventListener("DOMContentLoaded", function() {
        document.getElementById("popup").style.display = "block";
    });
}

document.getElementById("closePopup").addEventListener("click", function() {
    // Das Popup schließen
    document.getElementById("popup").style.display = "none";
    
    // Speichern, dass das Popup geschlossen wurde und den aktuellen Zeitstempel
    localStorage.setItem("popupClosedTimestamp", Date.now().toString());
});

window.addEventListener("click", function(event) {
    if (event.target == document.getElementById("popup")) {
        // Das Popup schließen
        document.getElementById("popup").style.display = "none";
        
        // Speichern, dass das Popup geschlossen wurde und den aktuellen Zeitstempel
        localStorage.setItem("popupClosedTimestamp", Date.now().toString());
    }
});