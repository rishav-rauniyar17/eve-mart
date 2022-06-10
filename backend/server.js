const app = require("./app");

const dotenv=require("dotenv");
const connectDatabase = require("./config/database");

//handling uncaught exception

process.on("uncaughtException",(err)=>{
  console.log(`Error: ${err.message}`);
  console.log(`Shutting down the server due to Uncaught Exception`);
  process.exit(1);
})

//config
dotenv.config({ path: "backend/config/config.env" });

//coonnecting to database

connectDatabase();



const server=app.listen(process.env.PORT, () => {
    console.log(`Server is working on http://localhost:${process.env.PORT}`);
  });

  // console.log(youtube);

  //undandled promise rejection
  process.on("unhandledRejection",err=>{
    console.log(`Error: ${err.message}`);
    console.log(`Shutting down the server due to unhandled Promise Rejection`);

server.close(()=>{
  process.exit(1);
})

  })