// Aqui Creo la Clase Padre Animal, junto con sus Constructores ademas de los setters y getters Solicitados
class Animal {
    constructor(name, age, img, comments, sound){
        var _name = name
        var _age = age
        var _img = img
        var _comments = comments
        var _sound= sound 
        this.getName = ()=> _name
        this.getAge = ()=> _age
        this.getImg = ()=> _img
        this.getSound= ()=> _sound 
        this.setComments = (newComment)=> _comments= newComment
        this.getComments = ()=> _comments
    }
    get _name(){
        return this.getName();
    }
    get _age(){
        return this.getAge();
    }
    get _img(){
        return this.getImg();
    }
    get _sound(){
        return this.getSound();
    }
    set _comments(newComment){
        return this.setComments(newComment)
    }

}

// Todas las Clases Hijas, constructores, y asignacion de una funcion segun el sonido que emitan los animales
class Aguila extends Animal {
    constructor(name, age, img, comments, sound){
        super(name, age, img, comments, sound)
    }
    chillar(){
        return this.getSound()
    }


}
class Leon extends Animal {
    constructor(name, age, img, comments, sound){
        super(name, age, img, comments, sound)
    }
    rugir(){
        return this.getSound()
    }


}
class Lobo extends Animal {
    constructor(name, age, img, comments, sound){
        super(name, age, img, comments, sound)
    }
    aullar(){
        return this.getSound()
    }


}
class Oso extends Animal {
    constructor(name, age, img, comments, sound){
        super(name, age, img, comments, sound)
    }
    gruñir(){
        return this.getSound()
    }


}
class Serpiente extends Animal {
    constructor(name, age, img, comments, sound){
        super(name, age, img, comments, sound)
    }
    sisear(){
        return this.getSound()
    }
}
// Exportacion de todas las Clases
export {Serpiente, Leon, Aguila, Lobo, Oso, Animal}