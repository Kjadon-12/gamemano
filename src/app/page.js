import { getAllProducts } from "@/lib/axios";


export default async function Home() {
  const data = await getAllProducts();

  return (
    <>
    <div>home page</div>
    
    </>
   
  );
}
