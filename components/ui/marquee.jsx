"use client";

import { cn } from "@/lib/utils";
import { cloneElement, isValidElement, Children } from "react";

export function Marquee({
  className,
  reverse = false,
  pauseOnHover = false,
  children,
  vertical = false,
  repeat = 4,
  ...props
}) {
  // Helper function to replace img tags with divs (using background-image) in duplicates for SEO
  const replaceImagesWithDivs = (element) => {
    if (!isValidElement(element)) return element;

    // If it's an img element, replace it with a div using background-image
    if (element.type === "img") {
      const { src, alt, title, className: imgClassName, ...restProps } = element.props;
      return (
        <div
          {...restProps}
          className={imgClassName}
          style={{
            backgroundImage: `url(${src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
          aria-hidden="true"
          data-seo-ignore="true"
        />
      );
    }

    // Recursively process children
    if (element.props && element.props.children) {
      const processedChildren = Children.map(element.props.children, (child) => {
        if (isValidElement(child)) {
          return replaceImagesWithDivs(child);
        }
        return child;
      });

      return cloneElement(element, {
        ...element.props,
        children: processedChildren,
        "aria-hidden": "true",
        "data-seo-ignore": "true",
      });
    }

    return cloneElement(element, {
      ...element.props,
      "aria-hidden": "true",
      "data-seo-ignore": "true",
    });
  };

  return (
    <div
      {...props}
      className={cn(
        "group flex overflow-hidden p-2 [--duration:40s] [--gap:1rem] [gap:var(--gap)]",
        {
          "flex-row": !vertical,
          "flex-col": vertical,
        },
        className
      )}
      suppressHydrationWarning
    >
      {Array.from({ length: repeat }).map((_, i) => {
        const isDuplicate = i > 0;
        return (
          <div
            key={i}
            aria-hidden={isDuplicate ? "true" : undefined}
            data-seo-ignore={isDuplicate ? "true" : undefined}
            className={cn("flex shrink-0 justify-around [gap:var(--gap)]", {
              "animate-marquee flex-row": !vertical,
              "animate-marquee-vertical flex-col": vertical,
              "group-hover:[animation-play-state:paused]": pauseOnHover,
              "[animation-direction:reverse]": reverse,
            })}
          >
            {isDuplicate
              ? (Array.isArray(children)
                  ? children.map((child) => replaceImagesWithDivs(child))
                  : replaceImagesWithDivs(children))
              : children}
          </div>
        );
      })}
    </div>
  );
}
