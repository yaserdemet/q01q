import React from 'react'
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import emailjs from "@emailjs/browser";
import { useActionState } from "react";
import { toast } from "sonner";
const ContactForm = () => {
      //   const [info, setInfo] = useState({
  //     person: {
  //       name: "",
  //     },
  //     surname: "",
  //     email: "",
  //     description: "",
  //   });
  //   const {
  //     person: { name },
  //     surname,
  //     email,
  //     description,
  //   } = info;
  //   const handleSubmit = (e: HTMLFormElement) => {
  //     e.preventDefault();
  //     alert("merhaba");
  //   };
  //   const handleChange = (e: any) => {
  //     if (e.target.name === "name") {
  //       setInfo((prev) => ({
  //         ...prev,
  //         person: { ...prev.person, name: e.target.value },
  //       }));
  //     } else {
  //       setInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  //     }
  //   };
  //   console.log(info);
      const handleSubmit = async (_: any, formData: FormData) => {
    try {
      const templateParams = {
        name: formData.get("name")?.toString() || "",
        surname: formData.get("surname")?.toString() || "",
        email: formData.get("email")?.toString() || "",
        title: formData.get("title")?.toString() || "",
        description: formData.get("description")?.toString() || "",
      };

      const data = await emailjs.send(
        import.meta.env.VITE_EMAIL_SERVICE_ID,
        import.meta.env.VITE_EMAIL_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAIL_PUBLIC_KEY,
      );

      const adminData = await emailjs.send(
        import.meta.env.VITE_EMAIL_SERVICE_ID,
        import.meta.env.VITE_EMAIL_ADMIN_TEMPLATE_ID, // admin notification
        templateParams,
        import.meta.env.VITE_EMAIL_PUBLIC_KEY,
      );

      if (data.status === 200 && adminData.status === 200) {
        toast.success("Message sent successfully");
        return { success: true };
      }
      throw new Error("Failed to send message");
    } catch (error) {
      console.log(error);
      toast.error("Failed to send message");
      return { success: false };
    }
  };
  const [state, formAction, pending] = useActionState(handleSubmit, null);
  return (
    <div className='flex justify-center mt-8'>
      <Card className="w-full max-w-xl">
          <CardHeader>
            <CardTitle>Your Message</CardTitle>
            <CardDescription>
              Feel to free to say your ideas about application
            </CardDescription>
          </CardHeader>
          <form action={formAction}>
            <CardContent>
              <div className="flex flex-col gap-6">
                <div className="grid gap-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    name="name"
                    id="name"
                    type="text"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="surname">Surname</Label>
                  <Input
                    name="surname"
                    id="surname"
                    type="text"
                    placeholder="Your Surname"
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="title">Subject</Label>
                  <Input
                    name="title"
                    id="title"
                    type="text"
                    placeholder="Subject"
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <div className="flex items-center">
                    <Label htmlFor="password">Email</Label>
                  </div>
                  <Input name="email" id="email" type="email" required />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="password">Description</Label>

                  <Textarea
                    name="description"
                    id="description"
                    cols={24}
                    rows={24}
                    required
                  />
                </div>
                <Button disabled={pending} type="submit" className="w-full">
                  {pending ? "Sending..." : "Login"}
                </Button>
              </div>
            </CardContent>
          </form>
        </Card>
    </div>
  )
}

export default ContactForm