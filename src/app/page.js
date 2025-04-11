import Header from "@/components/Header/Header";
import Slider from "@/components/Slider/Slider";
import { getAllProducts } from "@/lib/axios";


export default async function Home() {
  const data = await getAllProducts();

  return (
    <>
    <div>
      <Slider/>
    </div>
    
    </>
   
  );
}
