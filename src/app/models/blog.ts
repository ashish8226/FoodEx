export interface Blog {
  author_name: string,
  author_id: string,
  title: string,
  description: string,
  likes: number,
  liked_by_id: [string],
  timestamp: string
}
