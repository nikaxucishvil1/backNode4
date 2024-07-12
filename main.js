#! /usr/bin/env node

// - Create a weather CLI tool that:
//  Takes a city name as input Fetches and displays the exact temperature
//  in Celsius using this API endpoint: https://api.openweathermap.org/data/2.5/weather?q={cityName}&units=metric&appid=895284fb2d2c50a520ea537456963d9c

// const { Command } = require("commander");

// const program = new Command();

// program
//   .command("getWeather")
//   .description("this command takes 1 city and gives weather in Celsius")
//   .argument("<city>")
//   .action(async (city) => {
//     try {
//       const rawData = await fetch(
//         `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=895284fb2d2c50a520ea537456963d9c`
//       );
//       const data = await rawData.json();
//       if (!data.temp) throw new Error("city not found");

//       const temp = data.main.temp;
//       console.log(city, temp);
//     } catch (error) {
//       console.log(error);
//     }
//   });

// program.parse();

// - Create a budget CLI tool where you can:/Add a new expense./Delete an expense./Show all expenses./Use the fs module to save expense information.

// const { Command } = require("commander");
// const fs = require("fs/promises");
// const program = new Command();

// const readData = async (path) => {
//   const data = await fs.readFile(path, "utf-8");
//   const result = await JSON.parse(data);
//   return result;
// };

// const writeFile = async (path, data) => {
//   return await fs.writeFile(path, data);
// };

// program
//   .command("add")
//   .description("this command adds expense")
//   .argument("<product>")
//   .argument("<expense>")
//   .action(async (product, expense) => {
//     try {
//       if (!expense) throw new Error("please enter expense");
//       const data = await readData("data.json");
//       const obj = {
//         product: product,
//         expense: expense,
//       };
//       data.forEach((item) => {
//         if (JSON.stringify(item) === JSON.stringify(obj)) {
//           throw new Error("already in expenses");
//         }
//       });
//       data.push(obj);
//       await writeFile("data.json", JSON.stringify(data));
//       console.log("expense added");
//     } catch (error) {
//       console.log(error);
//     }
//   });

// program
//   .command("delete")
//   .description("this command deletes expense")
//   .argument("<product-name>")
//   .action(async (productName) => {
//     try {
//       const data = await readData("data.json");
//       let Delindex = -1;
//       data.forEach((item, index) => {
//         if (item.product === productName) {
//           Delindex = index;
//         }
//       });
//       if (Delindex === -1) {
//         throw new Error("item not found");
//       }
//       data.splice(Delindex, 1);
//       await writeFile("data.json", JSON.stringify(data));
//       console.log(productName, "deleted");
//     } catch (error) {
//       console.log(error);
//     }
//   });

// program
//   .command("getAll")
//   .description("this command gets all expenses")
//   .action(async () => {
//     try {
//       const data = await readData("data.json");
//       console.log(data);
//     } catch (error) {
//       console.log(error);
//     }
//   });

// program.parse();

// დედლაინი: 15/07/2024

// ქულა 2
