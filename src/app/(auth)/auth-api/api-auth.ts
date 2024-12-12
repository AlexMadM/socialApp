import {BodyType, createInstance, SecondParameter} from "@/app/api/api-instanse";

export const authControllerLogin = (
    signInBodyDto: BodyType<UserLoginRequest>,
    options?: SecondParameter<typeof createInstance>,
) => {
    return createInstance<UserLoginResponse>(
        {
            url: "/v1/auth/login",
            method: "post",
            headers: { "Content-Type": "application/json" },
            data: signInBodyDto,
        },
        options,
    );
};


export const authControllerSignOut = (
    options?: SecondParameter<typeof createInstance>,
) => {
    return createInstance<void>(
        { url: "/v1/auth/logout", method: "post" },
        options,
    );
};

export const authControllerMe = (
    options?: SecondParameter<typeof createInstance>,
) => {
    return createInstance<MeResponse>(
        {
            url: "/v1/auth/me",
            method: "get",
            headers: { "Content-Type": "application/json" },
        },
        options,
    );
};