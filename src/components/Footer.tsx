import FoooterLogo from "../assets/logo-footer.png";

export default function Footer() {
  return (
    <>
      {/* ---------------- Newsletter Section ---------------- */}
      <div
        className="
          relative top-[80px] sm:top-[100px] lg:top-[150px]
          -mt-[80px] sm:-mt-[100px] lg:-mt-[100px]
          mx-auto
          w-[85%] sm:w-[80%] lg:w-[70%]
          min-h-66
          rounded-2xl
          px-5 sm:px-8 lg:px-10
          py-8
          flex flex-col
          gap-5
          items-center
          justify-center
          text-center
          bg-cover bg-center
          bg-[linear-gradient(45deg,#a855f7_0%,#ffffff_50%,#a855f7_100%)]
          outline outline-2 outline-white outline-offset-4 sm:outline-offset-6 lg:outline-offset-10
        "
      >
        <h3 className="text-2xl sm:text-3xl font-bold">
          Subscribe to our Newsletter
        </h3>

        <p className="text-sm sm:text-base">
          Get the latest updates and news right in your inbox!
        </p>

        <div
          className="
            w-full sm:w-auto
            flex flex-col sm:flex-row
            justify-center
            gap-2.5
          "
        >
          <input
            type="email"
            placeholder="Enter your email"
            className="
              w-full sm:w-64 lg:w-72
              border border-gray-500
              pl-3 pr-3
              py-2
              rounded-md
              outline-none
            "
          />

          <button className="btn btn-secondary w-full sm:w-auto">
            Subscribe
          </button>
        </div>
      </div>

      {/* ---------------- Footer Section ---------------- */}
      <footer className="bg-[#06091A] text-gray-400">
        <div
          className="
            flex flex-col
            gap-10
            items-center
            pt-32 sm:pt-40 lg:pt-50
            pb-8
            px-5
          "
        >
          <img
            src={FoooterLogo}
            alt="Footer Logo"
            className="h-24 w-24 sm:h-28 sm:w-28"
          />

          <div
            className="
              w-full max-w-6xl
              flex flex-col
              lg:flex-row
              gap-10 lg:gap-20
              justify-between
            "
          >
            {/* Left Side */}
            <div
              className="
                flex flex-col
                sm:flex-row
                gap-10 sm:gap-16 lg:gap-32
              "
            >
              {/* About Us */}
              <div>
                <h3 className="text-xl font-bold pb-2.5 text-white">
                  About Us
                </h3>

                <p>We are a passionate team</p>
                <p>dedicated to providing the best</p>
                <p>services to our customers</p>
              </div>

              {/* Quick Links */}
              <div>
                <h3 className="text-xl font-bold pb-2.5 text-white">
                  Quick Links
                </h3>

                <ul className="list-disc list-inside space-y-1">
                  <li>Home</li>
                  <li>Services</li>
                  <li>About</li>
                  <li>Contract</li>
                </ul>
              </div>
            </div>

            {/* Subscribe */}
            <div className="w-full lg:w-auto">
              <h3 className="text-xl font-bold pb-2.5 text-white">Subscribe</h3>

              <p className="max-w-md">
                Subscribe to our newsletter for the latest updates.
              </p>

              <div className="flex mt-5 w-full max-w-md">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="
                    min-w-0
                    flex-1
                    border-none
                    bg-white
                    text-gray-500
                    pl-3
                    py-2
                    rounded-l-md
                    outline-none
                  "
                />

                <button
                  className="
                    btn btn-secondary
                    rounded-l-none
                    whitespace-nowrap
                  "
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        <hr className="border-gray-400" />

        <p className="text-center py-5 px-4 text-sm sm:text-base">
          @2024 Your Company All Rights Reserved.
        </p>
      </footer>
    </>
  );
}
