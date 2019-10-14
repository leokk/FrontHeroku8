import {Question} from "./model.Question";
import {Answer} from "./model.Answer";
export class User {
  id : number;
  email: string="";
  password: string="";
  firstName: string="";
  lastName: string="";
  age: number;
  phone: string="";
  questions:Question[];
  answers:Answer[];
}
