export default class Agenda{
    constructor(){
        this._articulos=[];
    }
    get articulos(){
        return this._articulos;
      }
  
      _encontrarArticulo(nombre, codigo){
          let result = -1;
          this._articulos.forEach((articulo, index) => {
            if(articulo.nombre===nombre||articulo.codigo === codigo||this._articulos.length==20){
              result = index;
              return;
            }
          });
      
          return result;
        }
  
        agregarArticulo(articulo) {
              if(this._encontrarArticulo(articulo.nombre, articulo.codigo) >= 0){
                return false;
              }
             
              this._articulos[this._articulos.length] = articulo; 
              this._ordenar();  
              return true;  
                
      }
  
      _borrarArticulo(row, articulo){
                let pos = this._encontrarArticulo(articulo.nombre, articulo.codigo);
                this._articulos.splice(pos, 1);
                row.remove();
        
      }
      _ordenar(){
        /*let lugar = 0;
        let superior = this._articulos.length - 1;
        while(lugar <= superior){
        let apuntador = Math.floor((lugar+superior)/2);

        if(codigo = this._articulos[apuntador].codigo){
          return this._articulos[apuntador].codigo
        }
        if(codigo < this._articulos[apuntador].codigo){
          superior = apuntador - 1;
        }
        else{
          lugar = apuntador - 1; 
        }

        if(){

        }

      }
    }*/
    let ord = 0;
    let aux = 0;
    while(ord == 0){
      ord=1;
      for(let j=0; j<this._articulos.length-1; j++)
      {
               if(this._articulos[j].codigo>this._articulos[j+1].codigo)
               {
                   aux=this._articulos[j];
                   this._articulos[j]=this._articulos[j+1];
                   this._articulos[j+1]=aux;
                   ord=0;
               }
      }
    }
  }
}