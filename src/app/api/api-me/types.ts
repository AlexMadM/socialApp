interface Avatar {
    url: string;
    width: number;
    height: number;
    fileSize: number;
    createdAt: string;
}

interface UserProfile {
    id: number;
    userName: string;
    firstName: string;
    lastName: string;
    city: string;
    country: string;
    region: string;
    dateOfBirth: string; // или Date если вы парсите дату
    aboutMe: string;
    avatars: Avatar[];
    isFollowing: boolean;
    isFollowedBy: boolean;
    followingCount: number;
    followersCount: number;
    publicationsCount: number;
}

interface Avatar {
    url: string;
    width: number;
    height: number;
    fileSize: number;
    createdAt: string;
}

interface Item {
    id: number;
    userId: number;
    userName: string;
    createdAt: string;
    avatars: Avatar[];
    isFollowing: boolean;
    isFollowedBy: boolean;
}

interface Response {
    totalCount: number;
    pagesCount: number;
    page: number;
    pageSize: number;
    prevCursor: number;
    nextCursor: number;
    items: Item;
}