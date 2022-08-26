const asyncHandler = require("express-async-handler");

const UserAddressModel = require("../models/UserAddressModel");
const UserPaymentModel = require("../models/UserPaymentModel");
const OrderModel = require("../models/OrderModel");
const OrderItemModel = require("../models/OrderItemModel");

// @desc    Create a new order
// @route   POST /api/orders/
// @access  Private
const createOrder = asyncHandler(async (req, res) => {
  const { userId, cartItems, paymentInfo, addressInfo } = req.body;
  const { address, address2, city, state, zipCode } = addressInfo;
  const { cardNumber, ccv, expirationDate } = paymentInfo;

  if (!userId) {
    res.status(400);
    throw new Error("userId is missing");
  } else if (cartItems.length === 0) {
    res.status(400);
    throw new Error("No items in the cart");
  }

  const userAddress = await UserAddressModel.create(
    userId,
    address,
    address2,
    city,
    state,
    zipCode
  );

  const userPayment = await UserPaymentModel.create(
    userId,
    cardNumber,
    ccv,
    expirationDate
  );

  const paymentId = userPayment.rows[0].id;
  const addressId = userAddress.rows[0].id;

  const order = await OrderModel.create(userId, paymentId, addressId);
  const orderId = order.rows[0].id;

  cartItems.forEach((item) => {
    OrderItemModel.create(
      orderId,
      item.product_id,
      item.quantity,
      item.attributes
    );
  });

  res.sendStatus(200);
});

// @desc    Gets all orders for a user
// @route   POST /api/orders/:userId"
// @access  Private
const getOrders = asyncHandler(async (req, res) => {
  const { userId } = req.params;

  const foundOrders = await OrderModel.findAll(userId);

  if (foundOrders.rows[0]) {
    const groupedOrders = await foundOrders.rows.map(async (order) => {
      let newOrder = {
        id: order.id,
        status: order.status,
        createdAt: order.created_at,
      };

      const orderItems = await OrderItemModel.findAll(order.id);

      if (orderItems) {
        newOrder.items = await orderItems.rows;
        return newOrder;
      }
    });

    if (groupedOrders) {
      const result = await Promise.all(groupedOrders);
      res.status(200).json(result);
    }
  } else {
    res.status(200).json(null);
  }
});

module.exports = {
  createOrder,
  getOrders,
};
