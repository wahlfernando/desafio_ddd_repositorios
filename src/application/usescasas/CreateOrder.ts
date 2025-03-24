import { Order } from "../../domain/entities/Order";
import { OrderRepositoryInterface } from "../../domain/repositories/OrderRepositoryInterface";

export class CreateOrder {
  constructor(private readonly orderRepository: OrderRepositoryInterface) {}

  execute(orderData: Omit<Order, "id">): Order {
    const order = new Order(
      Date.now(),
      orderData.customerName,
      orderData.total
    );
    return this.orderRepository.create(order);
  }
}
