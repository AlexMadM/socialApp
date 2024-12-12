'use client'

import {useRouter} from "next/navigation";
import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query";
import {authControllerLogin, authControllerMe, authControllerSignOut} from "@/app/(auth)/auth-api/api-auth";



export function useLoginForm() {
    const router = useRouter();


    const signInMutation = useMutation({
        mutationFn: authControllerLogin,
        onSuccess(data) {
            console.log("Успешный вход:", data);
            localStorage.setItem("accessToken", data.accessToken);
            const payload = data.accessToken.split(".")[1];
            const id = JSON.parse(atob(payload)).userId;
            router.push(`/`);
        },
    });


    return {signIn:signInMutation.mutate}
}


const accountKey = ["me"];
export function useAccountMe() {
    return useQuery({
        queryKey: accountKey,
        queryFn: authControllerMe,
        retry: 0,
        // enabled: !!localStorage.getItem("accessToken"),
    });
}


export function useSignOut() {
    const router = useRouter();
    const queryClient = useQueryClient();

    const singOutMutation = useMutation({
        mutationFn: authControllerSignOut,
        async onSuccess() {
            router.push("/login");
            localStorage.removeItem("accessToken");
            queryClient.clear();

        },
    });

    return {
        singOut: singOutMutation.mutate,
    };
}




