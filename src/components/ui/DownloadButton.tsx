import React from "react";
import { Button } from "./button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { Spinner } from "./spinner";
import { Download } from "lucide-react";

interface IDownload {
  text: string;
  link: string;
  linkAdress: string;
  toolTipText?: string;
}

const DownloadButton = ({ text, linkAdress, link, toolTipText = "Download" }: IDownload) => {
  const [loading, setLoading] = React.useState(false);

  const downloadPdf = () => {
    const createLink = document.createElement("a");
    createLink.href = linkAdress;
    createLink.download = link;
    createLink.click();
  };
  const makeLoading = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      downloadPdf();
    }, 800);
  };
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button className="hover:cursor-pointer" onClick={makeLoading}>
          {loading ? <Spinner data-icon="inline-start" /> : <Download />}
          {loading ? "Loading..." : text}
        </Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>{toolTipText}</p>
      </TooltipContent>
    </Tooltip>
  );
};

export default DownloadButton;
