'use client';

import PostEditor from "@/components/posts/editor/PostEditor";
import { useGetAllPosts } from "@/app/api/api-post/use-posts";
import Post from "@/components/posts/Post";
export default function Home() {

    const params = {
		pageSize: "4",
		sortBy: "createdAt",
		sortDirection: "asc",
	};
	const queryParams = new URLSearchParams(params).toString();
	const { data: posts } = useGetAllPosts(queryParams);
console.log('dsafasfdsdfas',posts)
    return (
        <main className="w-full min-w-0">
      <div className="w-full min-w-0 space-y-5">
                <PostEditor />
                {posts?.items.map((post) => (
          <Post key={post.id} post={post} /> ))}
            </div>
        </main>
    );
}