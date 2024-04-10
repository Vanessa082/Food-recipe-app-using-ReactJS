const Contactus = () => {
  return (
    <div className="section" id="contactUs">
      <div className="contactUs">
        <h1>
          Deliciousness to <br />
          your inbox
        </h1>
        <p>
          Enjoy weekly hand picked recipes <br />
          and recommendations
        </p>
        <form action="">
          <input type="text" placeholder="Email address" />
          <button>Join</button>
        </form>
        <small>
          By joining our newsletter you agree to our Terms and Conditions
        </small>
      </div>
    </div>
  );
};

export default Contactus