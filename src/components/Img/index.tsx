import React from "react";

export type ImgProps = React.DetailedHTMLProps<
  React.ImgHTMLAttributes<HTMLImageElement>,
  HTMLImageElement
> &
  Partial<{
    className: string;
    src: string;
    alt: string;
    action?:string
  }>;

const Img: React.FC<React.PropsWithChildren<ImgProps>> = ({
  className,
  src = "defaultNoData.png",
  alt = "testImg",
  action = '',
  ...restProps
}) => {
  return (
    <img
      onClick={()=>{if(action!=''){window.open(action)}}}
      className={className}
      src={src}
      alt={alt}
      {...restProps}
    />
  );
};
export { Img };
