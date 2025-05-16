const container = document.querySelector(".grid");
let i = 16;
buildGrid(i);

const confirmButton = document.querySelector("button");
confirmButton.addEventListener("click", () => {
    deleteGrid(i);
    i = document.querySelector(".input textarea").value;
    buildGrid(i);
});

function buildGrid(i) {
    for (let columns = 0; columns < i; columns++) {
        const subcontainer = document.createElement("div");
        subcontainer.classList.add("flex-item");
        container.appendChild(subcontainer);
    
        for (let rows = 0; rows < i; rows++) {
            const content = document.createElement("div");
            content.classList.add("flex-item");
            content.classList.add("square");
            subcontainer.appendChild(content);
        }   
    }

    const squares = document.querySelectorAll(".square");
    squares.forEach((square) => {
        square.addEventListener("mouseover", (event) => {
            console.log(event.target);
            event.target.style.backgroundColor = "black";
        })
    });
}

function deleteGrid(i){
    for (let columns = 0; columns < i; columns++) {
        const subcontainer = container.querySelector(".flex-item");
        console.log("Teste");
        container.removeChild(subcontainer);
    }
}