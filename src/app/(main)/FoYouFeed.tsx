'use client'
import {useGetAllPosts, useGetPostByUserName} from "@/app/api/api-post/use-posts";
import {useSession} from "@/app/(main)/SessionProvider";
import Post from "@/components/posts/Post";
import InfiniteScrollContainer from "@/components/InfiniteScrollContainer";

export default function FoYouFeed() {

    const params = {

        pageSize: 5,
        sortBy: "id",
        sortDirection: "asc",
        endCursorPostId:null
    };
    const { userName,userId } = useSession();
    const {data:postss}=useGetPostByUserName(userName);

    // const {
    //     data,
    //     fetchNextPage,
    //     hasNextPage,
    //     isFetching,
    //     isFetchingNextPage,
    //     status,
    // } = useGetAllPosts(params);

	// const queryParams = new URLSearchParams(params).toString();
    console.log('SDFGFDHGFH',postss);
    // const {data:postsAll}=useGetAllPosts(params);


    return (
        <div className="flex flex-col gap-3 max-w-[972px]  ">
            {postss?.items.map((post) => (
                <Post key={post.id} post={post} />
            ))}
        </div>
    );
}
