import { users, cartItems, type User, type InsertUser, type CartItem, type InsertCartItem } from "@shared/schema";

// modify the interface with any CRUD methods
// you might need

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  getCartItems(sessionId: string): Promise<CartItem[]>;
  addToCart(item: InsertCartItem): Promise<CartItem>;
  updateCartItemQuantity(id: number, quantity: number): Promise<CartItem | undefined>;
  removeFromCart(id: number): Promise<boolean>;
  clearCart(sessionId: string): Promise<void>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private cartItems: Map<number, CartItem>;
  private currentUserId: number;
  private currentCartId: number;

  constructor() {
    this.users = new Map();
    this.cartItems = new Map();
    this.currentUserId = 1;
    this.currentCartId = 1;
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentUserId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async getCartItems(sessionId: string): Promise<CartItem[]> {
    return Array.from(this.cartItems.values()).filter(
      (item) => item.sessionId === sessionId,
    );
  }

  async addToCart(insertItem: InsertCartItem): Promise<CartItem> {
    // Check if item with same product and variant already exists
    const existingItem = Array.from(this.cartItems.values()).find(
      (item) => 
        item.sessionId === insertItem.sessionId &&
        item.productId === insertItem.productId &&
        item.productVariant === insertItem.productVariant
    );

    if (existingItem) {
      // Update quantity of existing item
      const updatedItem: CartItem = {
        ...existingItem,
        quantity: existingItem.quantity + (insertItem.quantity || 1),
      };
      this.cartItems.set(existingItem.id, updatedItem);
      return updatedItem;
    } else {
      // Create new cart item
      const id = this.currentCartId++;
      const cartItem: CartItem = {
        ...insertItem,
        id,
        quantity: insertItem.quantity || 1,
        sessionId: insertItem.sessionId || null,
        createdAt: new Date(),
      };
      this.cartItems.set(id, cartItem);
      return cartItem;
    }
  }

  async updateCartItemQuantity(id: number, quantity: number): Promise<CartItem | undefined> {
    const item = this.cartItems.get(id);
    if (!item) return undefined;

    if (quantity <= 0) {
      this.cartItems.delete(id);
      return undefined;
    }

    const updatedItem: CartItem = { ...item, quantity };
    this.cartItems.set(id, updatedItem);
    return updatedItem;
  }

  async removeFromCart(id: number): Promise<boolean> {
    return this.cartItems.delete(id);
  }

  async clearCart(sessionId: string): Promise<void> {
    const itemsToRemove = Array.from(this.cartItems.entries()).filter(
      ([_, item]) => item.sessionId === sessionId,
    );
    itemsToRemove.forEach(([id]) => this.cartItems.delete(id));
  }
}

export const storage = new MemStorage();
