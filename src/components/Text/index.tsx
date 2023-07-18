import React from "react";

const sizeClasses = {
  txtClashDisplayVariableMedium18: "font-clashdisplayvariable font-medium",
  txtClashDisplayVariableMedium16: "font-clashdisplayvariable font-medium",
  txtInterRegular16Bluegray300: "font-inter font-normal",
  txtClashGroteskVariableBold48: "font-bold font-clashgroteskvariable",
  txtClashGroteskVariableBold28: "font-bold font-clashgroteskvariable",
  txtClashDisplayVariableMedium16WhiteA700:
    "font-clashdisplayvariable font-medium",
  txtClashGroteskVariableBold18: "font-bold font-clashgroteskvariable",
  txtTankerRegular150: "font-normal font-tanker",
  txtInterSemiBold16: "font-inter font-semibold",
  txtClashGroteskVariableBold100: "font-bold font-clashgroteskvariable",
  txtClashGroteskVariableMedium18: "font-clashgroteskvariable font-medium",
  txtClashDisplayVariableSemiBold22: "font-clashdisplayvariable font-semibold",
  txtClashGroteskVariableBold48Black90001:
    "font-bold font-clashgroteskvariable",
  txtClashDisplayVariableSemiBold22DeeporangeA400:
    "font-clashdisplayvariable font-semibold",
  txtClashGroteskVariableBold28Gray50: "font-bold font-clashgroteskvariable",
  txtClashGroteskVariableMedium18Gray50:
    "font-clashgroteskvariable font-medium",
  txtClashGroteskVariableBold60: "font-bold font-clashgroteskvariable",
  txtClashGroteskVariableBold28IndigoA100:
    "font-bold font-clashgroteskvariable",
  txtClashDisplayVariableSemiBold18: "font-clashdisplayvariable font-semibold",
  txtInterRegular16: "font-inter font-normal",
  txtClashGroteskVariableMedium28: "font-clashgroteskvariable font-medium",
} as const;

export type TextProps = Partial<{
  className: string;
  size: keyof typeof sizeClasses;
  as: React.ElementType;
}> &
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
  >;

const Text: React.FC<React.PropsWithChildren<TextProps>> = ({
  children,
  className = "",
  size,
  as,
  ...restProps
}) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
