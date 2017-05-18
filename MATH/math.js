function batoncic() {
    var ime = document.getElementById("text1").value;
    var godine = document.getElementById("text2").value;
    if(ime.length < 10){
        alert("Ime mora imati barem 10 znakova. Šlapo");
    }
    if(godine<18){
        alert("krivo");
    }
    if(godine>99){
        alert("krivo");
    }
    console.log(ime);
    console.log(godine);
}

function promjeni(){
    var broj = Math.floor((Math.random() * 1000) + 1);
    if (broj>=1 && broj<=200){
        document.getElementById("divic").style.backgroundColor = "blue";
    }
    else if (broj>201 && broj<=401){
        document.getElementById("divic").style.backgroundColor = "red";
    }
    else if (broj>601 && broj<=801){
        document.getElementById("divic").style.backgroundColor = "green";
    }
    else if (broj>801 && broj<=1000){
        document.getElementById("divic").style.backgroundColor = "yellow";
    }

}