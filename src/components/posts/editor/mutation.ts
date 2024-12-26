import { useToast } from "@/components/ui/use-toast";
import {
    InfiniteData,
    QueryFilters, Updater,
    useMutation,
    useQueryClient,
} from "@tanstack/react-query";

import {createPostDescription} from "@/app/api/api-post/endpoints-posts";
import {CreatePostDto, PostByUserResponse} from "@/app/api/api-post/types-posts";


export function useSubmitPostMutation() {
    const { toast } = useToast();

    const queryClient = useQueryClient();

    const mutation = useMutation({
        mutationFn: createPostDescription,
        onSuccess: async (newPost) => {
            const queryFilter: QueryFilters = { queryKey: ["post-feed", "for-you"] };

            await queryClient.cancelQueries(queryFilter);

            queryClient.setQueriesData< PostByUserResponse>(
                queryFilter,
                (oldData) => {
                    const firstPage= oldData?.items;

                    if (firstPage) {
                        return {

                            items: [newPost, ...firstPage],
                        }



                    }
                },
            );

            queryClient.invalidateQueries({
                queryKey: queryFilter.queryKey,
                predicate(query) {
                    return !query.state.data;
                },
            });

            toast({
                description: "Post created",
            });
        },
        onError(error) {
            console.error(error);
            toast({
                variant: "destructive",
                description: "Failed to post. Please try again.",
            });
        },
    });

    return mutation;
}