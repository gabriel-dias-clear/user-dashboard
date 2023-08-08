class User {

    constructor(name, gender, birth, country, email, pwd, photo, admin){

        // *variaveis dentro de uma classe são chamadas de atributo ou propriedade do objeto*

        this._name =                     name;

        
//nome da propriedade do obj / nome do parametro passado no constructor

        this._gender = gender;
        this._birth = birth;
        this._country = country;
        this._email = email;
        this._pwd = pwd;
        this._photo = photo;
        this._admin = admin;
        this._register = new Date();
    }

    get register(){
        return this._register;
    }

    get name(){
        return this._name;
    }

    get gender(){
        return this._gender;
    }

    get birth(){
        return this._birth;
    }

    get country(){
        return this._country;
    }

    get email(){
        return this._email;
    }

    get pwd(){
        return this._pwd;
    }

    get photo(){
        return this._photo;
    }

    get admin(){
        return this._admin;
    }

    set photo(value){
        this._photo = value;
    }

}