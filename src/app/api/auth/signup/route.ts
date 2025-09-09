import { NextRequest, NextResponse } from "next/server";
import { auth } from "../../../../lib/auth";
import { SignupSchema } from "../../../../lib/model/user";
import { z } from "zod";

export async function POST(request: NextRequest) {
  try {
    // 1️⃣ Validate input
    const body = await request.json();
    const validatedData = SignupSchema.parse(body);
    const { username, email, password } = validatedData;

    // 2️⃣ Sign up with Better Auth (raw password!)
    const session = await auth.api.signUpEmail({
      body: {
        email,
        password,
        name: username, // this sets the name field in Better Auth
      },
      asResponse: false,
    });

    if (!session) {
      return NextResponse.json(
        { error: "Signup failed" },
        { status: 400 }
      );
    }

    // 3️⃣ Return user info (with extra fields)
    const user = session.user as {
      id: string;
      email: string;
      username?: string;
      profilePicture?: string;
    };

    return NextResponse.json({
      success: true,
      message: "User created successfully",
      user: {
        id: user.id,
        email: user.email,
        username: username, // send the username we just signed up with
        profilePicture: user.profilePicture || null,
      },
      session,
    }, { status: 201 });

  } catch (error: unknown) {
    console.error("Signup error:", error);

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Invalid input", details: error.issues },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
