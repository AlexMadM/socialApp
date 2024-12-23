import {
    createPostDescription,
    getAllPosts, getPostByUserName,
    uploadFileForCreatePost,
    uploadFileForPost
} from "@/app/api/api-post/endpoints-posts";
import {
    CreatePostDto, GetAllPostsArgs,
    GetAllPostsResponse, PostByUserResponse,
    UploadFileForCreatePostResponse,
    UploadFilePayload,
    UploadFileResponse
} from "@/app/api/api-post/types-posts";
import {QueryClient, useInfiniteQuery, useMutation, useQuery} from "@tanstack/react-query";
import {createInstance} from "@/app/api/api-instanse";
export const queryClient = new QueryClient();


// export const useGetAllPosts = (queryParams: any) => {
//     return useQuery<GetAllPostsResponse>({
//         queryKey: ["postsa", queryParams],
//         queryFn: () => getAllPosts(queryParams),
//     });
// };

export const useGetAllPosts = (queryParams: GetAllPostsArgs) => {
    return useInfiniteQuery({
        queryKey: ["post-feed", "for-you", queryParams],
        queryFn: ({ pageParam }) => {
            // Объединяем initial queryParams с pageParam для endCursorPostId
            return getAllPosts({
                ...queryParams,
                endCursorPostId: pageParam ?? queryParams.endCursorPostId,
                // pageSize:pageParam ?? 4
            });
        },
        initialPageParam: queryParams.endCursorPostId ?? null,
        getNextPageParam: (lastPage) => {
            // Возвращаем ID последнего поста
            if (lastPage?.items?.length) {
                const lastItem = lastPage.items[lastPage.items.length - 1];
                return lastItem.id; // Возвращаем ID последнего поста
            }
            return null; // Если постов больше нет
        }
    });
};









export const useGetPostByUserName = (userName: string) => {
    return useQuery<PostByUserResponse>({
        queryKey: ["post-feed", 'for-you'],
        queryFn: () => getPostByUserName(userName),
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