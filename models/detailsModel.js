const mongoose = require('mongoose');

const detailsSchema = mongoose.Schema(
  {
    Name_of_the_candidate:String,
    Email:String,
    Mobile_No:Number,
    Date_of_Birth:String,
    Work_Experience:String,
    Resume_Title:String,
    Current_Location:String,
    Postal_Address:String,
    Current_Employer:String,
    Current_Designation:String
}
);

module.exports = Admin = mongoose.model('Details', detailsSchema);
