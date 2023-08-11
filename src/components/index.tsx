import { useEffect, useRef, useState } from "react";
import { Main } from "./Main";
import { Projects } from "./Projects";
import { Navigation } from "./Navigation";
import { Testimonials } from "./Testimonials";
import { Contact } from "./Contact";
import { useTransition } from "react-spring";
import { LoadingScreen } from "./LoadingScreen";
import { Appbar } from "./Appbar";
import { Partnerships } from "./Partnerships";

function MainView() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const transition = useTransition(isLoading, {
    from: { opacity: 1 },
    enter: {
      opacity: 1,
      position: "fixed",
      width: "100%",
      height: "100%",
      backgroundColor: "#082739",
      zIndex: 1000,
      color: "white",
    },
    leave: { opacity: 0 },
    config: { duration: 1000 },
  });

  const aboutRef = useRef<any>(null);
  const contactRef = useRef<any>(null);
  const projectsRef = useRef<any>(null);
  const testimonialsRef = useRef<any>(null);
  const partnershipsRef = useRef<any>(null);

  const listenToScroll = () => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;

    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    const scrolled = winScroll / height;

    setScrollPosition(scrolled);
  };

  useEffect(() => {
    const body = document.body;
    body.style.overflowY = "hidden";
    setTimeout(() => {
      setIsLoading(false);
      body.style.overflowY = "scroll";
    }, 500);
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, []);

  const scrollToContact = () => {
    contactRef.current.scrollIntoView({ block: "end", behavior: "smooth" });
  };
  const scrollToAbout = () => {
    aboutRef.current.scrollIntoView({ block: "end", behavior: "smooth" });
  };
  const scrollToProjects = () => {
    projectsRef.current.scrollIntoView({ block: "start", behavior: "smooth" });
  };
  const scrollToTestimonials = () => {
    testimonialsRef.current.scrollIntoView({
      block: "start",
      behavior: "smooth",
    });
  };
  const scrollToPartnerships = () => {
    partnershipsRef.current.scrollIntoView({
      block: "start",
      behavior: "smooth",
    });
  };

  return (
    <>
      <Appbar />
      <LoadingScreen transition={transition} />
      <Main ref={aboutRef} />
      <Navigation
        scrollPosition={scrollPosition}
        scrolls={{
          scrollToContact,
          scrollToProjects,
          scrollToTestimonials,
          scrollToAbout,
          scrollToPartnerships,
        }}
      />
      <Partnerships ref={partnershipsRef} />
      <Testimonials ref={testimonialsRef} />
      <Projects scrollToStart={scrollToProjects} ref={projectsRef} />
      <Contact ref={contactRef} />
    </>
  );
}

export default MainView;
