import { Request, Response } from 'express';
import { Order } from '../../models/Order';

export const listOrders = async (req: Request, res: Response) => {
  try {
    const orders = await Order.find()
      .sort({ createdAt: 1 }) // 1: ascending order, -1:descending order
      .populate('products.product');

    res.json(orders);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};
