import Header from "@/components/Header/Header";
import { getAllProducts } from "@/lib/axios";


export default async function Home() {
  const data = await getAllProducts();

  return (
    <>
    <div>
      {/* <Header/> */}home page content
    </div>
    
    </>
   
  );
}
