import {
    createPostDescription,
    getAllPosts,
    uploadFileForCreatePost,
    uploadFileForPost
} from "@/app/api/api-post/endpoints-posts";
import {
    CreatePostDto,
    GetAllPostsResponse,
    UploadFileForCreatePostResponse,
    UploadFilePayload,
    UploadFileResponse
} from "@/app/api/api-post/types-posts";
import {QueryClient, useMutation, useQuery} from "@tanstack/react-query";
import {createInstance} from "@/app/api/api-instanse";
export const queryClient = new QueryClient();


export const useGetAllPosts = (queryParams: string) => {
    return useQuery<GetAllPostsResponse>({
        queryKey: ["postsa", queryParams],
        queryFn: () => getAllPosts(queryParams),
    });
};


export const useUploadFile = () => {
    return useMutation<UploadFileResponse, Error, UploadFilePayload>({
        mutationFn: uploadFileForPost,
        onSuccess: (data) => {
            // Обработка успешной загрузки
            console.log("Upload successful:", data);
            // Можно инвалидировать связанные запросы
            queryClient.invalidateQueries({ queryKey: ["profile"] });
        },
        onError: (error) => {
            console.error("Upload failed:", error);
        },
    });
};

export const useUploadFileForCreatePost = () => {
    return useMutation<UploadFileForCreatePostResponse, Error, UploadFilePayload>(
        {
            mutationFn: uploadFileForCreatePost,
            onSuccess: (data) => {
                console.log("Upload successful:", data);
                // Можно добавить обновление кэша или другие действ
            },
            onError: (error) => {
                console.error("Upload failed:", error);
            },
        },
    );
};



export const useCreatePostDescription = () => {
    return useMutation<void, Error, CreatePostDto>({
        mutationFn: createPostDescription,
    });
};