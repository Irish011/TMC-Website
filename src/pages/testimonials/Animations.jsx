import React, { useEffect } from "react";

function Animations() {
  useEffect(() => {
    const element = document.querySelector('.animations');
    const observer = new IntersectionObserver(entries => {
      element.classList.toggle('animation', entries[0].isIntersecting);
    });

    observer.observe(element);

    // return () => {
    //   observer.unobserve(element);
    // };
  }, []);

  return (
    <div className="main">

    <div className="animations">
    </div>
    </div>
  );
}

export default Animations;
