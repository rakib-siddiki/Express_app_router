import express from "express";
import students from './appRouter/student.js'
const app = express();
const port = 3000;


app.listen(port, () => {
  console.log("Server is running on port", port);
});
app.use('/students',students)