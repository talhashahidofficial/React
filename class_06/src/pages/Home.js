import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

function Home() {
  return (
    <>
      <section
        id="product-slider"
        style={{
          width: "100vw",
          marginLeft: "calc(50% - 50vw)",
        }}
      >
        <Swiper
          spaceBetween={0}
          slidesPerView={1}
          loop={true}
          style={{
            width: "100%",
          }}
        >
          {/* Slide 1 */}
          <SwiperSlide>
            <div className="relative w-full">
              <img
                src="/assets/images/main-slider/5.jpg"
                alt="Women"
                className="w-full"
              />

              <div className="swiper-slide-content">
                <h2 className="text-3xl md:text-7xl font-bold text-white mb-2 md:mb-4">
                  Women
                </h2>

                <p className="mb-4 text-white md:text-2xl">
                  Experience the best in sportswear with <br />
                  our latest collection.
                </p>

                <button className="bg-primary text-white font-semibold px-4 py-2 rounded-full">
                  Shop now
                </button>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 2 */}
          <SwiperSlide>
            <div className="relative w-full">
              <img
                src="/assets/images/main-slider/2.png"
                alt="Men"
                className="w-full"
              />

              <div className="swiper-slide-content">
                <h2 className="text-3xl md:text-7xl font-bold text-white mb-2 md:mb-4">
                  Men
                </h2>

                <p className="mb-4 text-white md:text-2xl">
                  Discover the latest trends in Men's <br />
                  sportswear and casual fashion.
                </p>

                <button className="bg-white text-black font-semibold px-4 py-2 rounded-full">
                  Shop now
                </button>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 3 */}
          <SwiperSlide>
            <div className="relative w-full">
              <img
                src="/assets/images/main-slider/4.jpg"
                alt="Accessories"
                className="w-full"
              />

              <div className="swiper-slide-content">
                <h2 className="text-3xl md:text-7xl font-bold text-white mb-2 md:mb-4">
                  Accessories
                </h2>

                <p className="mb-4 text-white md:text-2xl">
                  Elevate your style with our latest <br />
                  sportswear collection.
                </p>

                <button className="bg-primary text-white font-semibold px-4 py-2 rounded-full">
                  Shop now
                </button>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
            {/* Product Banners */}
      <section id="product-banners">
        <div className="container mx-auto py-10">
          <div className="flex flex-wrap">

            {/* Men */}
            <div className="w-full sm:w-1/3 px-4 mb-8">
              <div className="relative overflow-hidden rounded-lg shadow-lg">
                <img
                  src="/assets/images/cat-image1.jpg"
                  alt="Men"
                  className="w-full h-auto"
                />

                <div className="absolute inset-0 bg-gray-light/50"></div>

                <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4">
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">
                    Men
                  </h2>

                  <button className="bg-primary text-white font-semibold px-4 py-2 rounded-full">
                    Shop now
                  </button>
                </div>
              </div>
            </div>

            {/* Women */}
            <div className="w-full sm:w-1/3 px-4 mb-8">
              <div className="relative overflow-hidden rounded-lg shadow-lg">
                <img
                  src="/assets/images/cat-image4.jpg"
                  alt="Women"
                  className="w-full h-auto"
                />

                <div className="absolute inset-0 bg-gray-light/50"></div>

                <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4">
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">
                    Women
                  </h2>

                  <button className="bg-primary text-white font-semibold px-4 py-2 rounded-full">
                    Shop now
                  </button>
                </div>
              </div>
            </div>

            {/* Accessories */}
            <div className="w-full sm:w-1/3 px-4 mb-8">
              <div className="relative overflow-hidden rounded-lg shadow-lg">
                <img
                  src="/assets/images/cat-image5.jpg"
                  alt="Accessories"
                  className="w-full h-auto"
                />

                <div className="absolute inset-0 bg-gray-light/50"></div>

                <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4">
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">
                    Accessories
                  </h2>

                  <button className="bg-primary text-white font-semibold px-4 py-2 rounded-full">
                    Shop now
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
      {/* Popular Products */}
      <section id="popular-products">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">
            Popular products
          </h2>

          <div className="flex flex-wrap -mx-4">

            {/* Product 1 */}
            <div className="w-full sm:w-1/2 lg:w-1/4 px-4 mb-8">
              <div className="bg-white p-3 rounded-lg shadow-lg">
                <img
                  src="/assets/images/products/1.jpg"
                  alt="Summer black dress"
                  className="w-full object-cover mb-4 rounded-lg"
                />

                <h3 className="text-lg font-semibold mb-2">
                  Summer black dress
                </h3>

                <p className="my-2">Women</p>

                <div className="flex items-center mb-4">
                  <span className="text-lg font-bold text-primary">
                    $19.99
                  </span>

                  <span className="text-sm line-through ml-2">
                    $24.99
                  </span>
                </div>

                <button className="bg-primary border border-transparent hover:bg-transparent hover:border-primary text-white hover:text-primary font-semibold py-2 px-4 rounded-full w-full">
                  Add to Cart
                </button>
              </div>
            </div>

            {/* Product 2 */}
            <div className="w-full sm:w-1/2 lg:w-1/4 px-4 mb-8">
              <div className="bg-white p-3 rounded-lg shadow-lg">
                <img
                  src="/assets/images/products/2.jpg"
                  alt="Black suit"
                  className="w-full object-cover mb-4 rounded-lg"
                />

                <h3 className="text-lg font-semibold mb-2">
                  Black suit
                </h3>

                <p className="my-2">Women</p>

                <div className="flex items-center mb-4">
                  <span className="text-lg font-bold text-gray-900">
                    $29.99
                  </span>
                </div>

                <button className="bg-primary border border-transparent hover:bg-transparent hover:border-primary text-white hover:text-primary font-semibold py-2 px-4 rounded-full w-full">
                  Add to Cart
                </button>
              </div>
            </div>

            {/* Product 3 */}
            <div className="w-full sm:w-1/2 lg:w-1/4 px-4 mb-8">
              <div className="bg-white p-3 rounded-lg shadow-lg">
                <img
                  src="/assets/images/products/3.jpg"
                  alt="Black long dress"
                  className="w-full object-cover mb-4 rounded-lg"
                />

                <h3 className="text-lg font-semibold mb-2">
                  Black long dress
                </h3>

                <p className="my-2">
                  Women, Accessories
                </p>

                <div className="flex items-center mb-4">
                  <span className="text-lg font-bold text-gray-900">
                    $15.99
                  </span>

                  <span className="text-sm line-through ml-2">
                    $19.99
                  </span>
                </div>

                <button className="bg-primary border border-transparent hover:bg-transparent hover:border-primary text-white hover:text-primary font-semibold py-2 px-4 rounded-full w-full">
                  Add to Cart
                </button>
              </div>
            </div>

            {/* Product 4 */}
            <div className="w-full sm:w-1/2 lg:w-1/4 px-4 mb-8">
              <div className="bg-white p-3 rounded-lg shadow-lg">
                <img
                  src="/assets/images/products/4.jpg"
                  alt="Black leather jacket"
                  className="w-full object-cover mb-4 rounded-lg"
                />

                <h3 className="text-lg font-semibold">
                  Black leather jacket
                </h3>

                <p className="my-2">Women</p>

                <div className="flex items-center mb-4">
                  <span className="text-lg font-bold text-primary">
                    $39.99
                  </span>

                  <span className="text-sm line-through ml-2">
                    $49.99
                  </span>
                </div>

                <button className="bg-primary border border-transparent hover:bg-transparent hover:border-primary text-white hover:text-primary font-semibold py-2 px-4 rounded-full w-full">
                  Add to Cart
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>
      {/* Latest Products */}
      <section id="latest-products" className="py-10">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">
            Latest products
          </h2>

          <div className="flex flex-wrap -mx-4">

            {/* Product 1 */}
            <div className="w-full sm:w-1/2 lg:w-1/4 px-4 mb-8">
              <div className="bg-white p-3 rounded-lg shadow-lg">
                <img
                  src="/assets/images/products/5.jpg"
                  alt="Blue women's suit"
                  className="w-full object-cover mb-4 rounded-lg"
                />

                <h3 className="text-lg font-semibold mb-2">
                  Blue women's suit
                </h3>

                <p className="my-2">Women</p>

                <div className="flex items-center mb-4">
                  <span className="text-lg font-bold text-primary">
                    $19.99
                  </span>
                  <span className="text-sm line-through ml-2">
                    $24.99
                  </span>
                </div>

                <button className="bg-primary border border-transparent hover:bg-transparent hover:border-primary text-white hover:text-primary font-semibold py-2 px-4 rounded-full w-full">
                  Add to Cart
                </button>
              </div>
            </div>

            {/* Product 2 */}
            <div className="w-full sm:w-1/2 lg:w-1/4 px-4 mb-8">
              <div className="bg-white p-3 rounded-lg shadow-lg">
                <img
                  src="/assets/images/products/6.jpg"
                  alt="White shirt with long sleeves"
                  className="w-full object-cover mb-4 rounded-lg"
                />

                <h3 className="text-lg font-semibold mb-2">
                  White shirt with long sleeves
                </h3>

                <p className="my-2">Women</p>

                <div className="flex items-center mb-4">
                  <span className="text-lg font-bold text-gray-900">
                    $29.99
                  </span>
                </div>

                <button className="bg-primary border border-transparent hover:bg-transparent hover:border-primary text-white hover:text-primary font-semibold py-2 px-4 rounded-full w-full">
                  Add to Cart
                </button>
              </div>
            </div>

            {/* Product 3 */}
            <div className="w-full sm:w-1/2 lg:w-1/4 px-4 mb-8">
              <div className="bg-white p-3 rounded-lg shadow-lg">
                <img
                  src="/assets/images/products/7.jpg"
                  alt="Yellow men's suit"
                  className="w-full object-cover mb-4 rounded-lg"
                />

                <h3 className="text-lg font-semibold mb-2">
                  Yellow men's suit
                </h3>

                <p className="my-2">Men</p>

                <div className="flex items-center mb-4">
                  <span className="text-lg font-bold text-gray-900">
                    $15.99
                  </span>
                  <span className="text-sm line-through ml-2">
                    $19.99
                  </span>
                </div>

                <button className="bg-primary border border-transparent hover:bg-transparent hover:border-primary text-white hover:text-primary font-semibold py-2 px-4 rounded-full w-full">
                  Add to Cart
                </button>
              </div>
            </div>

            {/* Product 4 */}
            <div className="w-full sm:w-1/2 lg:w-1/4 px-4 mb-8">
              <div className="bg-white p-3 rounded-lg shadow-lg">
                <img
                  src="/assets/images/products/8.jpg"
                  alt="Red dress"
                  className="w-full object-cover mb-4 rounded-lg"
                />

                <h3 className="text-lg font-semibold mb-2">
                  Red dress
                </h3>

                <p className="my-2">Women</p>

                <div className="flex items-center mb-4">
                  <span className="text-lg font-bold text-primary">
                    $39.99
                  </span>
                  <span className="text-sm line-through ml-2">
                    $49.99
                  </span>
                </div>

                <button className="bg-primary border border-transparent hover:bg-transparent hover:border-primary text-white hover:text-primary font-semibold py-2 px-4 rounded-full w-full">
                  Add to Cart
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>
{/* Brands Section */}
<section id="brands" className="bg-white py-16 px-4">
  <div className="container mx-auto max-w-screen-xl px-4">

    <div className="text-center mb-12">
      <h2 className="text-4xl md:text-5xl font-bold mb-4">
        Discover <span className="text-primary">Our Brands</span>
      </h2>

      <p className="my-7">
        Explore the top brands we feature in our store
      </p>
    </div>

    <Swiper
      spaceBetween={20}
      slidesPerView={2}
      loop={true}
      breakpoints={{
        640: {
          slidesPerView: 3,
        },
        768: {
          slidesPerView: 4,
        },
        1024: {
          slidesPerView: 5,
        },
      }}
    >
      <SwiperSlide>
        <div className="h-32 bg-gray-200 flex items-center justify-center rounded-md p-6">
          <img
            src="/assets/images/brands/html.svg"
            alt="HTML"
            className="max-h-full max-w-full"
          />
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="h-32 bg-gray-200 flex items-center justify-center rounded-md p-6">
          <img
            src="/assets/images/brands/js.svg"
            alt="JavaScript"
            className="max-h-full max-w-full"
          />
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="h-32 bg-gray-200 flex items-center justify-center rounded-md p-6">
          <img
            src="/assets/images/brands/laravel.svg"
            alt="Laravel"
            className="max-h-full max-w-full"
          />
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="h-32 bg-gray-200 flex items-center justify-center rounded-md p-6">
          <img
            src="/assets/images/brands/php.svg"
            alt="PHP"
            className="max-h-full max-w-full"
          />
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="h-32 bg-gray-200 flex items-center justify-center rounded-md p-6">
          <img
            src="/assets/images/brands/react.svg"
            alt="React"
            className="max-h-full max-w-full"
          />
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="h-32 bg-gray-200 flex items-center justify-center rounded-md p-6">
          <img
            src="/assets/images/brands/tailwind.svg"
            alt="Tailwind"
            className="max-h-full max-w-full"
          />
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="h-32 bg-gray-200 flex items-center justify-center rounded-md p-6">
          <img
            src="/assets/images/brands/typescript.svg"
            alt="TypeScript"
            className="max-h-full max-w-full"
          />
        </div>
      </SwiperSlide>
    </Swiper>

  </div>
