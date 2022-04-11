import { Document } from "mongoose";

export interface PartnerDocument extends Document {
  firstName: string;
  lastName: string;
  nickName: string;
  foodGlutenFree: boolean;
  foodLactoseFree: boolean;
  foodDiabetic: boolean;
}

export interface ChildDocument extends Document {
  firstName: string;
  lastName: string;
  nickName: string;
  age: number;
  foodGlutenFree: boolean;
  foodLactoseFree: boolean;
  foodDiabetic: boolean;
}

export interface GuestDocument extends Document {
  voucherId: string;
  firstName: string;
  lastName: string;
  nickName: string;
  email: string;
  phone: string;
  isComing: boolean;
  didReply: boolean;
  foodGlutenFree: boolean;
  foodLactoseFree: boolean;
  foodDiabetic: boolean;
  partner: PartnerDocument | null;
  children: ChildDocument[] | [];
  createdDate: number;
  modifiedDate: number;
}
