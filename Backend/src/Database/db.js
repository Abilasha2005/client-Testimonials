const {connect} =require('mongoose');
const connectDB =async(url)=>{
    try{
        await connect(url)
        console.log ('connected to the database');
    }
    catch (error){
        console.log ('Error connecting to the database');
        console.log(error);
    }
}

module.exports= connectDB;