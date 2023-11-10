// Importing necessary libraries
import connectDB from "@/app/lib/mongodb";
import Contact from "@/app/models/contact";
import { NextResponse } from "next/server";
import mongoose from "mongoose";

export async function POST(req) {
  try {
    await connectDB();

    const { fullname, companyname, email, message } = await req.json();

    await Contact.create({ fullname, companyname, email, message });

    return NextResponse.json({
      msg: ["Message sent successfully"],
      success: true,
    });
  } catch (error) {
    if (error instanceof mongoose.Error.ValidationError) {
      let errorList = [];
      for (let e in error.errors) {
        errorList.push(error.errors[e].message);
      }
      console.log(errorList);
      return NextResponse.json({ msg: errorList, errors: errorList });
    } else {
      return NextResponse.json({ msg: ["Unable to send message."], errors: ["Unable to send message."] });
    }
  }
}
