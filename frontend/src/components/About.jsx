import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
const About = () => {
  const leftBoxControls = useAnimation();
  const rightBoxControls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const scrollY = window.scrollY;
      const leftBoxElement = document.getElementById('left-box');
      const rightBoxElement = document.getElementById('right-box');

      if (leftBoxElement && rightBoxElement) {
        const leftBoxOffset = leftBoxElement.getBoundingClientRect().top;
        const rightBoxOffset = rightBoxElement.getBoundingClientRect().top;

        // Calculate when to start the animations based on element positions and scroll position
        if (scrollY + windowHeight * 0.8 >= leftBoxOffset) {
          leftBoxControls.start({ opacity: 1, x: 0 });
        }
        if (scrollY + windowHeight * 0.8 >= rightBoxOffset) {
          rightBoxControls.start({ opacity: 1, x: 0 });
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [leftBoxControls, rightBoxControls]);

  return (
    <div className="p-6 bg-[#EEEEEE] h-screen w-screen">
      <div className="w-50px">
        <h1 className="text-6xl text-[#053B50] font-bold text-center mb-8">
          ABOUT US
        </h1>
        <motion.div
          id="left-box"
          initial={{ opacity: 0, x: -100 }}
          animate={leftBoxControls}
          className="bg-[#279EFF] text-white rounded-lg p-4 max-w-lg mx-auto"
          transition={{ duration: 1 }} // Add this for slower animations
        >
          <p className="text-lg mb-0">
            At VaultSign, we are passionate about revolutionizing the legal
            industry through cutting-edge technology. Our team comprises
            experienced professionals who understand the challenges and
            complexities of the legal domain, and we are committed to providing
            innovative solutions to address them.
          </p>
        </motion.div>
      </div>
      <div className="w-50px mt-5">
        <motion.div
          id="right-box"
          initial={{ opacity: 0, x: 100 }}
          animate={rightBoxControls}
          className="bg-[#176B87] text-white rounded-lg p-4 max-w-lg mx-auto float-right"
          transition={{ duration: 1 }} // Add this for slower animations
        >
          <h2 className="text-4xl font-semibold mb-4">Our Mission</h2>
          <p className="text-lg text-[#64CCC5] mb-6">
            Our mission is to transform the way legal records are managed and
            accessed. We believe that everyone should have secure, transparent,
            and convenient access to their legal records. With this vision in
            mind, we have developed a blockchain-based eVault system for all
            stakeholders.
          </p>
        </motion.div>
      </div>
      <div className="w-50px mt-5">
        <motion.div
          id="right-box"
          initial={{ opacity: 0, x: -100 }}
          animate={leftBoxControls}
          className="bg-[#64CCC5] text-white rounded-lg p-4 max-w-lg mx-auto float-left"
          transition={{ duration: 1 }} // Add this for slower animations
        >
          <h2 className="text-4xl text-[#2A2F4F] font-semibold mb-4">
            Our Vision
          </h2>
          <p className="text-lg text-[#424874] mb-6">
            We envision a future where legal records are seamlessly managed,
            stored, and shared, ultimately leading to a more accessible and
            efficient legal system. By harnessing the power of blockchain
            technology and smart contracts, we aim to make this vision a
            reality.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
