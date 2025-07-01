import mongoose from "mongoose";

const teamSchema = new mongoose.Schema({
  name: String,
  year: String,
  role: String,
  image: String, 
  linkedin: String,
  instagram: String,
  email: String,
}, {
  collection: "Team"  
});


const Team = mongoose.model("Team", teamSchema);
export default Team;
