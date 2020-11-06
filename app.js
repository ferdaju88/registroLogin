let process = require('process')
const moduloLogin = require('./usuarios')
let comando = process.argv[2]

switch (comando) {
    case 'registrar':
        let nombre = process.argv[3]
        let mail = process.argv[4]
        let password = process.argv[5]
        moduloLogin.agregarUsuario(nombre,mail,password)
        console.log('USUARIO REGISTRADO CON EXITO, YA PUEDE INICIAR SESIÓN')
        break;
        
    case 'login':
        let mailLogin = process.argv[3]
        let passwordLogin = process.argv[4]
        let resultado = moduloLogin.loguearUsuario(mailLogin, passwordLogin)
        if (resultado.length == 1) {
        console.log(`Bienvenido ${process.argv[3]}`)
        } else {
            setTimeout(function () {
                console.log('¡¡¡ERROR!!! Usuario No Encontrado, Intente nuevamente mas tarde')
        },1000)
        } break;
    case 'eliminar':
        let mailEliminar = process.argv[3]
        let passwordEliminar = process.argv[4]
        let existe = moduloLogin.loguearUsuario(process.argv[3], process.argv[4])
        if (existe.length == 1){
            moduloLogin.eliminarUsuario(mailEliminar, passwordEliminar)
            setTimeout(function () {
                console.log(`
                Usuario eliminado correctamente
                `)
            }, 1500)            
        }else {
            
            console.log('¡¡¡ERROR!!! no se puede eliminar, ya que el usuario no existe')
            
        }
            break;
}