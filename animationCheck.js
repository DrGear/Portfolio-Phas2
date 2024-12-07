document.addEventListener("DOMContentLoaded", () => {
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  function checkAnimationPreference() {
    const notification = document.getElementById("notification");
    if (!notification) {
      console.error("Notification element not found!");
      return;
    }
    
    if (prefersReducedMotion.matches) {
      notification.style.display = "block";
    } else {
      notification.style.display = "none";
    }
  }
  
  checkAnimationPreference();
  
  prefersReducedMotion.addEventListener("change", checkAnimationPreference);
})

