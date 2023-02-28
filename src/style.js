const styles = {
    boxWidth: "p-0 max-w-[1340px] w-full",
  
    heading2: "font-bignoodle font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full",
    paragraph: "font-bignoodle font-normal text-dimWhite text-[18px] leading-[30.8px]",
  
    flexCenter: "flex justify-center items-center",
    flexStart: "flex justify-center items-start",
    flexEnd: "flex justify-center items-end",
  
    paddingX: "mm:px-0 xs:px-24 p-8",
    paddingY: "py-24",
    padding: "xm:px-16 px-6 xm:py-12 py-4",
  
    marginX: "xm:mx-16 mx-6",
    marginY: "xm:my-16 my-6",

    titleLineLeft: "leading-10 p-3 leftborder",
    titleLineBottom: "bottomborder",
    titleLineRight: "rightborder",

    titleH3: "font-bignoodle text-[50px] my-4 py-2 px-5",
    titleH4: "font-bignoodle text-[40px] m-0 p-0",
    titleH5: "font-bignoodle text-[35px]",

  };
  
  export const layout = {
    section: `flex mm:flex-row flex-col ${styles.paddingY}`,
    sectionReverse: `flex mm:flex-row flex-col-reverse ${styles.paddingY}`,
  
    sectionImgReverse: `flex-1 flex ${styles.flexCenter} mm:mr-10 mr-0 mm:mt-0 mt-10 relative`,
    sectionImg: `flex-1 flex ${styles.flexCenter} mm:ml-10 ml-0 mm:mt-0 mt-10 relative`,
  
    sectionInfo: `flex-1 ${styles.flexStart} flex-col`,
  };
  
  export default styles;