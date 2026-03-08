import React, { useEffect, useState } from "react";
import Autoplay from "embla-carousel-autoplay";
import { Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Avatar, AvatarImage } from "../ui/avatar";
import { USER_COMMENTS, type UserComment } from "./data";
import LoadingComponent from "../ui/LoadingComponent";

const Comments = () => {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const [data, setData] = useState<UserComment[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  useEffect(() => {
    setData(USER_COMMENTS);
  }, []);
  return (
    <>
      <LoadingComponent loading={loading} setLoading={setLoading} />
      <div className="mx-auto mt-8 max-w-[16rem] sm:max-w-sm">
        <Carousel
          plugins={[
            Autoplay({
              delay: 4000,
            }),
          ]}
          setApi={setApi}
          className=""
        >
          <CarouselContent>
            {data.map((comment) => (
              <CarouselItem key={comment.id}>
                <Card className="m-px h-full transition-transform duration-500 hover:scale-105 hover:cursor-grab active:cursor-grabbing">
                  <CardContent className="flex flex-col aspect-square items-center justify-center p-6 text-center gap-4">
                    <Avatar className="w-32 h-32">
                      <AvatarImage alt="q01q" src={comment.image} />
                    </Avatar>
                    <div className="flex gap-2">
                      {Array.from({ length: comment.star }).map((_, i) => (
                        <Star
                          fill="currentColor"
                          key={i}
                          className="text-yellow-500"
                        />
                      ))}
                    </div>
                    <p className="text-sm italic text-muted-foreground">
                      "{comment.content}"
                    </p>
                    <div className="mt-2">
                      <p className="font-semibold text-sm">{comment.name}</p>

                      <Badge className="bg-blue-200 text-blue-700 dark:bg-blue-950 dark:text-blue-300">
                        {comment.username}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
        <div className="py-2 text-center text-sm text-muted-foreground">
          Students Comments {current} of {count}
        </div>
      </div>
    </>
  );
};

export default Comments;
