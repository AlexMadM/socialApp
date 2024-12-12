"use client";
import { redirect } from "next/navigation";
import {useAccountMe} from "@/app/(auth)/auth-api/use-auth-autorization";

export default  function Layout({
                                         children,
                                     }: {
    children: React.ReactNode;
}) {
    // const { user } = await validateRequest();
    const {data}= useAccountMe()

    if (data?.userName) redirect("/");

    return <>{children}</>;
}