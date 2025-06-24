import { TooltipProvider } from "@radix-ui/react-tooltip";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import React from "react";
import Link from "next/link";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import { cn } from "@/lib/utils";

interface Props {
  className?: string;
  iconClassName?: string;
  tooltipClassName?: string;
}

const socialLink = [
  { title: "Facebook", icon: <Facebook className="h-5 w-5" />, href: "#" },
  { title: "Twitter", icon: <Twitter className="h-5 w-5" />, href: "#" },
  { title: "Instagram", icon: <Instagram className="h-5 w-5" />, href: "#" },
  { title: "Linkedin", icon: <Linkedin className="h-5 w-5" />, href: "#" },
];

const SocialMedia = ({ className, iconClassName, tooltipClassName }: Props) => {
  return (
    <TooltipProvider>
      <div className={cn("flex items-center gap-4", className)}>
        {socialLink.map((item) => (
          <Tooltip key={item?.title}>
            <TooltipTrigger asChild>
              <Link
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "p-2 border rounded-full hover:text-white hover:border-shop_light_green hoverEffect",
                  iconClassName
                )}
              >
                {item.icon}
              </Link>
            </TooltipTrigger>
            <TooltipContent className={tooltipClassName} side="bottom">
              <p>{item.title}</p>
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
    </TooltipProvider>
  );
};

export default SocialMedia;
