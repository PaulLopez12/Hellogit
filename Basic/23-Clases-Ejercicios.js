//1.Crea una clase que reciba dos propiedades
//2.Añade un metodo a la clase que use las propiedades
//3.Muestra los valores de las propiedades e invoca la funcion
//4.Añade un metodo estatico a la primera clase
//5.Usa el metodo estatico
class SmartPhone{
    constructor(brand='Sin marca',price=0){
        this.brand=brand
        this.price=price
    }
    call(){
        console.log('Sonido de telefono')
    }
    static usa(){
        console.log('No es Hwawei')
    }
}
let Smart1= new SmartPhone('Xiaomi','699')
console.log(Smart1)
Smart1.call()
SmartPhone.usa()

//6.Crea una clase que use una herencia
//7.Crea una clase que use getters y setters
//8.Modifica la clase con getters y setters para que use propiedades privadas
//9.Utiliza los get y set y muestra valores
//10.Sobreescribe un metodo de una clase con herencia
class Home{
    constructor(window,rooms){
        this.window=window
        this.rooms=rooms
    }
    venta(){
        console.log('Casa a la venta')
    }
}

class Home1 extends Home{
    mostrar(){
        console.log('Los sabados se hacen recorridos por la casa')
    }
    venta(){
        console.log('Acordar un monto para la venta')
    }
}

class Xiaomi extends SmartPhone{
    #storage
    #ram
    #camera
    constructor(brand,price,storage=0,ram=0,camera=0){
        super(brand,price)
        this.#storage=storage
        this.#ram=ram
        this.#camera=camera
    }
    get ram(){
        return this.#ram
    }
    set ram(ram){
        this.#ram=ram
    }
    get storage(){
        return this.#storage
    }
    set storage(storage){
        this.#storage=storage
    }
    get camera(){
        return this.#camera
    }
    set camera(camera){
        this.#camera=camera
    }
}

let sp1 = new Xiaomi('RedmiNote13',699,256,8,108)
console.log(sp1)
console.log(sp1.ram)
console.log(sp1.storage)
console.log(sp1.camera)