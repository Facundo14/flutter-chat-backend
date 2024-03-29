const mongoose = require('mongoose');

const dbConnection = async() => {
    try {
        await mongoose.connect(process.env.DB_CNN, {
            useNewUrlParser: true,
            //useCreateIndex: true,
            useUnifiedTopology:true
        });

        console.log('dbOnline');
        
    } catch (error) {
        console.log(error);
        throw new Error('Error en la base da datos');
    }
}

module.exports = {
    dbConnection
}