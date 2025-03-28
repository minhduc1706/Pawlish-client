export interface Blog {
  _id: string;
    title: string;
    content: string;
    tag_id:string;
    imgUrl: string;
    author_id: string;
    no_comments: number;
    createdAt?: string;
    updatedAt?: string;
}
