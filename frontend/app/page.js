import AudioPlayer from "@/components/AudioPlayer";
import { getDua } from "@/utils/getDua";
import { getCategory } from "@/utils/getcategory";
import { getSubCategory } from "@/utils/getsubcategory";
import Image from "next/image";

export default async function Home() {
  const category = await getCategory();
  const categories = await category.props.categories;

  const subcategory = await getSubCategory();
  const subcategories = await subcategory.props.subcategories;

  const dua = await getDua();
  const duas = await dua.props.dua;

  //console.log(categories);
  let currentCategory = null;

  return (
    <>
      {/* ---Start middle part--- */}
      <div className="col-span-12 xl:col-span-9 row-span-11 flex gap-4 xl:ml-[-30px] ">
        {/* ---Stat Category----- */}
        <div className="w-[28%] rounded-xl h-[86vh] border bg-white hidden md:block">
          <div className="  rounded-t-lg bg-[#1fa45b] justify-center items-center h-14 flex flex-row px-5">
            <p className="text-base text-white mx-auto">Categories</p>
          </div>
          <div className=" overflow-hidden">
            <div className="mx-3 pt-4">
              <label className="relative block w-full">
                <span className="absolute inset-y-0 left-0 flex items-center pl-4">
                  <Image
                    src={"/assets/search-icon.svg"}
                    width={22}
                    height={22}
                    alt="search-icon"
                  />
                </span>
                <input
                  id="filerted_catList"
                  className="h-12 placeholder:text-mute-grey placeholder:text-sm border-[1px] block bg-white w-full rounded-md pl-12 shadow-sm focus:outline-none focus:border-[#1fa45b] focus:ring-[#1fa45b] focus:ring-1 sm:text-sm dark:bg-dark-bg-dark dark:border-none dark:placeholder:text-[#96a2b4]"
                  placeholder="Search Categories"
                  type="text"
                  name="search"
                  spellCheck="false"
                  data-ms-editor="true"
                />
              </label>
            </div>
            <div className='h-[calc(100vh-32vh)]  3xl:h-[68vh]" scrl-cat pb-8 mb-4 overflow-y-scroll'>
              <div>
                {categories.map((category, i) => (
                  <div key={i}>
                    <div className="mt-4">
                      <div className="group scroll-mt-4" id="cat_1">
                        <a
                          href={`/duas/${encodeURIComponent(
                            category.cat_name_en
                          )}?cat=${category.cat_id}`}
                        >
                          <div className="cursor-pointer bg-white flex justify-between items-center mx-3 dark:bg-transparent my-2 hover:bg-[#e8f0f5] hover:rounded-xl p-3 ">
                            <div className="bg-icon-bg dark:bg-dark-bg-dark group-hover:bg-icon-bg dark:group-hover:bg-dark-bg-dark flex flex-row gap-x-4 items-center w-full h-18 px-3 rounded-xl group-hover:bg-icon-bg dark:group-hover:bg-dark-bg-dark">
                              <div className="flex flex-row w-70 items-center xs:w-full sm:w-full md:w-full">
                                <div className="bg-dua-bg dark:bg-dark-bg flex rounded-lg items-center h-14 w-14 xs:w-12 xs:h-12">
                                  <Image
                                    src={`/assets/icon/${category.cat_icon}.svg`}
                                    alt="duar_gurutto"
                                    className="p-3"
                                    width={100}
                                    height={100}
                                  />
                                </div>
                                <div className="w-40 text-left ml-2">
                                  <p className="text-base  text-slate-700 -cat dark:text-dark-text sm:text-mss">
                                    {category.cat_name_en}
                                  </p>
                                  <p className="text-slate-500 text-xs mt-1 dark:text-dark-text xs:text-[11px]">
                                    Subcategory: {category.no_of_subcat}
                                  </p>
                                </div>
                              </div>
                              <div className="flex flex-row w-12 items-center">
                                <div className="bg-devider w-0.1 mr-3 h-12 dark:hidden" />
                                <div className="flex flex-col gap-y-1 justify-center items-center">
                                  <p className="text-base text-slate-500 dark:text-dark-text xs:text-sm sm:text-mss">
                                    {category.no_of_dua}
                                  </p>
                                  <p className="text-slate-500 text-xs dark:text-dark-text xs:text-[11px]">
                                    Duas
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </a>
                        <div className="ml-12 border-l-2 border-dotted my-2 border-[#1fa45b]">
                          <div className="flex border-dotted flex-col justify-start items-start gap-y-2 ml-3">
                            {/* ---Start sub category--- */}
                            {subcategories &&
                              subcategories
                                .filter(
                                  (subcategory) =>
                                    subcategory.cat_id === category.cat_id
                                )
                                .map((subcategory, i) => (
                                  <div key={i} className="flex flex-row my-2">
                                    <div className="bg-[#1fa45b] -translate-x-4 mt-1.5 w-1.5 rounded-full h-1.5" />
                                    <div className="flex flex-col justify-start items-start">
                                      <a
                                        href={`http://localhost:3000/duas/dua's-importance?cat=${category.cat_id}&subcat=${subcategory.subcat_id}`}
                                      >
                                        <p className="text-title cursor-pointer text-left text-sm dark:text-dark-text xs:text-2xs  text-slate-600 font-normal">
                                          {subcategory.subcat_name_en}
                                        </p>
                                      </a>
                                    </div>
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
        {/* ---End Category----- */}

        {/* ---Start body---- */}

        <div className="w-[98%] md:w-[72%] overflow-y-scroll ">
          {subcategories &&
            subcategories.map((subcategory, i) => (
              <div key={i}>
                {" "}
                {/* --section div--- */}
                <div
                  id={`sec_${subcategory.subcat_id}`}
                  className="flex  mb-5 flex-row bg-white rounded-[.625rem] px-5 py-4 justify-start items-center dark:bg-dark-bg border"
                >
                  <p className="text-title font-semibold leading-[25px] dark:text-dark-text text-gray-500">
                    <span className="text-[#1fa45b] font-medium leading-[25px] ">
                      Section:
                    </span>
                    {subcategory.subcat_name_en}
                  </p>
                </div>
                {/* ---Dua Div--- */}
                {duas
                  .filter((dua) => dua.subcat_id === subcategory.subcat_id)
                  .map((dua, i) => (
                    <div
                      key={i}
                      id={`dua_${dua.subcat_id}`}
                      className=" bg-white rounded-[.625rem] border mb-5 dark:bg-dark-bg"
                    >
                      <div className="p-6">
                        <div>
                          <div className="flex flex-row  justify-start items-center ">
                            <Image
                              src="/assets/duacard.svg"
                              alt="duacard"
                              className="mr-3"
                              height={30}
                              width={30}
                            />

                            <p className="text-[#1fa45b] font-medium -dua-title">
                              {dua.dua_name_en}
                            </p>
                          </div>
                        </div>
                        <div className="flex flex-col justify-start items-start">
                          <div className="w-full">
                            <p
                              className="  dark:text-[#e4e4e4] mt-5 text-justify leading-8 font-normal text-[#383838]"
                              style={{ fontSize: 18 }}
                            >
                              <span>{dua.top_en}</span>
                            </p>
                            <p
                              dir="rtl"
                              className="dark:text-[#e4e4e4] my-8 text-right leading-loose text-6xl"
                              style={{
                                wordSpacing: 8,
                                fontSize: 30,
                                fontFamily: "me_quran",
                              }}
                            >
                              {dua.dua_arabic}
                            </p>

                            <p />
                            {dua.transliteration_en ? (
                              <p
                                className="  dark:text-[#e4e4e4] my-5 text-justify leading-8 italic text-[#383838]"
                                style={{ fontSize: 18 }}
                              >
                                <span
                                  id="transliteration"
                                  className=" -dua-title -dua-title font-medium text-[#383838]"
                                  style={{ fontSize: 18 }}
                                >
                                  Transliteration:
                                </span>{" "}
                                <span> {dua.transliteration_en}</span>
                              </p>
                            ) : (
                              ""
                            )}
                            {dua.translation_en ? (
                              <p
                                id="translation"
                                className="dark:text-[#e4e4e4] my-5 text-title text-justify font-normal text-[#383838]"
                                style={{ fontSize: 18 }}
                              >
                                <span
                                  className=" -dua-title -dua-title font-medium"
                                  style={{ fontSize: 18 }}
                                >
                                  Translation:
                                </span>{" "}
                                <span> {dua.translation_en}</span>
                              </p>
                            ) : (
                              ""
                            )}
                          </div>
                          <div>
                            <p
                              className="mt-5   font-normal text-[#1fa45b]"
                              style={{ fontSize: 18 }}
                            >
                              Reference:
                            </p>
                            <div
                              className="mt-1   font-normal dark:text-dark-text text-[#383838]"
                              style={{ fontSize: 18 }}
                            >
                              <span> {dua.refference_en}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className="flex flex-row items-center justify-between px-6">
                          <AudioPlayer audioSrc={dua.audio} />
                          <div className="flex items-center flex-row justify-between py-6 gap-x-8 xs:gap-x-6">
                            <div id="copy" className="relative w-6">
                              <Image
                                className="cursor-pointer"
                                src="/assets/others/copy.svg"
                                alt="copy"
                                width={30}
                                height={30}
                              />
                            </div>
                            <div id="bookmark" className="relative w-6">
                              <Image
                                className="cursor-pointer"
                                src="/assets/others/bookmark.svg"
                                alt="bookmark"
                                width={30}
                                height={30}
                              />
                            </div>
                            <div id="plan" className="relative w-6">
                              <Image
                                className="cursor-pointer"
                                src="/assets/others/plan.svg"
                                alt="plan"
                                width={30}
                                height={30}
                              />
                            </div>
                            <div id="share" className="relative w-6">
                              <Image
                                className="cursor-pointer"
                                src="/assets/others/share.svg"
                                alt="share"
                                width={30}
                                height={30}
                              />
                            </div>
                            <div id="report" className="relative w-6">
                              <Image
                                className="cursor-pointer"
                                src="/assets/others/report.svg"
                                alt="report"
                                width={30}
                                height={30}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            ))}
        </div>
      </div>

      {/* ---End body---- */}

      {/* ---End middle part--- */}
    </>
  );
}
