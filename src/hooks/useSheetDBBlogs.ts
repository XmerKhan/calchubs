import { useQuery } from '@tanstack/react-query';

const SHEETDB_API = 'https://sheetdb.io/api/v1/h4ujlsyujrwiq';

export interface SheetDBBlogPost {
  title: string;
  slug: string;
  description: string;
  content: string;
  image: string;
  date: string;
}

const fetchBlogs = async (): Promise<SheetDBBlogPost[]> => {
  const res = await fetch(SHEETDB_API);
  if (!res.ok) throw new Error('Failed to fetch blog posts');
  const data = await res.json();
  // Sort by date descending
  return data.sort((a: SheetDBBlogPost, b: SheetDBBlogPost) =>
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );
};

export const useSheetDBBlogs = () => {
  return useQuery({
    queryKey: ['sheetdb-blogs'],
    queryFn: fetchBlogs,
    staleTime: 5 * 60 * 1000, // 5 minutes cache
  });
};

export const useSheetDBBlogPost = (slug: string | undefined) => {
  const { data: posts, ...rest } = useSheetDBBlogs();
  const post = posts?.find((p) => p.slug === slug);
  return { post, posts, ...rest };
};
