'use client'
import { redirect } from "next/navigation";
import Navbar from "./Navbar";
import SessionProvider from "./SessionProvider";
import {useAccountMe} from "@/app/(auth)/auth-api/use-auth-autorization";
import MenuBar from "@/app/(main)/MenuBar";

export default  function Layout({
                                         children,
                                     }: {
    children: React.ReactNode;
}) {
    const {data}= useAccountMe()

    if (!data) redirect("/login");

    return (
        <SessionProvider value={data}>
            <div className="flex min-h-screen flex-col">
                <Navbar/>
                <div className="mx-auto flex w-full max-w-7xl grow gap-5 p-5">
                    <MenuBar
                        className="sticky top-[5.25rem] hidden h-fit flex-none space-y-3 rounded-2xl bg-card px-3 py-5 shadow-sm sm:block lg:px-5 xl:w-80"/>
                    {children}
                </div>
                <MenuBar className="sticky bottom-0 flex w-full justify-center gap-5 border-t bg-card p-3 sm:hidden"/>
            </div>
        </SessionProvider>
    );
}