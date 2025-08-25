"use client"

import Link, { LinkProps } from "next/link";
import * as React from "react";

type Props = Omit<React.ComponentProps<'a'>, 'href' | 'onClick'> & LinkProps & {
    gaEvent?: string;
    gaParams?: Record<string, any>;
  };

export default function TrackLink({
  gaEvent = "link_click",
  gaParams,
  href,
  ...rest
}: Props) {
  return (
    <Link
      href={href}
      {...rest}
      onClick={() => {
        const h =
          typeof href === "string"
            ? href
            : (href as any)?.pathname ?? String(href);
        window.gtag?.("event", gaEvent, { href: h, ...gaParams });
      }}
    />
  );
}
