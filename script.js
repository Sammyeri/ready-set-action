function main(){
   const grow = document.getElementById("grow-me");
   grow.classList.add("big");
   const shrink = document.getElementById("shrink-me");
   shrink.classList.remove("big");
   const list = document.querySelectorAll("li");
    list.forEach(element => {console.log(element.outerText)});
    const link = document.querySelector("a");
    link.innerText = ("somwhere");
    link.setAttribute("href", "https://www.example.com");
    const hide = document.getElementById("hide-me");
    hide.style.display = "none";
    const show = document.getElementById("show-me");
    show.style.display = "block";
    const inputName = document.getElementById("name").value;
    const heading = document.querySelector("h1");
    heading.innerText = `Welcome ${inputName}`;
}
