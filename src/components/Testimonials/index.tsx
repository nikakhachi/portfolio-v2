import styles from "./styles.module.css";
import { FC, forwardRef } from "react";
import Testimonial from "./testimonial";
import testimonials from "../../data/testimonials";

interface TestimonialsProps extends React.RefAttributes<HTMLDivElement> {}

export const Testimonials: FC<TestimonialsProps> = forwardRef((_, ref) => {
  return (
    <div ref={ref} className={styles.container}>
      <h3 className={styles.title}>Testimonials</h3>
      <hr />
      <div className={styles.testimonialsContainer}>
        {testimonials.map((testimonial, index) => (
          <Testimonial
            key={index}
            author={testimonial.author}
            authorUrl={testimonial.authorUrl}
            company={testimonial.company}
            companyUrl={testimonial.companyUrl}
            photo={window.location.href + testimonial.photo}
            testimonial={testimonial.testimonial}
            position={testimonial.position}
          />
        ))}
      </div>
    </div>
  );
});
