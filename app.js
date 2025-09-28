button = document.querySelector("#toggler")
container = document.querySelector(".main")

let mode = "light"

button.addEventListener("click", () => {
    if(mode ==="light"){
        container.style.backgroundColor = "#000"
        button.innerText = "Light Mode"
        mode = "dark"
    }else{
         container.style.backgroundColor = "#fff"
         mode = "light"
         button.innerText = "Dark Mode"
    }
})