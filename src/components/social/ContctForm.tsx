import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";
import { Toaster } from "../ui/sonner";
import * as Sentry from "@sentry/react";

interface ContactFormData extends Record<string, unknown> {
  name: string;
  surname: string;
  title: string;
  email: string;
  description: string;
}

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
  //     const handleSubmit = async (_: any, formData: FormData) => {
  //   try {
  //     const templateParams = {
  //       name: formData.get("name")?.toString() || "",
  //       surname: formData.get("surname")?.toString() || "",
  //       email: formData.get("email")?.toString() || "",
  //       title: formData.get("title")?.toString() || "",
  //       description: formData.get("description")?.toString() || "",
  //     };

  //     const data = await emailjs.send(
  //       import.meta.env.VITE_EMAIL_SERVICE_ID,
  //       import.meta.env.VITE_EMAIL_TEMPLATE_ID,
  //       templateParams,
  //       import.meta.env.VITE_EMAIL_PUBLIC_KEY,
  //     );

  //     const adminData = await emailjs.send(
  //       import.meta.env.VITE_EMAIL_SERVICE_ID,
  //       import.meta.env.VITE_EMAIL_ADMIN_TEMPLATE_ID, // admin notification
  //       templateParams,
  //       import.meta.env.VITE_EMAIL_PUBLIC_KEY,
  //     );

  //     if (data.status === 200 && adminData.status === 200) {
  //       toast.success("Message sent successfully");
  //       return { success: true };
  //     }
  //     throw new Error("Failed to send message");
  //   } catch (error) {
  //     console.log(error);
  //     toast.error("Failed to send message");
  //     return { success: false };
  //   }
  // };
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting, errors },
  } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    try {
      const datas = await emailjs.send(
        import.meta.env.VITE_EMAIL_SERVICE_ID as string,
        import.meta.env.VITE_EMAIL_TEMPLATE_ID as string,
        data,
        import.meta.env.VITE_EMAIL_PUBLIC_KEY as string,
      );

      const adminDatas = await emailjs.send(
        import.meta.env.VITE_EMAIL_SERVICE_ID as string,
        import.meta.env.VITE_EMAIL_ADMIN_TEMPLATE_ID as string,
        data,
        import.meta.env.VITE_EMAIL_PUBLIC_KEY as string,
      );
      if (datas.status === 200 && adminDatas.status === 200) {
        toast.success("Message sent successfully");
      }
    } catch (error) {
      console.log(error);
      Sentry.captureException(error);
      toast.error("Failed to send message");
    } finally {
      reset();
    }
  };
  return (
    <div className="flex justify-center mt-8">
      <Toaster position="top-right" duration={5000} />
      <Card className="w-full max-w-xl">
        <CardHeader>
          <CardTitle>Your Message</CardTitle>
          <CardDescription>Feel to free to say your ideas about application</CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit(onSubmit)}>
          <CardContent>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  aria-invalid={!!errors.name}
                  {...register("name", { required: "Name is required" })}
                  name="name"
                  id="name"
                  type="text"
                  placeholder="Your Name"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm">{errors.name.message as string}</p>
                )}
              </div>
              <div className="grid gap-2">
                <Label htmlFor="surname">Surname</Label>
                <Input
                  aria-invalid={!!errors.surname}
                  {...register("surname", {
                    required: "Surname is required",
                  })}
                  name="surname"
                  id="surname"
                  type="text"
                  placeholder="Your Surname"
                />
                {errors.surname && (
                  <p className="text-red-500 text-sm">{errors.surname.message as string}</p>
                )}
              </div>
              <div className="grid gap-2">
                <Label htmlFor="title">Subject</Label>
                <Input
                  aria-invalid={!!errors.title}
                  {...register("title", {
                    required: "Subject is required",
                    minLength: {
                      value: 3,
                      message: "Subject must be at least 3 characters long",
                    },
                  })}
                  name="title"
                  id="title"
                  type="text"
                  placeholder="Subject"
                />
                {errors.title && (
                  <p className="text-red-500 text-sm">{errors.title.message as string}</p>
                )}
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Email</Label>
                </div>
                <Input
                  aria-invalid={!!errors.email}
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address",
                    },
                    maxLength: {
                      value: 100,
                      message: "Email must be at most 100 characters long",
                    },
                  })}
                  name="email"
                  id="email"
                  type="email"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email.message as string}</p>
                )}
              </div>
              <div className="grid gap-2">
                <Label htmlFor="password">Description</Label>

                <Textarea
                  aria-invalid={!!errors.description}
                  {...register("description", {
                    required: "Description is required",
                    maxLength: {
                      value: 500,
                      message: "Description must be at most 500 characters long",
                    },
                    minLength: {
                      value: 5,
                      message: "Description must be at least 5 characters long",
                    },
                  })}
                  name="description"
                  id="description"
                  cols={24}
                  rows={24}
                />
                {errors.description && (
                  <p className="text-red-500 text-sm">{errors.description.message as string}</p>
                )}
              </div>
              <Button disabled={isSubmitting} type="submit" className="w-full">
                {isSubmitting ? "Submitting" : "Submit"}
              </Button>
            </div>
          </CardContent>
        </form>
      </Card>
    </div>
  );
};

export default ContactForm;
