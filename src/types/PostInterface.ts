export interface PostInterface {
    by?: string,
    timestamp?: number,
    token?: string,
    content: string,
    images?: string[],
    comments?: string[],
    likes?: string[],
}