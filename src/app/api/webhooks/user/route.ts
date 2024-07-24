import { NextRequest } from "next/server";
import { headers } from "next/headers";
import { JsonValue } from "@prisma/client/runtime/react-native.js";

import { User } from "@prisma/client";
import prisma from "../../../../../lib/prisma";
import { Prisma } from "@prisma/client/extension";
const handler = async (req: NextRequest) => {
  const payload = await req.json();
  const headerlist = headers();
};
const check: JsonValue = {
  abc: "abc",
};

const createUser = async (data: User) => {
  await prisma.user.create({ data });
  console.log(typeof data);
  console.log(data);
};
createUser({
  email: "example@example.com",
  name: "John Doe",
  attribute: {
    abc: "abc",
  },
});

export async function GET(request: Request) {
  return Response.json({});
}
