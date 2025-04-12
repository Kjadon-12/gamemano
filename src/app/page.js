import ProductCard from "@/components/Cards/ProductCard";
import Header from "@/components/Header/Header";
import Slider from "@/components/Slider/Slider";
import Trending from "@/components/Trending/Trending";
import { getAllProducts } from "@/lib/axios";


export default async function Home() {
  const data = await getAllProducts();
 
  return (
    <>
    <div>
      <Slider/>
      <Trending products={data?.products}/>
     
    </div>
    
    </>
   
  );
}
