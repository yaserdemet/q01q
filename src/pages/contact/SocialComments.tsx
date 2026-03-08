import React from "react";
import Header from "@/components/ui/Header";
import MetaData from "@/lib/MetaData";
import { MessageCircle } from "lucide-react";
import Comments from "@/components/social/Comments";

const SocialComments = () => {
  return (
    <>
      <MetaData title="Comments - q01q" description="Comments" />
      <Header header="Comments" explanation="Students Comments About Us" Icon={MessageCircle}>
        <Comments />
      </Header>
    </>
  );
};

export default SocialComments;
