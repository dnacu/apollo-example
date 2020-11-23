import { Product, ProductInput } from "./models/Product";
import { generateRandomID } from "./utils/generateRandomID";

let collections = {
  products: [
    {
      id: "pet_wqf0rv0im6",
      title: "댕댕이장난감100",
      price: 10000,
    },
    {
      id: "pet_wqf0rv0im2",
      title: "댕댕이장난감2",
      price: 10000,
    },
    {
      id: "pet_wqf0rv0im3",
      title: "댕댕이장난감3",
      price: 10000,
    },
    {
      id: "pet_wqf0rv0im4",
      title: "댕댕이장난감4",
      price: 10000,
    },
    {
      id: "pet_wqf0rv0im5",
      title: "댕댕이장난감5",
      price: 10000,
    },
    {
      id: "pet_wqf0rv0i24",
      title: "댕댕이장난감6",
      price: 10000,
    },
    {
      id: "pet_wqf0rv0im7",
      title: "댕댕이장난감7",
      price: 10000,
    },
    {
      id: "pet_wqf0rv0im8",
      title: "댕댕이장난감8",
      price: 10000,
    },
    {
      id: "pet_wqf0rv0im9",
      title: "댕댕이장난감9",
      price: 10000,
    },
    {
      id: "pet_wqf0rv0i10",
      title: "댕댕이장난감10",
      price: 10000,
    },
    {
      id: "pet_wqf0rv0i11",
      title: "댕댕이장난감11",
      price: 10000,
    },
    {
      id: "pet_wqf0rv0i12",
      title: "댕댕이장난감12",
      price: 10000,
    },
    {
      id: "pet_wqf0rv0i13",
      title: "댕댕이장난감13",
      price: 10000,
    },
    {
      id: "pet_wqf0rv0i14",
      title: "댕댕이장난감14",
      price: 10000,
    },
    {
      id: "pet_wqf0rv0i15",
      title: "댕댕이장난감15",
      price: 10000,
    },
    {
      id: "pet_wqf0rv0i16",
      title: "댕댕이장난감16",
      price: 10000,
    },
    {
      id: "pet_wqf0rv0i17",
      title: "댕댕이장난감17",
      price: 10000,
    },
    {
      id: "pet_wqf0rv0i18",
      title: "댕댕이장난감18",
      price: 10000,
    },
    {
      id: "pet_wqf0rv0i19",
      title: "댕댕이장난감19",
      price: 10000,
    },
    {
      id: "pet_wqf0rv0i20",
      title: "댕댕이장난감20",
      price: 10000,
    },
    {
      id: "pet_wqf0rv0i21",
      title: "댕댕이장난감21",
      price: 10000,
    },
  ] as Product[],
};

export const getProducts = () => {
  return collections.products;
};

export const getProductByID = (id: string): Product | undefined => {
  return collections.products.find((product) => product.id === id);
};

export const createProduct = (product: ProductInput): Product => {
  const newProduct = {
    ...product,
    id: generateRandomID("pet_"),
  };
  collections.products.push(newProduct);
  return newProduct;
};
