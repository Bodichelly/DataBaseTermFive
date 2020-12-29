import readlineSync from "readline-sync";
import { v4 as uuidv4 } from "uuid";
import carsController from "./controllers/carsController";
import casesController from "./controllers/carsController";
import departmentController from "./controllers/carsController";
import employeeCarController from "./controllers/carsController";
import employeesController from "./controllers/carsController";
import offendersController from "./controllers/carsController";

const cars = [
  { column: "car_id", type: "num" },
  { column: "licence_plate", type: "text" },
  { column: "vin_code", type: "text" },
  { column: "department_id", type: "num" },
];

const cases = [
  { column: "policemen_id", type: "num" },
  { column: "offender_personal_id", type: "num" },
  { column: "case_id", type: "id" },
  { column: "name", type: "text" },
  { column: "law_article", type: "text" },
  { column: "commit_date", type: "text" },
];

const departments = [
  { column: "department_id", type: "num" },
  { column: "address", type: "text" },
  { column: "post_code", type: "num" },
  { column: "contact_number", type: "num" },
];

const employee_car = [
  { column: "employee_id", type: "num" },
  { column: "car_id", type: "num" },
  { column: "id", type: "id" },
];

const employees = [
  { column: "employee_id", type: "num" },
  { column: "name", type: "text" },
  { column: "birth_day", type: "text" },
  { column: "contact_number", type: "num" },
  { column: "home_address", type: "text" },
  { column: "post", type: "text" },
  { column: "department_id", type: "num" },
];

const offenders = [
  { column: "personal_id", type: "num" },
  { column: "name", type: "text" },
  { column: "birth_day", type: "text" },
  { column: "contact_number", type: "num" },
  { column: "home_address", type: "text" },
];

const tableColumns = {
  cars,
  cases,
  departments,
  employee_car,
  employees,
  offenders,
};

const selectTable = (): string => {
  console.clear();
  const selectTable: string =
    " [1] Cars\n [2] Cases\n [3] Departments\n [4] Employee-Car\n [5] Employees\n [6] Offenders\n [0] To quite\n\n";
  console.log(selectTable);
  const action: string = readlineSync.keyIn("Choose table: ", {
    limit: "$<0-6>",
  });
  switch (Number(action)) {
    case 0:
      return "";
    case 1:
      return "cars";
    case 2:
      return "cases";
    case 3:
      return "departments";
    case 4:
      return "employee_car";
    case 5:
      return "employees";
    case 6:
      return "offenders";
  }
};

const setAdditionalQueryOptitions = (basicQuery: string): string => {
  console.log(`Fill up basic query "${basicQuery}" or type Enter to skip: `);
  const options = readlineSync.question("\n ", {
    defaultInput: "",
  });
  return options;
};

const getColumnValues = (tableName: string): string[] => {
  let values: string[] = [];
  tableColumns[tableName].forEach((element) => {
    if (element.type == "id") {
      values.push(uuidv4());
    } else {
      console.log(`Enter value for ${element.column} column: `);
      const options = readlineSync.question("\n ", {
        defaultInput: "",
      });
      values.push(options);
    }
  });
  return values;
};

