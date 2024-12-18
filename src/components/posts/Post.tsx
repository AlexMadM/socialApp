
import Link from "next/link";
import UserAvatar from "../UserAvatar";
import { PostType } from "../../app/api/api-post/types-posts";

interface PostProps {
    post?: PostType;
}


export default function Post({ post }: PostProps) {
  return (
    <article className="space-y-3 rounded-2xl bg-card p-5 shadow-sm">
      <div className="flex flex-wrap gap-3">
        <Link href={`/users/${post?.userName}`}>
          <UserAvatar avatarUrl={post?.avatarOwner} />
        </Link>
        <div>
          <Link
            href={`/users/${post?.userName}`}
            className="block font-medium hover:underline"
          >
            {post?.userName}
          </Link>
          <Link
            href={`/posts/${post?.id}`}
            className="block text-sm text-muted-foreground hover:underline"
          >
            {post?.createdAt}
          </Link>
        </div>
      </div>
      <div className="whitespace-pre-line break-words">{post?.description}</div>
    </article>
  );
}