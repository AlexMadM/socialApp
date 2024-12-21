import {createInstance, SecondParameter} from "@/app/api/api-instanse";
import {useQuery} from "@tanstack/react-query";

export const profileControllerGetProfile = (
    username: string,
    options?: SecondParameter<typeof createInstance>,
) => {
    return createInstance<UserProfile>(
        { url: `/v1/users/${username}`, method: "get" },
        options,
    );
};

export const useGetProfile = (username: string) => {
    return useQuery<UserProfile>({
        queryKey: ["profile", username],
        queryFn: () => profileControllerGetProfile(username),
    });
};

export const profileControllerGetFollowers = (
    username: string,
    options?: SecondParameter<typeof createInstance>,
) => {
    return createInstance<Response>(
        { url: `/v1/users/${username}/followers`, method: "get" },
        options,
    );
};

export const useGetFollowers = (username: string) => {
    return useQuery<Response>({
        queryKey: ["followers", username],
        queryFn: () => profileControllerGetFollowers(username),
    });
};
