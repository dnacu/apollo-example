import { createProduct, getProductByID, getProducts } from "./db";
import { Product, ProductInput } from "./models/Product";

export default {
  Query: {
    products: (
      _parent: unknown,
      args: { offset: number; limit: number }
    ): Product[] => {
      return getProducts(args.offset, args.limit);
    },
    product: (_parent: unknown, args: { id: string }): Product => {
      return getProductByID(args.id);
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
