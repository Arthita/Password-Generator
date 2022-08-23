

document.querySelector("#input").addEventListener("click",()=>{
    const n=Math.floor(Math.random()*(15-10)+10)
    let password=""
    const characters="0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const size=characters.length
    for(let i=0;i<n;i++){
        const rand=Math.floor(Math.random()*size)
        password+=characters.slice(rand,rand+1)
    }
    document.querySelector("#output").value=password
})