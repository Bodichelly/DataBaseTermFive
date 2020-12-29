import Cases from '../models/cases';


export const onGet = async (): Promise<string> => {
    try {
      const cars = await Cases.get();
      return JSON.stringify(cars, null, 2);
    } catch (err) {
      console.log(err);
      return err.message;
    }
  };
  
  export  const onDelete = async (id: number): Promise<string> => {
    try {
      await Cases.delete(id);
      return 'Successfully deleted';
    } catch (err) {
      return err.message;
    }
  };
  
  export const onUpdate = async (id: number, data: any): Promise<string> => {
    try {
      
      await Cases.update(id, data);
      return 'Successfully update';
    } catch (err) {
      return err.message;
    }
  };