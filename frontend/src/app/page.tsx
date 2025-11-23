import { Navbar } from "@/component/marketing/Navbar";
import CTA from "@/component/marketing/landing/CTA";
import { Main } from "@/component/marketing/landing/Hero"
import { HowItWorks } from "@/component/marketing/landing/HowItWorks";
import { WalkThrough } from "@/component/marketing/landing/Walkthrough";
import { Footer } from "@/component/marketing/landing/footer";


export default function Home() {
  return (
    <div>
      <Navbar />
      <Main />
      <HowItWorks/>
      <CTA/>
      <WalkThrough/>
      <Footer/>
    </div>
  );
}
