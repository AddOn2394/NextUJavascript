function EstiloClic(Evento) {
  var evento = Evento || window.event;
  switch(evento.type) {
    case 'mouseup':
      this.style.padding = '0px';
      break;
    case 'mousedown':
      this.style.padding = '4px';
      break;
          
  }
};
window.onload = function() {
  document.getElementById('1').onmouseup = EstiloClic;
  document.getElementById('1').onmousedown = EstiloClic;
  document.getElementById('2').onmouseup = EstiloClic;
  document.getElementById('2').onmousedown = EstiloClic;
  document.getElementById('3').onmouseup = EstiloClic;
  document.getElementById('3').onmousedown = EstiloClic;
  document.getElementById('4').onmouseup = EstiloClic;
  document.getElementById('4').onmousedown = EstiloClic;    
  document.getElementById('5').onmouseup = EstiloClic;
  document.getElementById('5').onmousedown = EstiloClic;    
  document.getElementById('6').onmousedown = EstiloClic;
  document.getElementById('6').onmouseup = EstiloClic;    
  document.getElementById('7').onmouseup = EstiloClic;
  document.getElementById('7').onmousedown = EstiloClic;
  document.getElementById('8').onmouseup = EstiloClic;
  document.getElementById('8').onmousedown = EstiloClic;
  document.getElementById('9').onmouseup = EstiloClic;
  document.getElementById('9').onmousedown = EstiloClic;
  document.getElementById('0').onmouseup = EstiloClic;
  document.getElementById('0').onmousedown = EstiloClic;
  document.getElementById('on').onmouseup = EstiloClic;
  document.getElementById('on').onmousedown = EstiloClic;
  document.getElementById('sign').onmouseup = EstiloClic;
  document.getElementById('sign').onmousedown = EstiloClic;
  document.getElementById('raiz').onmouseup = EstiloClic;
  document.getElementById('raiz').onmousedown = EstiloClic;
  document.getElementById('dividido').onmouseup = EstiloClic;
  document.getElementById('dividido').onmousedown = EstiloClic;
  document.getElementById('por').onmouseup = EstiloClic;
  document.getElementById('por').onmousedown = EstiloClic;
  document.getElementById('menos').onmouseup = EstiloClic;
  document.getElementById('menos').onmousedown = EstiloClic;
  document.getElementById('punto').onmouseup = EstiloClic;
  document.getElementById('punto').onmousedown = EstiloClic;
  document.getElementById('igual').onmouseup = EstiloClic;
  document.getElementById('igual').onmousedown = EstiloClic;
  document.getElementById('mas').onmouseup = EstiloClic;
  document.getElementById('mas').onmousedown = EstiloClic;
};
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
var $numeroTemporal=0;
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
        $operaciones=$valor;
        $numeroTemporal=$resultado;
        $resultado="";
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
        $resultado   =   Number.parseFloat($resultado)+Number.parseFloat($numeroTemporal);
    },
    resta : function()
    {
        $resultado   =   Number.parseFloat($numeroTemporal)-Number.parseFloat($resultado);    
    },
    multiplicacion : function()
    {
        $resultado   =   Number.parseFloat($numeroTemporal)*Number.parseFloat($resultado);    
    },
    division : function()
    {
        $resultado   =   Number.parseFloat($numeroTemporal)/Number.parseFloat($resultado);    
    },
    concatenarNumero : function()
    {
        if(Number.isInteger($resultado.length))
            {
                if($resultado.length<9)
                    {
                        $resultado   = $resultado.toString()+$valor.toString();         
                    }
            }
        else
            {
                $resultado   =   $resultado.toString()+$valor.toString(); 
            }
    },    
    cambiarSigno : function()
    {
        if($resultado>0)
            {
                $resultado*= -1
            }
        else
            {
                $resultado= Math.abs($resultado);
            }
    },
    agregarDecimal : function()
    {
        if($resultado.indexOf(".")<0)
        {
            $resultado   =   $resultado.toString()+'.';        
        }
        
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
                    $numeroTemporal=0;
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
        if($numeroTemporal>0)
        {
        document.getElementById('display').innerHTML=$resultado;
        }
        else
        {
        document.getElementById('display').innerHTML=Number.parseFloat($resultado);    
        }
        
    }        
}

