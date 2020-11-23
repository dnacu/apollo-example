import { createProduct, getProducts } from "./db";
import { Product, ProductInput } from "./models/Product";

export default {
  Query: {
    products: (
      _parent: unknown,
      args: { offset: number; limit: number }
    ): Product[] => {
      return getProducts(args.offset, args.limit);
    },
  },
  Mutation: {
    addProduct: (
      _parent: unknown,
      args: { product: ProductInput }
    ): Product => {
      return createProduct(args.product);
    },
  },
};
