const { useState, useEffect } = React;

/**
 *
 *
 * @param {string} icon
 * @param {string} title
 * @param {string} description
 * @param {string} metric
 * @param {string} value
 * @param {string} badge
 * @param {string} badgeType
 */
function ServiceCard({
  icon,
  title,
  description,
  metric,
  value,
  badge,
  badgeType,
}) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`service-card ${isVisible ? "visible" : ""}`}>
      {badge && <div className={`card-badge badge-${badgeType}`}>{badge}</div>}

      <div className="card-content">
        <div className="icon-container">
          <i className={icon}></i>
        </div>

        <h3 className="card-title">{title}</h3>

        <p className="card-description">{description}</p>

        <div className="card-footer">
          <div className="stat-item">
            <span className="stat-label">{metric}</span>
            <span className="stat-value">{value}</span>
          </div>

          <a href="#" className="card-action">
            Learn More
            <i className="fas fa-arrow-right"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

function App() {
  const services = [
    {
      icon: "fas fa-code",
      title: "Web Development",
      description:
        "Building scalable, performant web applications using modern frameworks and best practices. Full-stack solutions with React, Node.js, and cloud infrastructure.",
      metric: "Projects",
      value: "150+",
      badge: "Featured",
      badgeType: "featured",
    },
    {
      icon: "fas fa-mobile-alt",
      title: "Mobile Solutions",
      description:
        "Native and cross-platform mobile applications for iOS and Android. Delivering exceptional user experiences with React Native and Flutter.",
      metric: "Apps Built",
      value: "80+",
      badge: "New",
      badgeType: "new",
    },
    {
      icon: "fas fa-brain",
      title: "AI Integration",
      description:
        "Implementing artificial intelligence and machine learning solutions. From natural language processing to computer vision and predictive analytics.",
      metric: "Models",
      value: "45+",
      badge: "Premium",
      badgeType: "premium",
    },
    {
      icon: "fas fa-shield-alt",
      title: "Cybersecurity",
      description:
        "Comprehensive security audits, penetration testing, and secure architecture design. Protecting your digital assets with enterprise-grade solutions.",
      metric: "Audits",
      value: "200+",
      badge: "Featured",
      badgeType: "featured",
    },
    {
      icon: "fas fa-cloud",
      title: "Cloud Architecture",
      description:
        "Designing and deploying cloud-native solutions on AWS, Azure, and GCP. Scalable infrastructure with microservices and containerization.",
      metric: "Deployments",
      value: "300+",
      badge: "Premium",
      badgeType: "premium",
    },
    {
      icon: "fas fa-chart-line",
      title: "Data Analytics",
      description:
        "Transform raw data into actionable insights with advanced analytics, visualization, and business intelligence solutions powered by modern tools.",
      metric: "Insights",
      value: "500+",
      badge: "New",
      badgeType: "new",
    },
  ];

  return (
    <div className="app-container">
      <header className="header">
        <div className="header-subtitle">Professional Services</div>
        <h1>Cutting-Edge Technology Solutions</h1>
        <p className="header-description">
          Delivering innovative digital experiences with expertise in modern
          technologies, architecture patterns, and industry best practices.
        </p>
      </header>

      <div className="services-grid">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            icon={service.icon}
            title={service.title}
            description={service.description}
            metric={service.metric}
            value={service.value}
            badge={service.badge}
            badgeType={service.badgeType}
          />
        ))}
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

document.addEventListener("DOMContentLoaded", () => {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  }, observerOptions);

  document.querySelectorAll(".service-card").forEach((card) => {
    card.style.opacity = "0";
    card.style.transform = "translateY(30px)";
    card.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    observer.observe(card);
  });
});
