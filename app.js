const cookieButton = document.querySelector("#cookie-button");
const message = document.querySelector("#message");
const resetButton = document.querySelector("#reset-button");

let cookies = 0;


function winCookie() {
    cookies = cookies + 1;
    
    if (cookies === 1) {
        message.textContent = "You won 1 cookie!"
    } else {
        message.textContent = "You won " + cookies + " cookies!";

    }
}


function resetGame() {
    cookies = 0
    message.textContent = "You have 0 cookies"
}

cookieButton.addEventListener("click", winCookie);
resetButton.addEventListener("click", resetGame);