import EmployeeCar from '../models/employee_car';


export const onGet = async (): Promise<string> => {
    try {
      const cars = await EmployeeCar.get();
      return JSON.stringify(cars, null, 2);
    } catch (err) {
      console.log(err);
      return err.message;
    }
  };
  
  export  const onDelete = async (id: string): Promise<string> => {
    try {
      await EmployeeCar.delete(id);
      return 'Successfully deleted';
    } catch (err) {
      return err.message;
    }
  };
  
  export   const onUpdate = async (id: string, data: any): Promise<string> => {
    try {
      
      await EmployeeCar.update(id, data);
      return 'Successfully update';
    } catch (err) {
      return err.message;
    }
  };