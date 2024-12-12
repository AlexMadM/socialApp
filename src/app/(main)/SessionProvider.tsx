"use client";

import React, { createContext, useContext } from "react";


const SessionContext = createContext<MeResponse | null>(null);

export default function SessionProvider({
                                            children,
                                            value,
                                        }: React.PropsWithChildren<{ value: MeResponse }>) {
    return (
        <SessionContext.Provider value={value}>{children}</SessionContext.Provider>
    );
}

export function useSession() {
    const context = useContext(SessionContext);
    if (!context) {
        throw new Error("useSession must be used within a SessionProvider");
    }
    return context;
}