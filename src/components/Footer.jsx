import { ArrowUp } from "lucide-react";
import logoUniversity from "@/assets/logoUniversity.png";
export const Footer = () => {
  return (
    <footer className="py-12 px-4 bg-card relative border-t border-border mt-12 pt-8 flex flex-wrap justify-between items-center">
      <div className='container flex items-center justify-between'>
        <p className="text-sm text-muted-foreground"> 
          &copy; {new Date().getFullYear()} 
          KvDKid.co All rights reserved.
        </p>
        <div className="flex items-center justify-center">
          <img src={logoUniversity} alt="" className="size-15"/>
          <span className="text-xl text-foreground/80">Hutech University</span>
        </div>
      </div>
      
      <a href="#hero" className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors hidden md:block">
        <ArrowUp />
      </a>
    </footer>
  );
}