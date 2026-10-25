export interface PostMeta {
    title: string;
    date: string;
    summary: string;
}
export declare function parseFrontmatter(raw: string): {
    meta: PostMeta;
    body: string;
};
export declare const slugFromPath: (path: string) => string;
