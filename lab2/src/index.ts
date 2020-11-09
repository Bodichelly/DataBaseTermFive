import readlineSync from "readline-sync";
import { getData, insertData, updateData, deleteData, createRandomCars, deleteCarsFromRange, enterCustomQuery } from "./dbController.js";
import pool from "./pgConnectionModule.js";

const cui = async () => {
  while (1) {
    const mainMenuOptions: string =
      `[1] View data
[2] Generate random data
[3] Delete data in range
[4] Enter custom query
[5] Insert data
[0] To quite
         `;
    console.log(mainMenuOptions);
    const action: string = readlineSync.keyIn("Choose your next action: ", {
      limit: "$<0-7>",
    });

    switch (Number(action)) {
      case 0: {
        pool.end(()=>{
          console.log("Disconnected from DB");
        });
        return;
      }
      case 1: {
        await getData();
        break;
      }
      case 2:{
        await createRandomCars();
        break;
      }
      case 3:{
        await deleteCarsFromRange();
        break;
      }
      case 4:{
        await enterCustomQuery();
        break;
      }
      case 5:{
        await insertData();
        break;
      }
    }
  }
};

pool.connect(()=>{
  console.log("Connected to DB\n\n");
  cui();
});


