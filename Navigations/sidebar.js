function highlightSidebar() {
  const links = document.querySelectorAll(".sidebar a");
  const currentPath = window.location.pathname;

  links.forEach(link => {
    const linkPath = new URL(link.href, window.location.origin).pathname;

    // Match subpages only, not homepage
    if (linkPath !== "/" && currentPath.startsWith(linkPath)) {
      link.classList.add("active");

      // If inside a dropdown, open its parent so highlight is visible
      const dropdown = link.closest(".dropdown");
      if (dropdown) dropdown.classList.add("open");
    }
  });
}

function initSidebarDropdowns() {
  // Toggle first-level dropdowns
  document.querySelectorAll(".dropdown-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      btn.parentElement.classList.toggle("open");
    });
  });

  // Toggle nested sub-dropdowns
  document.querySelectorAll(".sub-dropdown-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation(); // Prevent collapsing parent dropdown
      btn.parentElement.classList.toggle("open");
    });
  });

  // --- Keep dropdowns open for active page ---
  const activeLink = document.querySelector(".sidebar a.active");
  if (activeLink) {
    const subParent = activeLink.closest(".sub-dropdown");
    const mainParent = activeLink.closest(".dropdown");

    // Open the containing dropdowns so the active link is visible
    if (subParent) subParent.classList.add("open");
    if (mainParent) mainParent.classList.add("open");
  }
}



