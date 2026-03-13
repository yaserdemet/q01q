import ContactForm from "@/components/social/ContctForm";
import Header from "@/components/ui/Header";
import MetaData from "@/lib/MetaData";
import { DoorOpen } from "lucide-react";

const Contact = () => {
  return (
    <>
      <MetaData title="Contact - q01q" description="Contact" />
      <Header header="Contact" explanation="" Icon={DoorOpen}>
        <ContactForm />
      </Header>
    </>
  );
};

export default Contact;
