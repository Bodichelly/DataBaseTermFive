import readlineSync from "readline-sync";
import { getData, insertData, updateData, deleteData, deleteCarsFromRange } from "./dbController.js";

import sequlize from "./config/dbController"

const cui = async () => {
  while (1) {
    const mainMenuOptions: string =
      `[1] View data
[2] Delete data in range
[3] Insert data
[0] To quite
         `;
    console.log(mainMenuOptions);
    const action: string = readlineSync.keyIn("Choose your next action: ", {
      limit: "$<0-7>",
    });

    switch (Number(action)) {
      case 0: {
        sequlize.end(()=>{
          console.log("Disconnected from DB");
        });
        return;
      }
      case 1: {
        await getData();
        break;
      }
      case 2:{
        await deleteCarsFromRange();
        break;
      }
      case 3:{
        await insertData();
        break;
      }
    }
  }
};

sequlize.connect(()=>{
  console.log("Connected to DB\n\n");
  cui();
});


