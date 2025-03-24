import { Order } from "../entities/Order";

export interface OrderRepositoryInterface {
  create(order: Order): Order;
  findById(id: number): Order | undefined;
  findAll(): Order[];
  update(id: number, order: Partial<Order>): Order | undefined;
  delete(id: number): boolean;
}
