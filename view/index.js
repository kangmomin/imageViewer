const dir = document.querySelector("#fileList")
const btn = document.querySelector("#work")
let img = document.querySelector("#root > img")
let time = document.querySelector("#time")
let inp = document.querySelector("#inp")
let i = 0

btn.addEventListener("click", () => {
    let urls = []
    if (!dir.files) return
    
    if (Number(time.value) < 1000) return alert("반복 시간은 최소 1초(1000)입니다.")
    dirArr = Array.from(dir.files)
    dirArr.forEach(file  => {
        urls.push(URL.createObjectURL(file))
    })
    
    img.style.display = "block"
    inp.style.display = "none"


    setInterval(() => {
        if (i >= urls.length) i = 0
        img.src = urls[i]
        i++
    }, Number(time.value))
})