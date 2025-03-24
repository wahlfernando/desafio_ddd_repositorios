import { beforeEach, describe, it } from "node:test";
import { Order, OrderRepository } from "../infra/repositories/OrderRepository";
describe("OrderRepository", () => {
  let orderRepository: OrderRepository;

  beforeEach(() => {
    orderRepository = new OrderRepository();
  });

  it("deve criar um novo pedido", () => {
    const order = new Order(1, "Cliente Teste", 100);
    const createdOrder = orderRepository.create(order);
    expect(createdOrder).toEqual(order);
  });

  it("deve encontrar um pedido pelo ID", () => {
    const order = new Order(2, "Outro Cliente", 200);
    orderRepository.create(order);
    const foundOrder = orderRepository.findById(2);
    expect(foundOrder).toEqual(order);
  });

  it("deve atualizar um pedido", () => {
    const order = new Order(3, "Cliente Atualizar", 300);
    orderRepository.create(order);
    const updatedOrder = orderRepository.update(3, { total: 400 });
    expect(updatedOrder?.total).toBe(400);
  });

  it("deve excluir um pedido", () => {
    const order = new Order(4, "Cliente Deletar", 500);
    orderRepository.create(order);
    const deleted = orderRepository.delete(4);
    expect(deleted).toBe(true);
    expect(orderRepository.findById(4)).toBeUndefined();
  });
});
