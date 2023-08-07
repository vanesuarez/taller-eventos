const dv = document.querySelector("div");
const btn = document.querySelector("button")

btn.addEventListener("click", (event) => {
    event.stopPropagation();
    alert("Hola!");
} )

dv.addEventListener ("click", () => {
    alert("Hola! Soy el Div");
})
