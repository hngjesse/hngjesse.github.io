function highlightSidebar() {
  const links = document.querySelectorAll(".sidebar a");
  const currentPath = window.location.pathname;

  links.forEach(link => {
    const linkPath = new URL(link.href, window.location.origin).pathname;

    // folder-based match (works for /Mqtt_loggers/ etc.)
    if (linkPath !== "/" && currentPath.startsWith(linkPath)) {
      link.classList.add("active");
    }

    // homepage special-case
    if (currentPath === "/" && linkPath === "/") {
      link.classList.add("active");
    }
  });
}