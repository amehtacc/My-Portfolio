import React from "react";

function Footer() {
  return (
    <footer className="w-full text-center text-white">
      <div
        id="contact"
        className="w-full px-10 md:px-[100px] lg:px-[180px] py-[80px] bg-[#111827]"
      >
        <h2 className="text-center text-white text-[1.75rem] sm:text-[1.875rem] font-bold mb-[5rem]">
          Contact
        </h2>
        <div
          className="w-full flex justify-center items-center"
          dangerouslySetInnerHTML={{
            __html: `
              <form name="contact" method="POST" data-netlify="true">
                <input type="hidden" name="form-name" value="contact" />
                <div>
                  <label class="block text-base sm:text-lg font-semibold text-left" for="fullname">Fullname</label>
                  <input class="w-[18rem] sm:w-[30rem] h-9 sm:h-10 mt-1 mb-6 text-white p-2 font-medium rounded-tr-2xl rounded-bl-2xl outline-none bg-[#656570]/80" id="fullname" name="fullname" type="text" required />
                </div>
                <div>
                  <label class="block text-base sm:text-lg font-semibold text-left" for="email">Email</label>
                  <input class="w-[18rem] sm:w-[30rem] h-9 sm:h-10 mt-1 mb-6 text-white p-2 font-medium rounded-tr-2xl rounded-bl-2xl outline-none bg-[#656570]/80" id="email" name="email" type="email" required />
                </div>
                <div>
                  <label class="block text-base sm:text-lg font-semibold text-left" for="mobile-number">Mobile Number</label>
                  <input class="w-[18rem] sm:w-[30rem] h-9 sm:h-10 mt-1 mb-6 text-white p-2 font-medium rounded-tr-2xl rounded-bl-2xl outline-none bg-[#656570]/80" id="mobile-number" name="mobile-number" type="text" required />
                </div>
                <div>
                  <label class="block text-lg font-semibold text-left" for="message">Message</label>
                  <textarea class="w-full h-20 mt-1 mb-6 text-white p-2 font-medium rounded-tr-2xl rounded-bl-2xl outline-none bg-[#656570]/80" name="message" id="message" required></textarea>
                </div>
                <button class="text-[#090912] w-[40%] sm:w-[30%] h-10 sm:h-12 text-[1rem] sm:text-[1.2rem] font-semibold p-[0.3rem] bg-gradient-to-br from-[#0bcaff] to-[#ffffff] hover:bg-none hover:text-white hover:border-2 border-white cursor-pointer rounded-[2rem] text-center" type="submit">
                  Submit
                </button>
              </form>
            `,
          }}
        ></div>
      </div>

      <div className="h-12 flex justify-center items-center">
        <p>
          Build with ❤️ by <a href="#">Aryan Mehta</a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
