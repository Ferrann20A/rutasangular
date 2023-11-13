import { Component, OnInit } from '@angular/core';
//Necesitamos una serie de clases para recuperar los parametros de la ruta
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
    selector: 'app-numerodoble',
    templateUrl: './numerodoble.component.html',
    styleUrls: ['./numerodoble.component.css']
})

export class NumerodobleComponent implements OnInit {
    //Declaramos variables para nuestro dibujo
    public numero!: number;
    public doble!: number;

    //Esto es el objeto que viene inyectado desde module
    constructor(private _activeRoute: ActivatedRoute, private _router: Router){
        
    }

    goToHome():void{
        this._router.navigate(["/"]);
    }

    redirect(num:number): void{
        this._router.navigate(["/numerodoble",num]);
    }

    ngOnInit(): void {
        //En este metodo es donde debemos subscribirnos a la 
        //recepcion de los parametros de routing
        //Se utiliza el objeto 'ActivatedRoute'
        this._activeRoute.params.subscribe((parametros: Params) => {
            //Dentro de Params se recuperan los nombre de parametros con la siguiente sintaxis:
            // parametros['PARAMETER NAME']
            //Nuestro parametro numero es opcional, por lo que vamos a realiza un if para ser si
            //viene o no en la ruta
            if(parametros["numero"] != null){
                //Los parametros siempre son string
                this.numero = parseInt(parametros["numero"]);
                this.doble = this.numero * 2;
            }
        })
    }
}
