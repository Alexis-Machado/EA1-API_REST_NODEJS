const mongo = require('mongoose');

const getConnection = async() => {

    try{
        const url = 'mongodb+srv://Alexis:root@cluster0.l88s1qz.mongodb.net/?retryWrites=true&w=majority';

        await mongo.connect(url);
        console.log('Conexion Exitosa');

    }catch (error){
        console.log('Error de conexión a la base de datos:', error.message);
    }

}

module.exports={
    getConnection,
}