let fs = require('fs');

let moduloLogin = {
    archivo : './usuarios.json',
    leerJSON : function(){
        let usuarioJSON = fs.readFileSync(this.archivo, 'utf-8')
        let usuarios = JSON.parse(usuarioJSON)
        return usuarios
    },


    guardarJson : function(info){
        let nuevoJson = JSON.stringify(info)
        fs.writeFileSync(this.archivo,nuevoJson,'utf8')
        
    },


    agregarUsuario: function(nombre,usuario,password){
        let listaUsuarios = this.leerJSON();


        let nuevoUsuario = {
            nombre: nombre,
            mail : usuario,
            password : password
        }
        listaUsuarios.push(nuevoUsuario)
        this.guardarJson(listaUsuarios)
        return console.log(nuevoUsuario)
    },


    loguearUsuario : function(mail, password){
        let listaUsuarios = this.leerJSON();
        let logueoUsuario = listaUsuarios.filter(usuario=>{
            return usuario.mail == mail && usuario.password == password
        })
        return logueoUsuario
    },
    

    eliminarUsuario : function(mail, password){
    let listaUsuarios = this.leerJSON();
    let nuevaLista = listaUsuarios.filter(usuario=>{
        return usuario.mail != mail && usuario.password != password
    })
    this.guardarJson(nuevaLista)
    }
}

module.exports = moduloLogin