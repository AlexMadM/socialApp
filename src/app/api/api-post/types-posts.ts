export interface GetAllPostsResponse {
    totalCount: number;
    pageSize: number;
    items: PostType[];
    totalUsers: number;
}

export interface PostType {
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




export type ServerResponse = {
    id: number;
    userName: string;
    description: string;
    location: string;
    images: Image[];
    createdAt: string; // ISO 8601 date string
    updatedAt: string; // ISO 8601 date string
    ownerId: number;
    avatarOwner: string;
    owner: Owner;
    likesCount: number;
    isLiked: boolean;
    avatarWhoLikes: boolean;
};

type Item = {
    id: number;
    userName: string;
    description: string;
    location: string;
    images: Image[];
    createdAt: string; // ISO 8601 date string
    updatedAt: string; // ISO 8601 date string
    ownerId: number;
    avatarOwner: string;
    owner: Owner;
    likesCount: number;
    isLiked: boolean;
    avatarWhoLikes: boolean;
};

export type PostByUserResponse = {
    pageSize: number;
    totalCount: number;
    notReadCount: number;
    items: Item[];
};