
import { classNames } from "@/utils/className";
import Main from "./Main"
import { useState } from "react"

const CAROUSEL_IMAGES = [
  { url: '/images/banner-bg.png', id: 1, title: 'RESCUE 1', description: 'BONUS 1', text: 'WE ARE HERE FOR YOU 1' },
  { url: '/images/banner-bg.png', id: 2, title: 'RESCUE 2', description: 'BONUS 2', text: 'WE ARE HERE FOR YOU 2' },
  { url: '/images/banner-bg.png', id: 3, title: 'RESCUE 3', description: 'BONUS 3', text: 'WE ARE HERE FOR YOU 3' },
  { url: '/images/banner-bg.png', id: 4, title: 'RESCUE 4', description: 'BONUS 4', text: 'WE ARE HERE FOR YOU 4' },
]

const Slider = () => {
  const [activeSlide, setActiveSlide] = useState<number>(1);

  const totalSlides = CAROUSEL_IMAGES.length;

  const handleNextSlides = () => {
    if (activeSlide < totalSlides) {
      setActiveSlide((prev) => prev + 1)
    }
  }

  const handlePrevSlides = () => {
    if (activeSlide > 1) {
      setActiveSlide((prev) => prev - 1)
    }
  }

  return (
    <div id="default-carousel" className="relative w-full" data-carousel="slide">
      <div className="relative h-56 overflow-hidden rounded-lg md:h-96 flex flex-row">
        {
          CAROUSEL_IMAGES.map(({ id, url, title, text, description }, index) => {
            const key = id + index
            return (
              <Main key={key} imageUrl={url} isActive={activeSlide === id} title={title} description={description} text={text} />
            )
          })
        }
      </div>
      <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
        {
          CAROUSEL_IMAGES.map(({ id }, index) => {
            const key = id + index;
            return (
              <button key={key} type="button" onClick={() => setActiveSlide(id)} className={classNames("w-3 h-3 rounded-full", id === activeSlide ? 'bg-primary' : 'bg-slate-100')} aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
            )
          })
        }
      </div>
      <button onClick={handlePrevSlides} type="button" disabled={activeSlide === 1} className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>
      <button onClick={handleNextSlides} disabled={activeSlide === totalSlides} type="button" className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div >

  )

}

export default Slider;