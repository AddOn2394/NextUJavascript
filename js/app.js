

function aplicarEfecto(b)
{
    function cambiarTamano($operacion){
        if ($operacion == 1 )
        {
            document.getElementById(b.id).style.padding= "2px";
        }
        else
        {
            document.getElementById(b.id).style.padding= "0px";
        }
    };
        document.onkeydown=cambiarTamano(1);
         document.onkeyup=cambiarTamano(2);

    document.getElementById("display").innerHTML=b.id;
}
