export default class Canvas {

    constructor( container ) {

        this.element = document.createElement( "canvas" );
        this.context = this.element.getContext( "2d" );

        this.element.width = 1500;
        this.element.height = 1000;

        container.appendChild( this.element );

    }

}
