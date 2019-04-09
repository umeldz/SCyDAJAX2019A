$(function(){
    
    var config={
        func: function(resp){
            
            if(resp!=1){
                
                $.liga('mensaje','error');
            }else{
                
                 $.liga('mensaje', 'Exito :D');
                    
                $('#divTabla').load('enrutador/tablaUsuarios');
                    
                  
            }
          }
        };
    
    
    $('form').liga('AJAX', config);
    
    
    
});