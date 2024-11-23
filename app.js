// The FS Module

const fs = require('fs');

// const data = "\nHi, This is newFile.txt. Appended";

// fs.writeFile("./myFolder/myFile.txt", data, {flag: "a"}, (err) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   else {
//     console.log("Written to file successfully.");
//   }
// })

// fs.readFile("./myFolder/myFile.txt", {encoding: "utf-8"}, (err, data) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   else {
//     console.log('File read successfully! Here is the data');
//     console.log(data);
//   }
// })

// try {
//   // Write file synchronously
//   fs.writeFileSync('./myFolder/myFileSync.txt', '\nmyFile Sync says Hi! (Appended)', {flag: "a"});

//   console.log("Write operation successful");

//   // Read file synchronously
//   const fileData = fs.readFileSync('./myFolder/myFileSync.txt', "utf-8");
//   console.log("Read Operation successful. Here is the data:");
//   console.log(fileData);
// }
// catch (err) {
//   console.log("Error Occurred");
//   console.log(err);
// }

// fs.readdir("./myFolder", (err, files) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
  
//   console.log("Directory read successfully. Here are the files:");
//   console.log(files);
// })

// fs.rename("./myFolder/myFileSync.txt", "./myFolder/myFileASync.txt", (err) => {
//   if (err) {
//     console.log(err);
//     return;
//   }

//   console.log("File renamed successfully.");
// })

fs.unlink("./myFolder/myFileASync.txt", (err) => {
  if (err) {
    console.log(err);
    return;
  }

  console.log("File deleted successfully.");
})