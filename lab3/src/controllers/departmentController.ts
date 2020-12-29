import Departments from '../models/department';


export const onGet = async (): Promise<string> => {
    try {
      const cars = await Departments.get();
      return JSON.stringify(cars, null, 2);
    } catch (err) {
      console.log(err);
      return err.message;
    }
  };
  
  export  const onDelete = async (id: number): Promise<string> => {
    try {
      await Departments.delete(id);
      return 'Successfully deleted';
    } catch (err) {
      return err.message;
    }
  };
  
  export  const onUpdate = async (id: number, data: any): Promise<string> => {
    try {
      
      await Departments.update(id, data);
      return 'Successfully update';
    } catch (err) {
      return err.message;
    }
  };