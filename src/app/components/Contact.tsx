
import ContactCards from './ContactCards';
import Footer from "./Footer";


export default function Contact() {
  return (
    <div id="contact" className="h-auto bg-[#4831D4] flex flex-col">
      <div className="py-8 text-[#CCF381]">
        <h1 className="text-center text-4xl font-semibold mt-8">Let&apos;s Talk</h1>
        <p className="text-center text-xl font-medium mt-4">Hit me up, press or click a button below.</p>
      </div>

      <ContactCards />

      {/* Bottom Item */}
      <div className="px-4">
        <hr />
        <Footer />
      </div>
    </div>
  );
}
