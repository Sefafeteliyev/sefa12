let pass = document.getElementById("pass");
let show =  document.getElementById("show");
let btn = document.getElementById("btn");

function Goster(){
if(pass.type ==  'password' ){
      pass.type = 'text';
      btn.textContent = "Gizle";
      btn.className = "btn btn-danger mt-3 "
}else{
    pass.type = "password"
    btn.textContent = "Goster";
    btn.className = "btn btn-success mt-3 "
}

}



if(pass.value == ""){
  show.style.display = "none";
}


if(pass.type ==  'password' ){
  btn.textContent = "Gizle";
  btn.className = "btn btn-danger mt-3 "
}else{
btn.textContent = "Goster";
btn.className = "btn btn-success mt-3 "
}



function Yoxla(){

  show.style.display = "block";

  if(pass.value.length < 8 ){
    show.innerHTML = "Sifre zeifdir";
    show.className = "mt-3 alert alert-danger";
  }else if(pass.value.length >= 8){
    show.innerHTML = "Sifre gucludur";
    show.className = "mt-3 alert alert-success";
  }


}