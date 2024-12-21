'use client'
import {useGetAllPosts, useGetPostByUserName} from "@/app/api/api-post/use-posts";
import {useSession} from "@/app/(main)/SessionProvider";
import Post from "@/components/posts/Post";

export default function FoYouFeed() {
    const { userName,userId } = useSession();
    const {data:posts}=useGetPostByUserName(userName);


    console.log(posts);

    return (
        <div className="flex flex-col gap-3 max-w-[972px]  ">
            {posts?.items.map((post) => (
                <Post key={post.id} post={post} />
            ))}
        </div>
    );
}