</section>
{/* Banner Section */}
<section id="banner" className="relative my-16">
  <div
    className="container mx-auto px-4 py-20 rounded-lg relative bg-cover bg-center"
    style={{
      backgroundImage: "url('/assets/images/banner1.jpg')",
    }}
  >
    <div className="absolute inset-0 bg-black opacity-40 rounded-lg"></div>

    <div className="relative flex flex-col items-center justify-center text-center text-white py-20">
      <h2 className="text-4xl font-bold mb-4">
        Welcome to Our Shop
      </h2>

      <div className="flex flex-wrap justify-center gap-4">
        <button className="bg-primary hover:bg-transparent text-white hover:text-primary border border-transparent hover:border-primary font-semibold px-4 py-2 rounded-full">
          Shop Now
        </button>

        <button className="bg-primary hover:bg-transparent text-white hover:text-primary border border-transparent hover:border-primary font-semibold px-4 py-2 rounded-full">
          New Arrivals
        </button>

        <button className="bg-primary hover:bg-transparent text-white hover:text-primary border border-transparent hover:border-primary font-semibold px-4 py-2 rounded-full">
          Sale
        </button>
      </div>
    </div>
  </div>
</section>
{/* Blog Section */}
<section className="py-16">
  <div className="text-center mb-12">
    <h2 className="text-4xl md:text-5xl font-bold mb-4">
      Discover <span className="text-primary">Our</span> Blog
    </h2>

    <p className="my-7">
      Stay updated with the latest trends, tips, and stories in the world of fashion
    </p>
  </div>

  <div className="container mx-auto px-5">
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

      {/* Blog 1 */}
      <div className="flex flex-col p-6 bg-white rounded-xl shadow-lg">
        <img
          className="object-cover w-full h-64 mb-8 rounded-xl"
          src="/assets/images/fashion-trends.jpg"
          alt="Fashion Trends"
        />

        <h3 className="mb-2 text-xs font-semibold tracking-widest text-primary uppercase">
          Fashion Trends
        </h3>

        <h2 className="mb-4 text-2xl font-semibold">
          Latest Shirt Trends for 2024
        </h2>

        <p className="flex-grow">
          Explore the hottest shirt trends of 2024. From bold prints to classic
          styles, stay ahead of the fashion curve with our expert insights.
        </p>

        <div className="mt-8">
          <button className="bg-primary border border-transparent hover:bg-transparent hover:border-primary text-white hover:text-primary font-semibold py-2 px-4 rounded-full">
            Read more
          </button>
        </div>
      </div>

      {/* Blog 2 */}
      <div className="flex flex-col p-6 bg-white rounded-xl shadow-lg">
        <img
          className="object-cover w-full h-64 mb-8 rounded-xl"
          src="/assets/images/stylisng-tips.jpg"
          alt="Styling Tips"
        />

        <h3 className="mb-2 text-xs font-semibold tracking-widest text-primary uppercase">
          Styling Tips
        </h3>

        <h2 className="mb-4 text-2xl font-semibold">
          How to Style Your Shirt for Any Occasion
        </h2>

        <p className="flex-grow">
          Learn how to style your shirt for different occasions, whether it's
          a casual day out or a formal event. Get tips from fashion experts.
        </p>

        <div className="mt-8">
          <button className="bg-primary border border-transparent hover:bg-transparent hover:border-primary text-white hover:text-primary font-semibold py-2 px-4 rounded-full">
            Read more
          </button>
        </div>
      </div>

      {/* Blog 3 */}
      <div className="flex flex-col p-6 bg-white rounded-xl shadow-lg">
        <img
          className="object-cover w-full h-64 mb-8 rounded-xl"
          src="/assets/images/customer-stories.jpg"
          alt="Customer Stories"
        />

        <h3 className="mb-2 text-xs font-semibold tracking-widest text-primary uppercase">
          Customer Stories
        </h3>

        <h2 className="mb-4 text-2xl font-semibold">
          Real Stories from Our Happy Customers
        </h2>

        <p className="flex-grow">
          Read about the experiences of our customers. Discover how our shirts
          have made a difference in their lives and their personal style.
        </p>

        <div className="mt-8">
          <button className="bg-primary border border-transparent hover:bg-transparent hover:border-primary text-white hover:text-primary font-semibold py-2 px-4 rounded-full">
            Read more
          </button>
        </div>
      </div>

    </div>
  </div>
</section>
{/* Subscribe Section */}
<section
  id="subscribe"
  className="py-10 lg:py-24 bg-white border-t border-gray-line"
>
  <div className="container mx-auto px-4">
    <div className="flex flex-col items-center">

      <div className="mb-8 text-center">
        <h2 className="text-xl font-bold sm:text-2xl lg:text-3xl">
          Join our newsletter and{" "}
          <span className="text-primary">
            get $50 discount
          </span>{" "}
          for your first order
        </h2>
      </div>

      <div className="w-full max-w-xl">
        <form
          className="flex gap-2"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="email"
            placeholder="Enter your email address"
            className="w-full flex-1 rounded-full px-4 py-3 border border-gray-300 text-gray-700 placeholder-gray-500 focus:outline-none focus:border-primary"
          />

          <button
            type="submit"
            className="bg-primary border border-primary hover:bg-transparent text-white hover:text-primary font-semibold py-3 px-6 rounded-full"
          >
            Subscribe
          </button>
        </form>
      </div>

    </div>
  </div>
</section>



    </>
  );
}

export default Home;
