const fs = require("fs");

//create a file
fs.writeFile("message.txt", "Node.js is awesome!", (err) => {
  if (err) {
    console.error("Error writing file:", err);
  } else {
    console.log("File created successfully");
  }
});

//read a file
fs.readFile("message.txt", "utf-8", (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
  } else {
    console.log("File content:", data);
  }
});
//delete
fs.unlink("message.txt", (err) => {
  if (err) {
    console.error("Error deleting file:", err);
  } else {
    console.log("File deleted successfully");
  }
});
