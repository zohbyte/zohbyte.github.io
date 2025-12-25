import React, {useEffect, useRef, useState} from "react";
import "./ScrollReveal.scss";

export default function ScrollReveal({children, delay = 0}) {
  const [isVisible, setIsVisible] = useState(false);
  const [hasBeenVisible, setHasBeenVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setHasBeenVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -100px 0px"
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`scroll-reveal ${isVisible ? "visible" : ""} ${hasBeenVisible ? "has-been-visible" : ""}`}
      style={{transitionDelay: `${delay}ms`}}
    >
      {children}
    </div>
  );
}

