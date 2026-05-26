import { NextResponse } from "next/server";

import bcrypt from "bcryptjs";

import connectDB from "@/lib/mongodb";

import User from "@/models/User";

export async function POST(req: Request) {

  try {

    await connectDB();

    const {
      email,
      password,
    } = await req.json();

    /* FIND USER */

    const user =
      await User.findOne({
        email,
      });

    if (!user) {

      return NextResponse.json(
        {
          message:
            "User not found",
        },
        {
          status: 404,
        }
      );

    }

    /* CHECK PASSWORD */

    const isPasswordCorrect =
      await bcrypt.compare(
        password,
        user.password
      );

    if (!isPasswordCorrect) {

      return NextResponse.json(
        {
          message:
            "Invalid password",
        },
        {
          status: 401,
        }
      );

    }

    return NextResponse.json({

      message:
        "Login successful",

      user,

    });

  } catch (error) {

    console.log(error);

    return NextResponse.json(
      {
        message:
          "Server Error",
      },
      {
        status: 500,
      }
    );

  }

}