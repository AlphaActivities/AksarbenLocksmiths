import { cn } from "@/lib/utils";
import { forwardRef, HTMLAttributes } from "react";

export interface LinkProps extends HTMLAttributes<HTMLAnchorElement> {
  href: string;
  external?: boolean;
}

export const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  ({ className, href, external, children, ...props }, ref) => {
    return (
      <a
        ref={ref}
        href={href}
        className={cn("outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2", className)}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        {...props}
      >
        {children}
      </a>
    );
  }
);

Link.displayName = "Link";