document.addEventListener("DOMContentLoaded", function () {
    const createGameBtn = document.getElementById("createGameBtn");
    const gameLink = document.getElementById("gameLink");

    var config = {
        pieceTheme:
            "https://chessboardjs.com/img/chesspieces/wikipedia/{piece}.png",
        position: "start",
    };
    var board1 = Chessboard("board1", config);

    createGameBtn.addEventListener("click", async () => {
        console.log("Create game button is clicked");
        const response = await fetch(
            "https://online-chess-game-shwe.onrender.com/createGame"
            // "http://localhost:3000/createGame"
        );
        const data = await response.json();
        // window.location.href = `/gamearena/${data.gameId}`;
        const link = `https://onlinechessgame.vercel.app/gamearena/${data.gameId}`;

        // Display game link
        gameLink.innerHTML = `Share this link: <a href="${link}" target="_blank">${link}</a>`;
    });
});
