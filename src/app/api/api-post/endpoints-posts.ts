import {createInstance, SecondParameter} from "@/app/api/api-instanse";
import {
    CreatePostArgs, GetAllPostsArgs,
    GetAllPostsResponse, PostByUserResponse, ServerResponse,
    UploadFileForCreatePostResponse,
    UploadFileResponse
} from "@/app/api/api-post/types-posts";

export const getAllPosts = (
    queryParams: GetAllPostsArgs,
    options?: SecondParameter<typeof createInstance>,
) => {
    const { endCursorPostId, ...params } = queryParams ?? {}
    console.log(params);
    return createInstance<GetAllPostsResponse>(
        { url: `/v1/public-posts/all/?${endCursorPostId}`,params, method: "get" },
        options,
    );

};

export const uploadFileForPost = (
    file: { file: File },
    options?: SecondParameter<typeof createInstance>,
) => {
    const formData = new FormData();
    formData.append("file", file.file);
    return createInstance<UploadFileResponse>(
        {
            url: "v1/users/profile/avatar",
            method: "post",
            headers: { "Content-Type": "'multipart/form-data" },
            data: formData,
        },
        options,
    );
};

export const uploadFileForCreatePost = (
    file: { file: File },
    options?: SecondParameter<typeof createInstance>,
) => {
    const formData = new FormData();
    formData.append("file", file.file);
    return createInstance<UploadFileForCreatePostResponse>(
        {
            url: "/v1/posts/image",
            method: "post",
            headers: { "Content-Type": "'multipart/form-data" },
            data: formData,
        },
        options,
    );
};

export const createPostDescription = (data: CreatePostArgs) => {
    return createInstance<void>({
        url: "/v1/posts",
        method: "post",
        data: {
            description: data.description,
            childrenMetadata: data.childrenMetadata,
        },
    });
};

export const getPostByUserName = (userName: string, options?: SecondParameter<typeof createInstance>) => {
    return createInstance<PostByUserResponse>(
        { url: `/v1/posts/${userName}`, method: "get" },
        options,
    );
};