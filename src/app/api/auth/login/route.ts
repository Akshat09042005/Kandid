import { NextRequest, NextResponse } from "next/server";
import { auth } from "../../../../lib/auth";
import { LoginSchema } from "../../../../lib/model/user";
import { z } from "zod";
import jwt from "jsonwebtoken";

export async function POST(request: NextRequest) {
  try {
    // 1️⃣ Validate input
    const body = await request.json();
    const validatedData = LoginSchema.parse(body);
    const { email, password } = validatedData;

    // 2️⃣ Authenticate using Better Auth
    const session = await auth.api.signInEmail({
      body: { email, password },
      asResponse: false,
    });

    if (!session) {
      return NextResponse.json(
        { error: "Invalid credentials" },
        { status: 401 }
      );
    }

    // 3️⃣ Type-safe access to extra fields
    const user = session.user as {
      id: string;
      email: string;
      username?: string;
      profilePicture?: string;
    };

    // 4️⃣ Create JWT
    const token = jwt.sign(
      {
        userId: user.id,
        email: user.email,
      },
      process.env.JWT_SECRET || "your-secret-key",
      { expiresIn: "7d" }
    );

    // 5️⃣ Return response with token and session info
    const response = NextResponse.json({
      success: true,
      message: "Login successful",
      user: {
        id: user.id,
        email: user.email,
        username: user.username || null,
        profilePicture: user.profilePicture || null,
      },
      token,
      session,
    }, { status: 200 });

    // 6️⃣ Set HTTP-only cookie
    response.cookies.set("auth-token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 7, // 7 days
    });

    return response;

  } catch (error: unknown) {
    console.error("Login error:", error);

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
