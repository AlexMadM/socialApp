export interface GetAllPostsResponse {
    totalCount: number;
    pageSize: number;
    items: Post[];
    totalUsers: number;
}

export interface Post {
    id: number;
    userName: string;
    description: string;
    location?: string | null;
    images: Image[];
    createdAt: string;
    updatedAt: string;
    avatarOwner?: string;
    ownerId: number;
    owner: Owner;
    likesCount: number;
    isLiked: boolean;
}
export interface Owner {
    firstName: string;
    lastName: string;
}

export interface ChildMetadata {
    uploadId: string;
}
export type CreatePostArgs = {
    childrenMetadata?: ChildrenMetadatum[];
    description: string;
};

export type ChildrenMetadatum = {
    uploadId: string;
};

export interface CreatePostDto {
    description: string;
    childrenMetadata: ChildMetadata[];
}

export interface Image {
    url: string;
    width: number;
    height: number;
    fileSize: number;
    createdAt: string;
    uploadId: string;
}

export interface UploadFileResponse {
    avatars: Avatar[];
}
interface Avatar {
    url: string;
    width: number;
    height: number;
    fileSize: number;
    createdAt: string;
}

export type UploadFilePayload = {
    file: File;
};

export type UploadFileForCreatePostResponse = {
    images: Image[];
};