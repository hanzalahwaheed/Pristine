import { connect, connection } from 'mongoose';
const mongoURI = 'mongodb+srv://pristine:pristine@pristine.286i887.mongodb.net/pristine?retryWrites=true&w=majority';

const mongoDB = async () => {
  try {
    await connect(mongoURI);
    console.log('Connected to MongoDB');
    
    const fetched_user_data = await connection.db.collection("users").find().toArray();
    // console.log(fetched_user_data.email)
    global.user_data = fetched_user_data;

    const fetched_place_data = await connection.db.collection("places").find().toArray();
    global.placed_data = fetched_place_data;
    // console.log("db: ",global.placed_data);

  } 
  catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
};

export default mongoDB;
