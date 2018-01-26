document.getElementById('1').addEventListener('click',function(){
    Calculadora.init(1);
});
document.getElementById('2').addEventListener('click',function(){
    Calculadora.init(2);
});
document.getElementById('3').addEventListener('click',function(){
    Calculadora.init(3);
});
document.getElementById('4').addEventListener('click',function(){
    Calculadora.init(4);
});
document.getElementById('5').addEventListener('click',function(){
    Calculadora.init(5);
});
document.getElementById('6').addEventListener('click',function(){
    Calculadora.init(6);
});
document.getElementById('7').addEventListener('click',function(){
    Calculadora.init(7);
});
document.getElementById('8').addEventListener('click',function(){
    Calculadora.init(8);
});
document.getElementById('9').addEventListener('click',function(){
    Calculadora.init(9);
});
document.getElementById('0').addEventListener('click',function(){
    Calculadora.init(0);
});
document.getElementById('on').addEventListener('click',function(){
    Calculadora.init('on');
});
document.getElementById('sign').addEventListener('click',function(){
    Calculadora.init('sign');
});
document.getElementById('dividido').addEventListener('click',function(){
    Calculadora.init('dividido');
});
document.getElementById('por').addEventListener('click',function(){
    Calculadora.init('por');
});
document.getElementById('menos').addEventListener('click',function(){
    Calculadora.init('menos');
});
document.getElementById('punto').addEventListener('click',function(){
    Calculadora.init('punto');
});
document.getElementById('igual').addEventListener('click',function(){
    Calculadora.init('igual');
});
document.getElementById('mas').addEventListener('click',function(){
    Calculadora.init('mas');
});
var $resultado=0;
var $operaciones=0;
var $tecla=0;
var Calculadora = 
{
    init: function($tecla)
    {
        this.getValue($tecla)
        this.getResultado();
    },
    getValue : function($tecla)
    {
        $valor =$tecla;
    },
    agregarOperacion : function()
    {
        $operaciones=$valor
    },
    operar : function()
    {
        switch($operaciones)
        {
            case 'dividido':
                this.division();
                break;
            case 'por':
                this.multiplicacion();
                break;
            case 'menos':
                this.resta();
                break;
            case 'mas':
                this.suma();
                break;                
        }
    },
    suma : function()
    {
        $resultado   +=   $resultado;
    },
    resta : function()
    {
        $resultado   -=   $resultado;    
    },
    multiplicacion : function()
    {
        $resultado   *=   $resultado;    
    },
    division : function()
    {
        $resultado   /=   $resultado;    
    },
    concatenarNumero : function()
    {
        $resultado   =   $resultado.toString()+$valor.toString();    
    },    
    cambiarSigno : function()
    {
        $resultado   =   5;        
    },
    agregarDecimal : function()
    {
        $resultado   =   6;        
    },
    getResultado : function()
    {
        if (Number.isInteger($valor)===true) 
        {
            this.concatenarNumero();    
        }
        else
        {
            switch($valor) 
            {
                case Number.isInteger($valor)===true:
                    this.concatenarNumero();
                    break;
                case 'igual':
                    this.operar();
                    break;
                case 'punto':
                    this.agregarDecimal();
                    break;
                case 'on':
                    $resultado=0;
                    break;
                case 'sign':
                    this.cambiarSigno();
                    break;
                default:
                    this.agregarOperacion();
                    break;
            }
        }   
        document.getElementById('display').innerHTML=$resultado;
    }        
}

