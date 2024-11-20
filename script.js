const grid = document.querySelector(".grid");
const eraser = document.querySelector("#eraser");
const reset = document.querySelector("#reset");
const gridBtn = document.querySelector("#gridBtn");
let gridSize = 64;
let currentColor = "black";

gridBtn.addEventListener("click", () =>{
    gridsize = getSize();
    resetGrid();

});
eraser.addEventListener("click", () =>{
    if(currentColor =="white"){
        currentColor = "black";
        eraser.innerHTML = "eraser";
    }else{
        currentColor = "white";
        eraser.innerHTML = "draw";
    }
    

});
reset.addEventListener("click", () => {
    resetGrid();
})
function resetGrid(){
    while(grid.firstChild){
        grid.removeChild(grid.firstChild);
    }
    createGrid();

}

function createGrid(){
    for(i = 0; i < gridSize; i++){
        const row = document.createElement('row');
        row.className = "gridRow";
        grid.appendChild(row);
        
        for(j = 0; j < gridSize; j++){
            const box = document.createElement('box');
            box.className = "gridBox";
            row.appendChild(box)
            box.addEventListener("mouseover", function(e) {
                e.currentTarget.style.backgroundColor = currentColor
            });
            
        }
    }

    
}
function getSize(){
    let tempSize = prompt("How many squares would you like in the grid?");
    if(tempSize > 100 || tempSize < 1){
        getSize();
    }else{
        gridSize = tempSize;
    }
}
createGrid();