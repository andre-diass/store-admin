import Home from "@/components/templates/Home";
import { getServerSession } from "next-auth/next";
import { authOptions } from "./api/auth/[...nextauth]";

export default function Index() {
  return <Home />;
}

export async function getServerSideProps(context: any) {
  const session = await getServerSession(context.req, context.res, authOptions);

  if (session) return { redirect: { destination: "/app/" } };

  return { props: {} };
}
