import mongoose from "mongoose";

export const URLink = 'mongodb+srv://govind:govind@cluster0.6pfrxms.mongodb.net/Ticket?retryWrites=true&w=majority'

const connectDB = async () => {
    try {
        await mongoose.connect( URLink ,{
            useNewUrlParser: true,
            useUnifiedTopology: true,      
        })
        console.log('MonogDB is Connect Sucessfully')
    } catch (error) {
        console.error('MongoDB has Some Problem WIth DB' , error)
    }
}

export default connectDB