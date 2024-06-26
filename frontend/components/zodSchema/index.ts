import { z } from "zod";



export const LoginSchema = z.object({
  email: z.string().email({ message: "Email is required" }),
  password: z.string().min(1, { message: "password is required" }),
  code: z.optional(z.string()),
  
});


export const RegisterSchema = z.object({
  email: z.string().email({ message: "Email is required" }),
  password: z.string().min(6, { message: "Minium 6 character required" }),
  name: z.string().min(1, { message: "Name  is required" }),
});

export const CoursesSchema = z.object({
  title: z.string().min(1,{ message: "title is required" }),
  description: z.string().min(6, { message: "Minium 6 character required" }),
  duration: z.string().min(1, { message: "duration  is required" }),
  lessons : z.string().min(1, { message: "lessons   is required" }),
});