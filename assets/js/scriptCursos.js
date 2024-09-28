// Abre o primeiro modal
document.getElementById("openModal1").onclick = function() {
    document.getElementById("modal1").style.display = "block";
}
// Fecha o primeiro modal
document.getElementById("closeModal1").onclick = function() {
    document.getElementById("modal1").style.display = "none";
}

// Abre o segundo modal
document.getElementById("openModal2").onclick = function() {
    document.getElementById("modal2").style.display = "block";
}
// Fecha o segundo modal
document.getElementById("closeModal2").onclick = function() {
    document.getElementById("modal2").style.display = "none";
}

// Abre o terceiro modal
document.getElementById("openModal3").onclick = function() {
    document.getElementById("modal3").style.display = "block";
}
// Fecha o terceiro modal
document.getElementById("closeModal3").onclick = function() {
    document.getElementById("modal3").style.display = "none";
}

// Fecha o modal ao clicar fora dele
window.onclick = function(event) {
    if (event.target == document.getElementById("modal1")) {
        document.getElementById("modal1").style.display = "none";
    }
    if (event.target == document.getElementById("modal2")) {
        document.getElementById("modal2").style.display = "none";
    }
    if (event.target == document.getElementById("modal3")) {
        document.getElementById("modal3").style.display = "none";
    }
}