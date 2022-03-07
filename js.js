var nama = document.querySelector("#nama");
var btn = document.querySelector("#submit");

btn.onclick = () => {
    sessionStorage.setItem("nama",nama.value);
    location.href = "contoh2.html";
    
}
    
