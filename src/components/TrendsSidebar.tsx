'use client';
import { formatNumber } from "@/lib/utils";
import { Loader2 } from "lucide-react";
import { unstable_cache } from "next/cache";
import Link from "next/link";
import { Suspense } from "react";
import UserAvatar from "./UserAvatar";
import { Button } from "./ui/button";
import { useSession } from "@/app/(main)/SessionProvider";
import {useGetFollowers, useGetProfile} from "@/app/api/api-me/api-me";


export default function TrendsSidebar() {
  return (
    <div className="sticky top-[5.25rem] hidden h-fit w-72 flex-none space-y-5 md:block lg:w-80">
      <Suspense fallback={<Loader2 className="mx-auto animate-spin" />}>
        <WhoToFollow />
        {/*<TrendingTopics />*/}
      </Suspense>
    </div>
  );
}

function WhoToFollow() {
    const { userName,userId } = useSession();

    const {data:user}=useGetFollowers(userName);

  return (
    <div className="space-y-5 rounded-2xl bg-card p-5 shadow-sm">
      <div className="text-xl font-bold">Who to follow</div>

        <div key={user?.items.id} className="flex items-center justify-between gap-3">
          <Link
            href={`/users/${user?.items.userName}`}
            className="flex items-center gap-3"
          >
            {/*<UserAvatar avatarUrl={user?.items?.avatars[0].url} className="flex-none" />*/}
            <div>
              <p className="line-clamp-1 break-all font-semibold hover:underline">
                {user?.items.userName}
              </p>
              <p className="line-clamp-1 break-all text-muted-foreground">
                @{user?.items.userName}
              </p>
            </div>
          </Link>
          <Button>Follow</Button>
        </div>

    </div>
  );
}



// async function TrendingTopics() {
//
//   return (
//     <div className="space-y-5 rounded-2xl bg-card p-5 shadow-sm">
//       <div className="text-xl font-bold">Trending topics</div>
//       {trendingTopics.map(({ hashtag, count }) => {
//         const title = hashtag.split("#")[1];
//
//         return (
//           <Link key={title} href={`/hashtag/${title}`} className="block">
//             <p
//               className="line-clamp-1 break-all font-semibold hover:underline"
//               title={hashtag}
//             >
//               {hashtag}
//             </p>
//             <p className="text-sm text-muted-foreground">
//               {formatNumber(count)} {count === 1 ? "post" : "posts"}
//             </p>
//           </Link>
//         );
//       })}
//     </div>
//   );
// }