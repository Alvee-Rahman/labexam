import { Injectable } from "@nestjs/common";
import { emp } from "./empdata/emp.dto";


@Injectable()
export class EmpService{

    public emp: emp[]=[];
    
    addEmpService(emp: emp): string {
        this.emp.push(emp);
        return "Successfully added";
      }
      

    
      deleteEmpService(id: Number): { message: string, success: boolean } {
        const index = this.emp.findIndex(emp => emp.id === id);
      
        if (index === -1) {
          return { message: "Employee not found", success: false };
        }
      
        this.emp = this.emp.filter(emp => emp.id !== id);
        return { message: "Successfully deleted", success: true };
      }
      
      

    updateEmpService(updatedEmp: emp): string {
        const index = this.emp.findIndex(emp => emp.id === updatedEmp.id);
      
        if (index === -1) {
          return "Employee not found";
        }
      
        this.emp[index] = updatedEmp;
        return "Successfully updated";
      }

      findallemp() : emp[]{

        return this.emp;
      }

      findOne(id: Number): emp {
        return this.emp.find((emp) => emp.id === id);
      }

      
      
}