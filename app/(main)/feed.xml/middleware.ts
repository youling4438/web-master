import { getLatestBlogPosts } from '~/sanity/queries'
export const middleware = async () => {
    // Fetch any necessary data here 
    return await getLatestBlogPosts({ limit: 999 });
};