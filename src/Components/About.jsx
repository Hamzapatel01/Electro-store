import './AboutUs.css'; 

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <div className="about-us-header">
        <h1>About Us</h1>
      </div>
      <div className="about-us-content">
        <p>
          Welcome to our e-commerce store! We are passionate about providing the best products and services to our customers.
        </p>
        <p>
          Our mission is to deliver high-quality products that meet the diverse needs of our customers. We believe in customer satisfaction, transparency, and innovation. We strive to create a seamless shopping experience, ensuring that our customers receive the best products at competitive prices.
        </p>
        <p>
          We source our products from trusted suppliers and are committed to ethical business practices. Our team is dedicated to offering exceptional customer service and support. Thank you for choosing to shop with us!
        </p>
        <h2>Our Values</h2>
        <ul>
          <li><strong>Customer Satisfaction:</strong> Our top priority is to ensure that our customers are happy with their purchases.</li>
          <li><strong>Quality Products:</strong> We provide products that meet the highest standards of quality and durability.</li>
          <li><strong>Innovation:</strong> We continually update our product range to include the latest trends and technologies.</li>
          <li><strong>Integrity:</strong> We operate with honesty and transparency in all our dealings.</li>
          <li><strong>Community:</strong> We believe in giving back to the community and supporting charitable causes.</li>
        </ul>
      </div>
      <div className="about-us-footer">
        <h2>Contact Us</h2>
        <p>If you have any questions or feedback, feel free to reach out to our customer service team at <a href="mailto:support@electrostore.com">support@electrostore.com</a>.</p>
      </div>
    </div>
  );
};

export default AboutUs;
