const btn = document.querySelector("header button");
let theme = localStorage.getItem("theme") || "light";
btn.addEventListener("click", () => {
    localStorage.setItem("theme","dark")
    if(theme == "dark"){
        document.querySelector("body").classList.remove("dark")
        theme= "light"
        console.log('light');
    }
    else{
        document.querySelector("body").classList.add("dark")
        theme = "dark"
        console.log('dark');
    }
    localStorage.setItem("theme",theme)
})


if(theme == "dark"){
    document.querySelector("body").classList.add("dark")
}
