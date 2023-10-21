

const SocialMediaIcons = () => {
    return (
      <div className="flex justify-center md:justify-start my-10 gap-7 ">
        <a
          className="hover:opacity-50 transition duration-500 bg-black"
          href="https://www.linkedin.com"
          target="_blank"
          rel="noreferrer"
        >
          <img src ={require('../assets/linkedin.png')}   alt="linkedin-link" />
        </a>
        <a
          className="hover:opacity-50 transition duration-500  bg-black"
          href="https://www.twitter.com"
          target="_blank"
          rel="noreferrer"
        >
           <img src ={require('../assets/twitter.png')}   alt="twitter-link" />
        </a>
        <a
          className="hover:opacity-50 transition duration-500  bg-black"
          href="https://www.facebook.com"
          target="_blank"
          rel="noreferrer"
        >
        <img src ={require('../assets/facebook.png')}   alt="facebook-link" />
        </a>
        <a
          className="hover:opacity-50 transition duration-500  bg-black"
          href="https://www.instagram.com"
          target="_blank"
          rel="noreferrer"
        >
          <img src ={require('../assets/instagram.png')}   alt="instragram-link" />
        </a>
      </div>
    );
  };
  
  export default SocialMediaIcons;