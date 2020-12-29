import Employees from '../models/employees';


export const onGet = async (): Promise<string> => {
    try {
      const cars = await Employees.get();
      return JSON.stringify(cars, null, 2);
    } catch (err) {
      console.log(err);
      return err.message;
    }
  };
  
  export  const onDelete = async (id: string): Promise<string> => {
    try {
      await Employees.delete(id);
      return 'Successfully deleted';
    } catch (err) {
      return err.message;
    }
  };
  
  export   const onUpdate = async (id: string, data: any): Promise<string> => {
    try {
      
      await Employees.update(id, data);
      return 'Successfully update';
    } catch (err) {
      return err.message;
    }
  };