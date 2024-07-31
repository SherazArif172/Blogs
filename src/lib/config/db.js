import mongoose from "mongoose";

export const connectDb = () => {
  mongoose.connect(
    "mongodb://hi:Hul4y31l3smNqWb0@ac-pzejjpb-shard-00-00.8tvpgbr.mongodb.net:27017,ac-pzejjpb-shard-00-01.8tvpgbr.mongodb.net:27017,ac-pzejjpb-shard-00-02.8tvpgbr.mongodb.net:27017/bloggerr?ssl=true&replicaSet=atlas-k0f3na-shard-0&authSource=admin&retryWrites=true&w=majority&appName=crud"
  );
  console.log("db is connected");
};
