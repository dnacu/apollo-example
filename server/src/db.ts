import { Product, ProductInput } from "./models/Product";
import { generateRandomID } from "./utils/generateRandomID";

let collections = {
  products: [
    { id: "prd_31exrmcvcst", title: "상품q6j0iry5rwk", price: 10000 },
    { id: "prd_zi5tzokyddd", title: "상품8l4by2ga0l4", price: 10000 },
    { id: "prd_76ef3mpb5jf", title: "상품z3ji5c80si9", price: 10000 },
    { id: "prd_149feuj8626f", title: "상품dhv14hd23aa", price: 10000 },
    { id: "prd_ggr5a3slfa7", title: "상품dibpj83p1em", price: 10000 },
    { id: "prd_prenqsgmfvm", title: "상품2xhor3kq0jj", price: 10000 },
    { id: "prd_gxvqni7rpih", title: "상품54g2v8m0m0v", price: 10000 },
    { id: "prd_79bf9folbdw", title: "상품c135wptmuet", price: 10000 },
    { id: "prd_v0vlbfbt0u", title: "상품577mdzkc9gj", price: 10000 },
    { id: "prd_4p4ylpmozti", title: "상품r01nf639xyj", price: 10000 },
    { id: "prd_6qolp5cot86", title: "상품w8rwjny4ryc", price: 10000 },
    { id: "prd_xz2e8jl79oj", title: "상품7ls4tkhuwjt", price: 10000 },
    { id: "prd_bnc42m8acde", title: "상품qtfzl5qjtgb", price: 10000 },
    { id: "prd_3dtzoehmb59", title: "상품oyg73wi68hm", price: 10000 },
    { id: "prd_di7p9pzwdz6", title: "상품s31hiqd3evr", price: 10000 },
    { id: "prd_95q6te4lkxd", title: "상품4tt971i6wbx", price: 10000 },
    { id: "prd_p9lxrjheis", title: "상품wypfc736hdi", price: 10000 },
    { id: "prd_9fcf91nqwv4", title: "상품10f5z2m89ay", price: 10000 },
    { id: "prd_7132u19j3t4", title: "상품l72cip7hu5", price: 10000 },
    { id: "prd_kebw17u0s59", title: "상품bdd3g38o8to", price: 10000 },
    { id: "prd_oughxz3nu5", title: "상품oz9oy8wo49a", price: 10000 },
    { id: "prd_j2prhw3bmf8", title: "상품7647wfvscny", price: 10000 },
    { id: "prd_f4unzzieded", title: "상품peo4zhja0nn", price: 10000 },
    { id: "prd_jmshei2xri", title: "상품o425dsuiznb", price: 10000 },
    { id: "prd_01d0eylaucly", title: "상품eik5ee4tqwo", price: 10000 },
    { id: "prd_27zr0cuyk06", title: "상품c9dd0iyqqc", price: 10000 },
    { id: "prd_wtiilawbhs", title: "상품zbxho5hb26", price: 10000 },
    { id: "prd_bwv2xql3lnk", title: "상품gb6q2vgu1ni", price: 10000 },
    { id: "prd_5uxmc88z152", title: "상품5l9k3dbxfp9", price: 10000 },
    { id: "prd_wh5rkqxgp6e", title: "상품udfj48d108h", price: 10000 },
    { id: "prd_8pwwgvepood", title: "상품4x1axqyv91p", price: 10000 },
    { id: "prd_ymzl53vdtr", title: "상품98n35bho7tu", price: 10000 },
    { id: "prd_jrxtiavhyki", title: "상품63m2ztsxji", price: 10000 },
    { id: "prd_1i8mmah0s88", title: "상품zj5fjlabagr", price: 10000 },
    { id: "prd_ti8yjtdxvxh", title: "상품8m2bfxngfv3", price: 10000 },
    { id: "prd_nhsrzkvmtid", title: "상품hcw9lrmlue", price: 10000 },
    { id: "prd_p1oyx0xl68", title: "상품lmp8411zcp", price: 10000 },
    { id: "prd_83uu89i2zxo", title: "상품w6m3mrq4dbr", price: 10000 },
    { id: "prd_vwss2yup57", title: "상품1cv98sl8d18", price: 10000 },
    { id: "prd_lfona75h5ki", title: "상품15lo4puxp8g", price: 10000 },
    { id: "prd_itmwjbtw3y", title: "상품mmzpxkiiouh", price: 10000 },
    { id: "prd_15cs324xlos", title: "상품xax6r1ob7ya", price: 10000 },
    { id: "prd_97dlwwjg08", title: "상품tvqxy3knebg", price: 10000 },
    { id: "prd_fl79pz4sds", title: "상품hp6pckcu02v", price: 10000 },
    { id: "prd_hme3e6xleo4", title: "상품zd59e2bhgjc", price: 10000 },
    { id: "prd_txj6xbi1srj", title: "상품lhsw8diqkyi", price: 10000 },
  ] as Product[],
};

export const getProducts = (offset: number, limit: number) => {
  return collections.products.slice(offset, offset + limit);
};

export const getProductByID = (id: string): Product | undefined => {
  return collections.products.find((product) => product.id === id);
};

export const createProduct = (product: ProductInput): Product => {
  const newProduct = {
    ...product,
    id: generateRandomID("prd_"),
  };
  collections.products.push(newProduct);
  return newProduct;
};
