import mongoose from 'mongoose';

const Connection = async (username, password) => {
    const URL = `mongodb://user:qwerty18@ac-2z3pf39-shard-00-00.vjsx9ny.mongodb.net:27017,ac-2z3pf39-shard-00-01.vjsx9ny.mongodb.net:27017,ac-2z3pf39-shard-00-02.vjsx9ny.mongodb.net:27017/?ssl=true&replicaSet=atlas-y593uc-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try {
        await mongoose.connect(URL, {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        });
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting to the database ', error);
    }
};

export default Connection;