import { ExternalLinkIcon } from "lucide-react";
import { FC, AnchorHTMLAttributes, ReactNode } from "react";

interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  showIcon?: boolean;
  children: ReactNode;
}

export const Link: FC<LinkProps> = ({
  showIcon = true,
  children,
  className,
  ...attr
}) => {
  return (
    <a
      target="_blank"
      rel="preload prefetch noreferrer"
      className={`inline-block ${className || ""}`}
      {...attr}
    >
      <span className="text-purple-600 hover:opacity-60 duration-[250ms] transition">
        {children}
      </span>
      {showIcon ? (
        <ExternalLinkIcon
          size={16}
          className="inline-block ml-1 align-text-top text-neutral-500/50"
        />
      ) : null}
    </a>
  );
};
