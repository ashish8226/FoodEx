export class Menu {
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  heartCounts: number;
  liked_by_id: [string];
  timestamp: string;

  constructor(name: string, description: string, price: number, imageUrl: string, heartCounts: number, liked_by_id: [string], timestamp: string) {
    this.name = name;
    this.description = description;
    this.price = price;
    this.imageUrl = imageUrl;
    this.heartCounts = heartCounts;
    this.liked_by_id = liked_by_id;
    this.timestamp = timestamp;
  }
}
