function banner() {
  return (
    <div className="hero py-20">
      <div className="w-full flex flex-row-reverse justify-between">
        <img src="./images/honda1.png" className="max-w-sm rounded-lg " />
        <div>
          <p>
            Computer-controlled digital transistorized with electronic advance
          </p>
          <h1 className="text-5xl font-bold">Honda CBR 300R</h1>
          <p className="py-6 max-w-md">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
          <button className="btn bg-[#E76F51]">Get Started</button>
        </div>
      </div>
    </div>
  );
}

export default banner;
