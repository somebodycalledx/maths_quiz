function send() {
    number1 = document.getElementById("number1").value;
    number2 = document.getElementById("number2").value;

}

function addUser() {
    player1_name = document.getElementById("login1").value;
    player2_name = document.getElementById("login2").value;
    actual_answer = parseInt("number1") * parseInt("number2")
    

    localStorage.setItem("player1_name", player1_name);
    localStorage.setItem("player2_name", player2_name);

    window.location = "game_page.html";


}
