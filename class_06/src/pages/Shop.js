import React from "react";

function Shop() {
  const products = [
    {
      image: "/assets/images/products/5.jpg",
      name: "Blue women's suit",
      category: "Women",
      price: "$19.99",
      oldPrice: "$24.99",
      sale: true,
    },
    {
      image: "/assets/images/products/6.jpg",
      name: "White shirt with long sleeves",
      category: "Women",
      price: "$29.99",
    },
    {
      image: "/assets/images/products/7.jpg",
      name: "Yellow men's suit",
      category: "Men",
      price: "$15.99",
      oldPrice: "$19.99",
      sale: true,
    },
    {
      image: "/assets/images/products/8.jpg",
      name: "Red dress",
      category: "Women",
      price: "$39.99",
      oldPrice: "$49.99",
      sale: true,
    },
    {
      image: "/assets/images/products/4.jpg",
      name: "Black leather jacket",
      category: "Women",
      price: "$39.99",
      oldPrice: "$49.99",
      sale: true,
    },
    {
      image: "/assets/images/products/3.jpg",
      name: "Black long dress",
      category: "Women, Accessories",
      price: "$15.99",
      oldPrice: "$19.99",
    },
  ];

  return (
    <>
      {/* Shop */}
      <section id="shop">
        <div className="container mx-auto px-4">

          {/* Top Filter */}
          <div className="flex flex-col md:flex-row justify-between items-center py-4">

            <div className="flex items-center space-x-4">
              <button className="bg-primary text-white hover:bg-transparent hover:text-primary border hover:border-primary py-2 px-4 rounded-full">
                Show On Sale
              </button>

              <button className="bg-primary text-white hover:bg-transparent hover:text-primary border hover:border-primary py-2 px-4 rounded-full">
                List View
              </button>

              <button className="bg-primary text-white hover:bg-transparent hover:text-primary border hover:border-primary py-2 px-4 rounded-full">
                Grid View
              </button>
            </div>

            <div className="flex mt-5 md:mt-0 space-x-4">
              <div className="relative">
                <select className="block appearance-none bg-white border hover:border-primary px-4 py-2 pr-8 rounded-full shadow focus:outline-none">
                  <option>Sort by Latest</option>
                  <option>Sort by Popularity</option>
                  <option>Sort by A-Z</option>
                </select>
              </div>
            </div>
          </div>

          {/* Mobile Filter Button */}
          <div className="block md:hidden text-center mb-4">
            <button className="bg-primary text-white py-2 px-4 rounded-full">
              Show Filters
            </button>
          </div>

          <div className="flex flex-col md:flex-row">

            {/* Filters */}
            <div className="w-full md:w-1/4 p-4 hidden md:block">

              {/* Category */}
              <div className="mb-6 pb-8 border-b border-gray-line">
                <h3 className="text-lg font-semibold mb-6">
                  Category
                </h3>

                <div className="space-y-2">
                  <label className="flex items-center">
                    <input type="checkbox" className="form-checkbox custom-checkbox" />
                    <span className="ml-2">T-Shirts</span>
                  </label>

                  <label className="flex items-center">
                    <input type="checkbox" className="form-checkbox custom-checkbox" />
                    <span className="ml-2">Hoodies</span>
                  </label>

                  <label className="flex items-center">
                    <input type="checkbox" className="form-checkbox custom-checkbox" />
                    <span className="ml-2">Accessories</span>
                  </label>
                </div>
              </div>

              {/* Size */}
              <div className="mb-6 pb-8 border-b border-gray-line">
                <h3 className="text-lg font-semibold mb-6">
                  Size
                </h3>

                <div className="space-y-2">
                  <label className="flex items-center">
                    <input type="checkbox" className="form-checkbox custom-checkbox" />
                    <span className="ml-2">S (30)</span>
                  </label>

                  <label className="flex items-center">
                    <input type="checkbox" className="form-checkbox custom-checkbox" />
                    <span className="ml-2">M (44)</span>
                  </label>

                  <label className="flex items-center">
                    <input type="checkbox" className="form-checkbox custom-checkbox" />
                    <span className="ml-2">L (22)</span>
                  </label>
                </div>
              </div>

              {/* Color */}
              <div className="mb-6 pb-8 border-b border-gray-line">
                <h3 className="text-lg font-semibold mb-6">
                  Color
                </h3>

                <div className="space-y-2">
                  <label className="flex items-center">
                    <input type="checkbox" className="form-checkbox custom-checkbox" />
                    <span className="ml-2">Red</span>
                  </label>

                  <label className="flex items-center">
                    <input type="checkbox" className="form-checkbox custom-checkbox" />
                    <span className="ml-2">Blue</span>
                  </label>

                  <label className="flex items-center">
                    <input type="checkbox" className="form-checkbox custom-checkbox" />
                    <span className="ml-2">Green</span>
                  </label>
                </div>
              </div>

              {/* Brand */}
              <div className="mb-6 pb-8 border-b border-gray-line">
                <h3 className="text-lg font-semibold mb-6">
                  Brand
                </h3>

                <div className="space-y-2">
                  <label className="flex items-center">
                    <input type="checkbox" className="form-checkbox custom-checkbox" />
                    <span className="ml-2">Nike</span>
                  </label>

                  <label className="flex items-center">
                    <input type="checkbox" className="form-checkbox custom-checkbox" />
                    <span className="ml-2">Adidas</span>
                  </label>

                  <label className="flex items-center">
                    <input type="checkbox" className="form-checkbox custom-checkbox" />
                    <span className="ml-2">Puma</span>
                  </label>
                </div>
              </div>

              {/* Rating */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-6">
                  Rating
                </h3>

                <div className="space-y-2">
                  <label className="flex items-center">
                    <input type="checkbox" className="form-checkbox custom-checkbox" />
                    <span className="ml-2">★★★★★</span>
                  </label>

                  <label className="flex items-center">
                    <input type="checkbox" className="form-checkbox custom-checkbox" />
                    <span className="ml-2">★★★★☆</span>
                  </label>

                  <label className="flex items-center">
                    <input type="checkbox" className="form-checkbox custom-checkbox" />
                    <span className="ml-2">★★★☆☆</span>
                  </label>
                </div>
              </div>

            </div>

            {/* Products */}
            <div className="w-full md:w-3/4 p-4">

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

                {products.map((product, index) => (
                  <div
                    key={index}
                    className="bg-white p-4 rounded-lg shadow"
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full object-cover mb-4 rounded-lg"
                    />

                    <button className="text-lg font-semibold mb-2 text-left hover:text-primary">
                      {product.name}
                    </button>

                    <p className="my-2">
                      {product.category}
                    </p>

                    <div className="flex items-center mb-4">
                      <span className="text-lg font-bold text-primary">
                        {product.price}
                      </span>

                      {product.oldPrice && (
                        <span className="text-sm line-through ml-2">
                          {product.oldPrice}
                        </span>
                      )}
                    </div>

                    <button className="bg-primary border border-transparent hover:bg-transparent hover:border-primary text-white hover:text-primary font-semibold py-2 px-4 rounded-full w-full">
                      Add to Cart
                    </button>
                  </div>
                ))}

              </div>

              {/* Pagination */}
              <div className="flex justify-center mt-8 mb-10">
                <nav aria-label="Page navigation">
                  <ul className="inline-flex space-x-2">

                    <li>
                      <button className="bg-primary text-white w-10 h-10 flex items-center justify-center rounded-full">
                        1
                      </button>
                    </li>

                    <li>
                      <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-primary hover:text-white">
                        2
                      </button>
                    </li>

                    <li>
                      <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-primary hover:text-white">
                        3
                      </button>
                    </li>

                    <li>
                      <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-primary hover:text-white">
                        Next
                      </button>
                    </li>

                  </ul>
                </nav>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Shop Category Description */}
      <section id="shop-category-description" className="py-8">
        <div className="container mx-auto px-4">

          <div className="bg-white p-6 rounded-lg shadow-lg">

            <h2 className="text-2xl font-bold mb-4">
              Shirts Category
            </h2>

            <p className="mb-4">
              Discover our wide range of shirts, perfect for any occasion.
              Whether you're looking for something casual or formal, we have
              the perfect shirt for you. Our collection includes a variety of
              styles, colors, and sizes to suit everyone's taste.
            </p>

            <p>
              Browse through our selection and find your new favorite shirt
              today. All our shirts are made from high-quality materials and
              are designed to provide both comfort and style. Shop now and
              elevate your wardrobe with our premium shirts.
            </p>

          </div>

        </div>
      </section>
    </>
  );
}

export default Shop;
