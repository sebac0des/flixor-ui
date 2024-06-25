// Components
import { Button } from "./button";

// Icons
import { ShoppingCart } from "lucide-react";

// Utils
import { cn } from "@/lib/utils";

// Types
import { Product } from '@/types';


interface HeaderCartProps {
  className?:string
  product:Product
}

export const AddToCart = (props:HeaderCartProps)=>{

  return <Button 
  className={cn("relative w-fit",props.className)} 
   variant='secondary' >
  <span className='hidden md:mr-2 md:inline-block'>Add to cart</span>
  <ShoppingCart className='w-4 h-4'/>
</Button>
}

