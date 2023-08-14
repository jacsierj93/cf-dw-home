import React from "react";

import { Text, Img } from "components";

const Stars: React.FC<{description:string}> = ({description}) => {
    return <>
        <div className="flex sm:flex-col flex-row font-clashdisplayvariable gap-8 sm:items-start justify-start w-auto sm:w-full">
                      <div className="flex flex-row gap-1 items-center justify-center w-auto ">
                          <div className="flex flex-row items-start justify-start w-auto">
                          <Img
                              className="h-4 w-4"
                              src="/images/img_star.svg"
                              alt="star"
                          />
                          <Img
                              className="h-4 w-4"
                              src="/images/img_star.svg"
                              alt="star_One"
                          />
                          <Img
                              className="h-4 w-4"
                              src="/images/img_star.svg"
                              alt="star_Two"
                          />
                          <Img
                              className="h-4 w-4"
                              src="/images/img_star.svg"
                              alt="star_Three"
                          />
                          <Img
                              className="h-4 w-4"
                              src="/images/img_star.svg"
                              alt="star_Four"
                          />
                          </div>
                          <Text
                            className="text-base text-gray-50 w-auto sm:text-sm"
                            size="txtClashDisplayVariableMedium16Gray50"
                            >
                            {description}
                          </Text>
                      </div>
                  
                    </div>
    
    </>
}

export default Stars;