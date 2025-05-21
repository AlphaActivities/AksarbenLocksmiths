import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export function ScrollToAnchorOnLoad() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const target = params.get("scroll");

    if (target) {
      const el = document.getElementById(target);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
          
          // Clean up URL after scrolling
          navigate({ pathname: "/", search: "" }, { replace: true });
        }, 100);
      }
    }
  }, [location, navigate]);

  return null;
}