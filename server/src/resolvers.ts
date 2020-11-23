import { createProduct, getProducts } from "./db";
import { Product, ProductInput } from "./models/Product";

export default {
  Query: {
    products: (): Product[] => {
      return getProducts();
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
