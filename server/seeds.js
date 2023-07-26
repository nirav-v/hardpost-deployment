const sequelize = require("./config/database");
const { User, Cart, CartItem, Order, Item, OrderItem } = require("./models");

const userData = [
  {
    username: "User 1",
    email: "user1@example.com",
    password: "password1",
  },
  {
    username: "User 2",
    email: "user2@example.com",
    password: "password2",
  },
  {
    username: "User 3",
    email: "user3@example.com",
    password: "password3",
  },
];

const seedDB = async () => {
  await sequelize.sync({ force: true });

  for (let user of userData) {
    const newUser = await User.create(user);
    const cart = await newUser.getCart();
    if (!cart) await newUser.createCart();
  }

  process.exit(0);
};

seedDB();
