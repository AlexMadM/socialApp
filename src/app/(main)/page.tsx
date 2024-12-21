

import PostEditor from "@/components/posts/editor/PostEditor";
import { useGetAllPosts } from "@/app/api/api-post/use-posts";
import Post from "@/components/posts/Post";
import TrendsSidebar from "@/components/TrendsSidebar";
import FoYouFeed from "@/app/(main)/FoYouFeed";
export default function Home() {

//     const params = {
// 		pageSize: "4",
// 		sortBy: "createdAt",
// 		sortDirection: "asc",
// 	};
// 	const queryParams = new URLSearchParams(params).toString();
// 	const { data: posts } = useGetAllPosts(queryParams);
// console.log('dsafasfdsdfas',posts)
    return (
        <main className="flex w-full min-w-0 gap-5">
            <div className="w-full min-w-0 space-y-5">
                <PostEditor/>
                <FoYouFeed/>
            </div>
            <TrendsSidebar/>
        </main>
    );
}