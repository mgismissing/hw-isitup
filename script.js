const url = "http://79.49.214.228:25016/isitup";
const xhr = new XMLHttpRequest();

const text = document.getElementById("infoText")

xhr.onreadystatechange = function() {
    if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
            text.textContent = "Connessione in corso..."
            window.location.href = "http://79.49.214.228:25016/"
        } else {
            text.innerHTML = "<strong>Il server di HomeWork è disponibile solamente tra le ore 16:00 e le 23:00.</strong><br>Se sei in questa fascia d'orario, il server potrebbe essere chiuso per manutenzione."
        }
    }
};

xhr.open("GET", url, true);
xhr.send();