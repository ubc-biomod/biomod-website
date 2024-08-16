import ContactForm from "@/components/contact-us/ContactForm";
import Hero from "@/components/contact-us/Hero";

function Page() {
  return (
    <div className="flex flex-col gap-defaultMob lg:gap-default px-4 lg:px-12 bg-bg2 bg-no-repeat">
      <Hero />
      <ContactForm />
    </div>
  );
}

export default Page;
