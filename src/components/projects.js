import * as React from "react";
// import ProyectReact from "../images/project-reactjs.png";
import Card from "./proyects.card";
import data from "../data/index";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
/* https://www.npmjs.com/package/react-multi-carousel */

export default function Projects() {
  return (
    /* container mx-auto text-white flex flex-col gap-x-4 justify-center items-center mb-8 */
    <article className="container mx-auto">
      <h3 className="flex justify-center items-center font-bold text-3xl text-white">
        {" "}
        <span className="text-[#63B8EA]"> {"{ "}</span>PROJECTS
        <span className="text-[#63B8EA]"> {" }"}</span>
      </h3>

      <Carousel
        additionalTransfrom={0}
        arrows
        autoPlaySpeed={3000}
        centerMode={false}
        className=""
        containerClass="container-with-dots"
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1024,
            },
            items: 3,
            partialVisibilityGutter: 40,
          },
          mobile: {
            breakpoint: {
              max: 464,
              min: 0,
            },
            items: 1,
            partialVisibilityGutter: 30,
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 464,
            },
            items: 2,
            partialVisibilityGutter: 30,
          },
        }}
        showDots={false}
        sliderClass=""
        slidesToSlide={1}
        swipeable
      >
        {data.map((proyect, index) => {
          return <Card {...proyect} key={index} />;
        })}
      </Carousel>
    </article>
  );
}
