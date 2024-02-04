"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Categories({ categories, subcategories }) {
  const [openStates, setOpenStates] = useState({});

  const handleCategoryClick = (categoryId) => {
    setOpenStates((prevStates) => ({
      ...prevStates,
      [categoryId]: !prevStates[categoryId],
    }));
  };

  return (
    <div className="w-[28%] rounded-xl h-[86vh] border bg-white hidden md:block">
      <div className="  rounded-t-lg bg-[#1fa45b] justify-center items-center h-14 flex flex-row px-5">
        <p className="text-base text-white mx-auto">Categories</p>
      </div>
      <div className=" overflow-hidden">
        <div className="mx-3 pt-4">
          <label className="relative block w-full">{/* ... */}</label>
        </div>
        <div className='h-[calc(100vh-32vh)]  3xl:h-[68vh]" scrl-cat pb-8 mb-4 overflow-y-scroll'>
          <div>
            {categories.map((category, i) => (
              <div key={i}>
                <div className="mt-4">
                  <div
                    className="group scroll-mt-4"
                    id={`cat_${category.cat_id}`}
                  >
                    <Link
                      href={`#`}
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                    >
                      <div
                        className="cursor-pointer bg-white flex justify-between items-center mx-3 dark:bg-transparent my-2 hover:bg-[#e8f0f5] hover:rounded-xl p-3 "
                        onClick={() => handleCategoryClick(category.cat_id)}
                      >
                        {/* ... */}
                      </div>
                    </Link>
                    <div className="ml-12 border-l-2 border-dotted my-2 border-[#1fa45b]">
                      <div className="flex border-dotted flex-col justify-start items-start gap-y-2 ml-3">
                        {/* ---Start sub category--- */}
                        {openStates[category.cat_id] &&
                          subcategories &&
                          subcategories
                            .filter(
                              (subcategory) =>
                                subcategory.cat_id === category.cat_id
                            )
                            .map((subcategory, i) => (
                              <div key={i} className="flex flex-row my-2">
                                {/* ... */}
                              </div>
                            ))}
                        {/* ---End sub category--- */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
