import "../../styles/Reviews.css";
import { getReviews } from "../../api/reviewApi";
import { useEffect, useState } from "react";
import React from "react";
import { marked } from "marked";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getReviews();
        setReviews(data);
      } catch (err) {
        console.error("Error loading reviews");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="overlay-loader">
        <div className="loader" />
      </div>
    );
  }

  const getSeverityClass = (severity) => {
    switch (severity?.toLowerCase()) {
      case "critical":
        return "badge-critical";
      case "medium":
        return "badge-medium";
      case "normal":
        return "badge-normal";
      default:
        return "badge-default";
    }
  };

  return (
    <div className="reviews-page">
      <h2 className="page-title">Pull Request Reviews</h2>
      {reviews.length === 0 ? (
        <p>No reviews available.</p>
      ) : (
        reviews.map((review) => (
          <div key={review.id} className="review-card">
            <h3>
              {review.repoName} - PR #{review.prNumber}
              <span className={`severity-badge ${getSeverityClass(review.feedbacks[0]?.severity)}`}>
                {review.feedbacks[0]?.severity}
              </span>
            </h3>
            <p><strong>Action:</strong> {review.action}</p>
            <p><strong>Created:</strong> {new Date(review.createdAt).toLocaleString()}</p>
            {review.feedbacks.map((fb) => (
              <div key={fb.id} className="feedback-block">
                <p><strong>Changes made in PR:</strong></p>
                <pre className="diff-snippet">{fb.diffContent}</pre>
                <br />
                <p><strong>Feedback Time:</strong> {new Date(fb.createdAt).toLocaleString()}</p>
                <div
                  className="feedback-text"
                  dangerouslySetInnerHTML={{ __html: marked.parse(fb.feedback) }}
                />
              </div>
            ))}
          </div>
        ))
      )}
    </div>
  );
};

export default Reviews;
