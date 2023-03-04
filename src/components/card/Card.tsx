import React from "react";

function Card({
  children,
  className,
  ...rest
}: React.PropsWithChildren<
  React.PropsWithoutRef<React.HTMLAttributes<HTMLDivElement>>
>) {
  return (
    <div
      className={`px-8 py-4 h-[12rem] min-w-[7rem] md:min-w-[10rem] max-w-[10rem] md:max-w-[12rem] bg-stone-100 rounded-[1.8rem/1.4rem] flex flex-col items-center w-full ${
        className ?? ""
      }`}
      {...rest}
    >
      {children}
    </div>
  );
}

const CardImage = React.forwardRef<
  HTMLImageElement,
  React.PropsWithoutRef<React.ImgHTMLAttributes<HTMLImageElement>>
>(({ className, src, alt, ...rest }, ref) => {
  return (
    <div className="h-24 w-24 overflow-hidden flex">
      <img
        src={src}
        alt={alt}
        className={`overflow-hidden max-h-full max-w-full m-auto ${
          className ?? ""
        }`}
        ref={ref}
        {...rest}
      />
    </div>
  );
});

CardImage.displayName = "CardImage";

function CardInfo({
  children,
  className,
  ...rest
}: React.PropsWithChildren<
  React.PropsWithoutRef<React.HTMLAttributes<HTMLDivElement>>
>) {
  return (
    <span
      className={`mt-2 font-medium text-center ${className ?? ""}`}
      {...rest}
    >
      {children}
    </span>
  );
}

Card.Image = CardImage;
Card.Info = CardInfo;

export default Card;
