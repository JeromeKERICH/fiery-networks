import { Link } from 'react-router-dom';
import "./styles/Courses.css"

const courses = [

  {
    title: "Social Media Copywriting Mastery Course",
    description: "Learn how to write compelling copy that resonates with your audience across social media platforms.",
    link: "/social" 
  },
  {
    title: "WhatsApp LinkedIn Courses (Short Courses, 10 Sessions)",
    description: "Quick, actionable lessons on leveraging WhatsApp and LinkedIn for business growth.",
    link: "/whatsapp" 
  },
  
];

const CourseSection = () => {
  return (
    <section className="course-section">
      <h1>My Courses </h1>
      <p>
        Courses That Ignite Your Growth: Learn, Implement, and Level Up with Fiery Network
      </p>

      <div className="course-cards">
        {courses.map((course, index) => (
          <div key={index} className="course-card">
            <h2>{course.title}</h2>
            <p>{course.description}</p>
            <Link to={course.link}> 
              <button className="learn-more-btn">Learn More</button>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CourseSection;
