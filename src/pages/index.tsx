import classNames from "classnames";

import Header from "../components/Header";

import Link from "next/link";
import api from "../service/api";

import { Product } from "../types/Product";
import { GetStaticProps } from "next";
import Head from "next/head";

interface Props {
  products: Product[];
}

export default function HomePage({ products }: Props) {
  // const [products, setProducts] = useState<Product[]>([]);

  // useEffect(() => {
  //   async function productFetcher() {
  //     const { data } = await api.get("/products");

  //     setProducts(data);
  //   }

  //   productFetcher();
  // }, []);

  return (
    <>
      <Head>
        <title> Yuu Store - Encontre algo único! </title>
      </Head>

      <Header />

      <main>
        <section className="bg-home w-full h-80 xl:h-[448px] flex justify-center items-center">
          <div className="text-center">
            <h1 className="font-extrabold text-5xl md:text-7xl">Confiável. Seguro. Rápido.</h1>
            <p className="mt-3 text-sm md:text-base">
              YuuStore é uma loja 100% focada na segurança e rapidez da sua compra!
            </p>
          </div>
        </section>

        <div className="mt-4"></div>

        <section className="max-w-container mx-auto p-4">
          <div>
            <h1 className="text-xl text-center mb-4"> Nossos mais vendidos </h1>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-3 2xl:grid-cols-4">
              {products?.map((prod) => (
                <Link href={`/product/${prod.id}`} key={prod.id} passHref>
                  <a className="bg-white100 group cursor-pointer h-64 rounded-lg flex flex-col items-center justify-between py-3">
                    <div className="relative w-36 h-36">
                      <img src={prod.images.thumb} className="object-cover duration-200 group-hover:scale-110" />
                    </div>

                    <div className="mt-2 flex flex-col justify-start w-full px-3">
                      <div className="flex justify-between items-center">
                        <h3> {prod.title} </h3>
                        <strong className="text-base">
                          {prod.price.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
                        </strong>
                      </div>

                      <p className="text-sm"> {prod.description.short.slice(0, 60) + "..."} </p>

                      {/* <button className="mt-2 duration-200 bg-sky px-3 py-2 rounded-md font-bold">
                      Adicionar no carrinho
                    </button> */}
                    </div>
                  </a>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="h-96">{/* <h1> Também temos </h1> */}</section>
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data } = await api.get("/products");

  return {
    props: {
      products: data,
    },
  };
};
