import { Order } from "../../domain/entities/Order";
import { OrderRepositoryInterface } from "../../domain/repositories/OrderRepositoryInterface";

class OrderRepository implements OrderRepositoryInterface {
  private orders: Order[] = [];

  create(order: Order): Order {
    this.orders.push(order);
    return order;
  }

  findById(id: number): Order | undefined {
    return this.orders.find((order) => order.id === id);
  }

  findAll(): Order[] {
    return this.orders;
  }

  update(id: number, order: Partial<Order>): Order | undefined {
    const index = this.orders.findIndex((o) => o.id === id);
    if (index === -1) return undefined;

    this.orders[index] = { ...this.orders[index], ...order };
    return this.orders[index];
  }

  delete(id: number): boolean {
    const initialLength = this.orders.length;
    this.orders = this.orders.filter((order) => order.id !== id);
    return this.orders.length < initialLength;
  }
}

// Exportando a classe
export { OrderRepository, OrderRepositoryInterface, Order };
