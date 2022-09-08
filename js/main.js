let name = document.getElementById("Name");
let num = document.getElementById("Number");
let totalp = document.getElementById("productos");
let total = document.getElementById("total");
let show = document.getElementById("show");
let tbody = document.getElementsByTagName("tbody");
let temp = 0;
let cont = 1;
let cantidad = 0;
document.getElementById
btn = document.getElementById("btnAgregar");



btn.addEventListener("click", function(e){
    e.preventDefault ();
    
    name.style.borderColor = "#ced4da";
    num.style.borderColor = "#ced4da";
    let check = true;

    precio =  (Math.random() * 50);
    if ((!isNaN(name.value))||name.value==""||name.length<3)
    {
        console.log("nombre no debe ser un numero y debe tener mas de 3 digitos");
        name.style.borderColor = "#FF0000";
        name.value = "";
        check = false;
    }
    if ((isNaN(num.value))||num.value=="") {
        console.log("insertar numero");
        num.style.borderColor = "#FF0000";
        num.value = "";
        check = false;

    }
    if(check){

    let tr = document.createElement("tr")
    tr.innerHTML = `         <th scope="row">${cont}</th>    <td >${name.value}</td> <td>${num.value}</td> <td >${precio.toFixed(2)}$</td>`;
    tbody[0].append(tr);
    temp+=precio*parseInt(num.value);
    cantidad += parseInt(num.value);
    show.classList.remove("badge-secondary");
    show.classList.add("badge-danger");  
    show.innerText = cont;
    totalp.innerText = `${cantidad}`;
    total.innerText = `${temp.toFixed(2)}$`
    cont++;
    num.value = "";
    name.value = "";

    }

})
