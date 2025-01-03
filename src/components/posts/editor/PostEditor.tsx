"use client";


import { Button } from "@/components/ui/button";
import UserAvatar from "@/components/UserAvatar";
import Placeholder from "@tiptap/extension-placeholder";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

import "./style.css";
import {useCreatePostDescription} from "@/app/api/api-post/use-posts";
import {useSubmitPostMutation} from "@/components/posts/editor/mutation";

export default function PostEditor() {
    const {mutate}=useCreatePostDescription()
    const mutation=useSubmitPostMutation()

    const editor = useEditor({
        extensions: [
            StarterKit.configure({
                bold: false,
                italic: false,
            }),
            Placeholder.configure({
                placeholder: "What's crack-a-lackin'?",
            }),
        ],
    });

    const input =
        editor?.getText({
            blockSeparator: "\n",
        }) || "";

     function onSubmit() {

       mutation.mutate({
            description: input,
            childrenMetadata: [{ uploadId:'34' }],
        });
        editor?.commands.clearContent();
    }

    return (
        <div className="flex flex-col gap-5 rounded-2xl bg-card p-5 shadow-sm">
            <div className="flex gap-5">
                <UserAvatar avatarUrl={null} className="hidden sm:inline" />
                <EditorContent
                    editor={editor}
                    className="max-h-[20rem] w-full overflow-y-auto rounded-2xl bg-background px-5 py-3"
                />
            </div>
            <div className="flex justify-end">
                <Button
                    onClick={onSubmit}
                    disabled={!input.trim()}
                    className="min-w-20"
                >
                    Post
                </Button>
            </div>
        </div>
    );
}