export const getData = async () => {
  const table = selectTable();
  if (table.length == 0) {
    return;
  }
  let controller = carsController;
  switch (table) {
    "offenders": controller = offendersController;
    "cases": controller =casesController;
    "departments": controller =departmentController;
    "employee_car": controller = employeeCarController;
    "employees": controller = employeesController;
  }

  try {
    const data = await controller.onGet();
    await watchData(table ,data.rows);
    console.log("\n\n");
  } catch (e) {
    console.log(e.message);
    console.log("\n\n");
    return;
  }
};
const watchData = async (tableName, data)=>{
    while (1) {
        let i = 1;
        let watchDataOptions: string =`--- ${tableName} ---\n\t`;
        
        watchDataOptions+="\n"
        data.forEach(element => {
            watchDataOptions+="\n"+"["+i+"] \n";
            i++;
            for (const property in element) {
                watchDataOptions+="\t"+property+": "+element[property] + "\n";
              }
              watchDataOptions+='\n'
        });
        watchDataOptions+="\n\n[0] back";
        console.log(watchDataOptions);
        const action: number = readlineSync.questionInt("Choose your next action: ");
        if(action==0 ){
            return;
        }else if(action>=i || action<0){
            console.clear;
            continue;
        }else{
            console.clear();
            console.log("\n");
            console.log(data[action-1]);
            console.log("\n");

            const nextStep: number = readlineSync.questionInt("Press [0] to go back or [1] to manage this record: ");
            if(nextStep==0){
                console.clear();
            }else{
                await manageMenu(tableName ,data[action-1]);
                
                return;
            }
            
        }
      }
}
const manageMenu = async (tableName, obj)=>{
    
        let menuOptions: string =
          `[0] To quite\n[1] Delete record`;
          let tmp = 2;
        let propArr: string[] = [];
          for (const property in obj) {
            menuOptions+="\n"+`[${tmp}] `+"Update "+property;
            propArr.push(property);
            tmp++;
          }
        console.log(menuOptions);
        const action: string = readlineSync.keyIn("Choose your next action: ", {
          limit: `$<0-${propArr.length}>`,
        });
    
        switch (Number(action)) {
          case 0: {
            
            return;
          }
          case 1: {
            await deleteData(tableName, obj[getKeyValue(tableName)]);
            
            return;
          }
          default: {
              const value = readlineSync.question("Enter new value for "+propArr[Number(action)-2]+" : ");
              await updateData(tableName, obj[getKeyValue(tableName)], value, propArr[Number(action)-2]);
              return;
          }
        }
    
}
export const insertData = async () => {
  const table = selectTable();
  if (table.length == 0) {
    return;
  }

  const columnValues = getColumnValues(table);
  let controller = carsController;
  switch (table) {
    "offenders": controller = offendersController;
    "cases": controller =casesController;
    "departments": controller =departmentController;
    "employee_car": controller = employeeCarController;
    "employees": controller = employeesController;
  }
  
  try {
    await controller.onInsert(columnValues);
    console.log("\n\nSuccess!\n\n");
  } catch (e) {
    console.log(e.message);
    console.log("\n\n");
  }
};

const joinInScopes = (table: string, values: string[]): string => {
  let str = "( ";
  for (let i = 0; i < values.length; i++) {
    if (tableColumns[table][i].type == "num") {
      str += values[i];
    } else {
      str += "'" + values[i] + "'";
    }
    if (i != values.length - 1) {
      str += ", ";
    }
  }

  str += " )";
  return str;
};
const getKeyValue = (tableName): string => {
    if(tableName=="cars") {return "car_id"};
    if(tableName=="cases") {return "case_id"};
    if(tableName=="departments") {return "department_id"};
    if(tableName=="employee_car") {return "id"};
    if(tableName=="employees") {return "employee_id"};
    if(tableName=="offenders") {return "personal_id"};
};
const getValueType = (tableName, property) => {
    for (let i = 0; i< tableColumns[tableName].length; i++) {
        if(tableColumns[tableName][i].column==property){
            console.log(tableColumns[tableName][i].type)
            return tableColumns[tableName][i].type;
        }
    }
}
export const updateData = async (tableName:string, id, value, propertyName) => {
 
  let controller = carsController;
  switch (tableName) {
    "offenders": controller = offendersController;
    "cases": controller =casesController;
    "departments": controller =departmentController;
    "employee_car": controller = employeeCarController;
    "employees": controller = employeesController;
  }

  try {
    await controller.onUpdate(id, {value, propertyName});
    console.log("\n\nSuccess!\n\n");
  } catch (e) {
    console.log(e.message);
    console.log("\n\n");
  }
};

const joinWithComma = (table: string, values: string[]): string => {
  let str = "";
  for (let i = 0; i < values.length; i++) {
    if (tableColumns[table][i].type == "num") {
      str += tableColumns[table][i].column + " = " + values[i];
    } else if (tableColumns[table][i].type == "id") {
      continue;
    } else {
      str += tableColumns[table][i].column + " = " + "'" + values[i] + "'";
    }
    if (i != values.length - 1) {
      str += ", ";
    }
  }

  str += "";
  return str;
};

export const deleteData = async (tableName, id) => {
 
  //const query = `DELETE FROM public.${tableName} WHERE ${getKeyValue(tableName)} = ${id}`;
  let controller = carsController;
  switch (tableName) {
    "offenders": controller = offendersController;
    "cases": controller =casesController;
    "departments": controller =departmentController;
    "employee_car": controller = employeeCarController;
    "employees": controller = employeesController;
  }

  try {
    await controller.onDelete(id);
    console.log("\n\nSuccess!\n\n");
  } catch (e) {
    console.log(e.message);
    console.log("\n\n");
  }
};
export const deleteCarsFromRange = async ()=>{
    const from: number = readlineSync.questionInt("Write starting range: ");
    const to: number = readlineSync.questionInt("Write ending range: ");
    try {
        await carsController.onDelete(from, to);
        console.log("\n\nSuccess!\n\n");
      } catch (e) {
        console.log(e.message);
        console.log("\n\n");
      }
}

