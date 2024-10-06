// script.js

// Smooth scrolling for navigation links
document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll("nav a");

    navLinks.forEach(link => {
        link.addEventListener("click", (event) => {
            event.preventDefault();
            const targetId = event.target.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            targetElement.scrollIntoView({ behavior: "smooth" });
        });
    });
});
// script.js (continued)

// Redirect Get Started button
document.querySelector(".button").addEventListener("click", () => {
    const targetElement = document.getElementById("dashboard"); // Change this to the ID of the section you want to redirect to
    targetElement.scrollIntoView({ behavior: "smooth" });
});
// script.js (continued)

// Simple image carousel
let currentImageIndex = 0;
const images = document.querySelectorAll(".image-gallery img");
const totalImages = images.length;

function showImage(index) {
    images.forEach((img, idx) => {
        img.style.display = idx === index ? "block" : "none";
    });
}

document.addEventListener("DOMContentLoaded", () => {
    showImage(currentImageIndex);

    setInterval(() => {
        currentImageIndex = (currentImageIndex + 1) % totalImages;
        showImage(currentImageIndex);
    }, 3000); // Change image every 3 seconds
});
// script.js (continued)

// Link to Sign In page with smooth scrolling
document.querySelector(".sign-in-link").addEventListener("click", (event) => {
    event.preventDefault();
    const targetElement = document.getElementById("sign-in-section"); // Change this to the ID of your sign-in section
    targetElement.scrollIntoView({ behavior: "smooth" });
});
// script.js (continued)

// Example of client-side interactivity: Filter data on a chart
document.querySelector(".filter-button").addEventListener("click", () => {
    // Example filter logic
    const filteredData = data.filter(item => item.criteria === selectedCriteria);
    updateChart(filteredData);
});

// Example of dynamic content manipulation: Update content based on user input
document.querySelector(".date-range").addEventListener("change", (event) => {
    const selectedDateRange = event.target.value;
    fetchDataForDateRange(selectedDateRange).then(data => {
        updateDashboard(data);
    });
});

// Example of event handling: Show tooltip on hover
document.querySelectorAll(".data-point").forEach(point => {
    point.addEventListener("mouseover", (event) => {
        showTooltip(event.target);
    });
    point.addEventListener("mouseout", () => {
        hideTooltip();
    });
});

// Example of animation: Fade-in effect for results list
document.querySelector(".apply-filter-button").addEventListener("click", () => {
    const resultsList = document.querySelector(".results-list");
    resultsList.classList.add("fade-in");
    setTimeout(() => {
        resultsList.classList.remove("fade-in");
    }, 1000); // Duration of the fade-in effect
});

// Example of visual effects: Highlight bar on hover
document.querySelectorAll(".bar-chart .bar").forEach(bar => {
    bar.addEventListener("mouseover", () => {
        bar.classList.add("highlight");
    });
    bar.addEventListener("mouseout", () => {
        bar.classList.remove("highlight");
    });
});
// Show sign-in section only when Get Started button is clicked
document.querySelector(".button").addEventListener("click", () => {
    const signInSection = document.getElementById("sign-in-section");
    signInSection.style.display = "block";
    signInSection.scrollIntoView({ behavior: "smooth" });
});

// Hide sign-in section initially
document.addEventListener("DOMContentLoaded", () => {
    const signInSection = document.getElementById("sign-in-section");
    signInSection.style.display = "none";
});

// Show dashboard section only when Get Started button is clicked
document.querySelector(".button").addEventListener("click", () => {
    const dashboardSection = document.getElementById("dashboard");
    dashboardSection.style.display = "block";
    dashboardSection.scrollIntoView({ behavior: "smooth" });
});

// Hide dashboard section initially
document.addEventListener("DOMContentLoaded", () => {
    const dashboardSection = document.getElementById("dashboard");
    dashboardSection.style.display = "none";
});

// Underline the dashboard link and show only the dashboard section when clicked
document.querySelector(".button").addEventListener("click", () => {
    const dashboardSection = document.getElementById("dashboard");
    const signInSection = document.getElementById("sign-in-section");
    const dashboardLink = document.querySelector(".dashboard-link");

    // Hide the sign-in section
    signInSection.style.display = "none";

    // Show the dashboard section
    dashboardSection.style.display = "block";
    dashboardSection.scrollIntoView({ behavior: "smooth" });

    // Underline the dashboard link
    dashboardLink.style.textDecoration = "underline";
});
// Hide the initial page with Get Started button
document.addEventListener("DOMContentLoaded", () => {
    const initialPage = document.querySelector(".initial-page");
    initialPage.style.display = "none";
});

// Show only the dashboard section when the dashboard link is clicked
document.querySelector(".dashboard-link").addEventListener("click", (event) => {
    event.preventDefault();
    const dashboardSection = document.getElementById("dashboard");
    const dashboardLink = document.querySelector(".dashboard-link");

    // Hide all other sections
    document.querySelectorAll("section").forEach(section => {
        section.style.display = "none";
    });

    // Show the dashboard section
    dashboardSection.style.display = "block";
    dashboardSection.scrollIntoView({ behavior: "smooth" });

    // Underline the dashboard link
    dashboardLink.style.textDecoration = "underline";
});
// Client Click Interactivity

// Navigation Clicks
document.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", (event) => {
        event.preventDefault();
        const targetId = event.target.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);
        document.querySelectorAll("section").forEach(section => {
            section.style.display = "none";
        });
        targetElement.style.display = "block";
        targetElement.scrollIntoView({ behavior: "smooth" });
    });
});

// Report Section Clicks
document.querySelectorAll(".report-header").forEach(header => {
    header.addEventListener("click", () => {
        const content = header.nextElementSibling;
        content.style.display = content.style.display === "none" ? "block" : "none";
    });
});

// Comparison Chart Interactivity
document.querySelectorAll(".chart-element").forEach(element => {
    element.addEventListener("click", () => {
        const detail = document.querySelector(".chart-detail");
        detail.textContent = `Details for ${element.dataset.info}`;
        detail.style.display = "block";
    });
});

// Export Buttons
document.querySelector(".export-pdf").addEventListener("click", () => {
    exportReport("pdf");
});
document.querySelector(".export-excel").addEventListener("click", () => {
    exportReport("excel");
});

// Links to GHG Calculator
document.querySelector(".ghg-calculator-link").addEventListener("click", () => {
    window.location.href = "/ghg-calculator";
});

// Feedback Form Submission
document.querySelector(".feedback-form").addEventListener("submit", (event) => {
    event.preventDefault();
    submitFeedback();
});

// Dynamic Content Manipulation

// Real-Time Data Updates
function updateData() {
    fetch("/api/emission-data")
        .then(response => response.json())
        .then(data => {
            updateCharts(data);
            updateTips(data);
        });
}
setInterval(updateData, 60000); // Update every minute

// Interactive Charts
function updateCharts(data) {
    // Assuming Chart.js is used
    myChart.data.datasets[0].data = data;
    myChart.update();
}

// Personalized Tips
function updateTips(data) {
    const tipsElement = document.querySelector(".personalized-tips");
    tipsElement.textContent = `Based on your data, consider ${data.tip}`;
}

// Filter and Sort Options
document.querySelector(".filter-sort-form").addEventListener("change", () => {
    const filterValue = document.querySelector(".filter-input").value;
    const sortValue = document.querySelector(".sort-input").value;
    filterAndSortData(filterValue, sortValue);
});

// Event Handling

// Form Events
document.querySelector(".filter-form").addEventListener("submit", (event) => {
    event.preventDefault();
    applyFilter();
});

// Hover Events
document.querySelectorAll(".chart-bar").forEach(bar => {
    bar.addEventListener("mouseover", () => {
        showTooltip(bar);
    });
    bar.addEventListener("mouseout", () => {
        hideTooltip();
    });
});

// Resize Events
window.addEventListener("resize", () => {
    adjustLayout();
});

// Animation

// CSS Transitions for expanding/collapsing report sections
document.querySelectorAll(".report-content").forEach(content => {
    content.style.transition = "height 0.3s ease";
});

// JavaScript Animations for chart updates
function animateChartUpdate(chart) {
    // Assuming GSAP is used
    gsap.to(chart, { duration: 1, opacity: 1 });
}

// Visual Effects

// Hover Effects
document.querySelectorAll(".button").forEach(button => {
    button.addEventListener("mouseover", () => {
        button.classList.add("hover");
    });
    button.addEventListener("mouseout", () => {
        button.classList.remove("hover");
    });
});

// Modal Windows
document.querySelector(".open-modal").addEventListener("click", () => {
    const modal = document.querySelector(".modal");
    modal.style.display = "block";
});
document.querySelector(".close-modal").addEventListener("click", () => {
    const modal = document.querySelector(".modal");
    modal.style.display = "none";
});

// Tooltips
function showTooltip(element) {
    const tooltip = document.querySelector(".tooltip");
    tooltip.textContent = element.dataset.tooltip;
    tooltip.style.display = "block";
    tooltip.style.left = `${element.getBoundingClientRect().left}px`;
    tooltip.style.top = `${element.getBoundingClientRect().top - tooltip.offsetHeight}px`;
}
function hideTooltip() {
    const tooltip = document.querySelector(".tooltip");
    tooltip.style.display = "none";
}

// Loading Indicators
function showLoading() {
    const loader = document.querySelector(".loader");
    loader.style.display = "block";
}
function hideLoading() {
    const loader = document.querySelector(".loader");
    loader.style.display = "none";
}

// Responsive Design
window.addEventListener("resize", () => {
    const sections = document.querySelectorAll("section");
    sections.forEach(section => {
        if (window.innerWidth < 768) {
            section.style.width = "100%";
        } else {
            section.style.width = "50%";
        }
    });
});
// Underline Home link and show main page when Home is clicked
document.querySelector(".home-link").addEventListener("click", (event) => {
    event.preventDefault();
    const homeSection = document.getElementById("home");
    const homeLink = document.querySelector(".home-link");

    // Hide all other sections
    document.querySelectorAll("section").forEach(section => {
        section.style.display = "none";
    });

    // Show the home section
    homeSection.style.display = "block";
    homeSection.scrollIntoView({ behavior: "smooth" });

    // Remove underline from all nav links
    document.querySelectorAll("nav a").forEach(link => {
        link.style.textDecoration = "none";
    });

    // Underline the home link
    homeLink.style.textDecoration = "underline";
});
// Client Click Interactivity

// Tab Switching
document.querySelectorAll(".tab").forEach(tab => {
    tab.addEventListener("click", (event) => {
        event.preventDefault();
        const targetId = event.target.getAttribute("href").substring(1);
        document.querySelectorAll(".calculator-section").forEach(section => {
            section.style.display = "none";
        });
        document.getElementById(targetId).style.display = "block";
    });
});

// Calculation Buttons
document.querySelector(".calculate-individual").addEventListener("click", () => {
    const individualInputs = getIndividualInputs();
    const result = calculateIndividualEmissions(individualInputs);
    displayResult(result, "individual-result");
});

document.querySelector(".calculate-industrial").addEventListener("click", () => {
    const industrialInputs = getIndustrialInputs();
    const result = calculateIndustrialEmissions(industrialInputs);
    displayResult(result, "industrial-result");
});

// Dynamic Content Manipulation

// Form Inputs Validation
document.querySelectorAll(".input").forEach(input => {
    input.addEventListener("input", () => {
        if (input.value < 0) {
            input.setCustomValidity("Value cannot be negative");
        } else {
            input.setCustomValidity("");
        }
    });
});

// Event Handling

// Form Submission
document.querySelector(".individual-form").addEventListener("submit", (event) => {
    event.preventDefault();
    const individualInputs = getIndividualInputs();
    const result = calculateIndividualEmissions(individualInputs);
    displayResult(result, "individual-result");
});

document.querySelector(".industrial-form").addEventListener("submit", (event) => {
    event.preventDefault();
    const industrialInputs = getIndustrialInputs();
    const result = calculateIndustrialEmissions(industrialInputs);
    displayResult(result, "industrial-result");
});

// Animation and Visual Effects

// Smooth Transitions
document.querySelectorAll(".calculator-section").forEach(section => {
    section.style.transition = "opacity 0.5s ease";
});

// Loading Indicators
function showLoading() {
    const loader = document.querySelector(".loader");
    loader.style.display = "block";
}

function hideLoading() {
    const loader = document.querySelector(".loader");
    loader.style.display = "none";
}

// Result Display Animations
function displayResult(result, resultId) {
    const resultElement = document.getElementById(resultId);
    resultElement.textContent = result;
    resultElement.style.display = "block";
    resultElement.style.opacity = 0;
    setTimeout(() => {
        resultElement.style.opacity = 1;
    }, 100);
}

// Helper Functions
function getIndividualInputs() {
    // Collect individual form inputs
    return {
        // Example input collection
        energyUsage: document.querySelector("#individual-energy-usage").value,
        // Add more inputs as needed
    };
}

function getIndustrialInputs() {
    // Collect industrial form inputs
    return {
        // Example input collection
        energyUsage: document.querySelector("#industrial-energy-usage").value,
        // Add more inputs as needed
    };
}

function calculateIndividualEmissions(inputs) {
    // Perform individual emissions calculation
    return `Individual Emissions: ${inputs.energyUsage * 0.5} kg CO2`;
}

function calculateIndustrialEmissions(inputs) {
    // Perform industrial emissions calculation
    return `Industrial Emissions: ${inputs.energyUsage * 2.5} kg CO2`;
}
// Client Click Interactivity

// Clickable Alerts
document.querySelectorAll(".alert-item").forEach(alert => {
    alert.addEventListener("click", () => {
        const alertDetails = document.querySelector(".alert-details");
        alertDetails.textContent = `Details for alert: ${alert.dataset.alertId}`;
        alertDetails.style.display = "block";
    });
});

// Filter Options
document.querySelector(".filter-options").addEventListener("change", (event) => {
    const filterValue = event.target.value;
    document.querySelectorAll(".alert-item").forEach(alert => {
        if (alert.dataset.severity === filterValue || filterValue === "all") {
            alert.style.display = "block";
        } else {
            alert.style.display = "none";
        }
    });
});

// Feedback Form
document.querySelector(".feedback-form").addEventListener("submit", (event) => {
    event.preventDefault();
    const feedback = document.querySelector(".feedback-input").value;
    if (feedback) {
        alert("Feedback submitted successfully!");
    } else {
        alert("Please enter your feedback.");
    }
});

// Dynamic Content Manipulation

// Real-Time Alerts
function fetchAlerts() {
    fetch("/api/alerts")
        .then(response => response.json())
        .then(alerts => {
            const alertList = document.querySelector(".alert-list");
            alertList.innerHTML = "";
            alerts.forEach(alert => {
                const alertItem = document.createElement("div");
                alertItem.className = "alert-item";
                alertItem.dataset.alertId = alert.id;
                alertItem.dataset.severity = alert.severity;
                alertItem.textContent = alert.message;
                alertList.appendChild(alertItem);
            });
        });
}
setInterval(fetchAlerts, 60000); // Fetch new alerts every minute

// Detailed Alert View
document.querySelectorAll(".alert-item").forEach(alert => {
    alert.addEventListener("click", () => {
        const alertDetails = document.querySelector(".alert-details");
        alertDetails.textContent = `Details for alert: ${alert.dataset.alertId}`;
        alertDetails.style.display = "block";
    });
});

// Event Handling

// Filter Change Events
document.querySelector(".filter-options").addEventListener("change", (event) => {
    const filterValue = event.target.value;
    document.querySelectorAll(".alert-item").forEach(alert => {
        if (alert.dataset.severity === filterValue || filterValue === "all") {
            alert.style.display = "block";
        } else {
            alert.style.display = "none";
        }
    });
});

// Feedback Submission Events
document.querySelector(".feedback-form").addEventListener("submit", (event) => {
    event.preventDefault();
    const feedback = document.querySelector(".feedback-input").value;
    if (feedback) {
        alert("Feedback submitted successfully!");
    } else {
        alert("Please enter your feedback.");
    }
});

// Animation and Visual Effects

// Alert Expansion Animation
document.querySelectorAll(".alert-item").forEach(alert => {
    alert.addEventListener("click", () => {
        const alertDetails = document.querySelector(".alert-details");
        alertDetails.style.transition = "height 0.3s ease";
        alertDetails.style.height = "auto";
    });
});

// Loading Indicators
function showLoading() {
    const loader = document.querySelector(".loader");
    loader.style.display = "block";
}

function hideLoading() {
    const loader = document.querySelector(".loader");
    loader.style.display = "none";
}

// Highlighting New Alerts
function highlightNewAlert(alert) {
    alert.classList.add("new-alert");
    setTimeout(() => {
        alert.classList.remove("new-alert");
    }, 3000); // Highlight for 3 seconds
}

// Tips Section Animation
function showTips(tip) {
    const tipsElement = document.querySelector(".daily-tips");
    tipsElement.textContent = tip;
    tipsElement.style.display = "block";
    tipsElement.style.opacity = 0;
    setTimeout(() => {
        tipsElement.style.opacity = 1;
    }, 100);
}
// Achievements Page Interactivity

// Clickable Badges
document.querySelectorAll(".achievement-badge").forEach(badge => {
    badge.addEventListener("click", () => {
        const badgeDetails = document.querySelector(".badge-details");
        badgeDetails.textContent = `Details for badge: ${badge.dataset.badgeId}`;
        badgeDetails.style.display = "block";
    });
});

// Progress Tracker Interaction
document.querySelectorAll(".progress-segment").forEach(segment => {
    segment.addEventListener("click", () => {
        const segmentDetails = document.querySelector(".segment-details");
        segmentDetails.textContent = `Details for segment: ${segment.dataset.segmentId}`;
        segmentDetails.style.display = "block";
    });
});

// Leaderboard Interaction
document.querySelectorAll(".leaderboard-name").forEach(name => {
    name.addEventListener("click", () => {
        const profileDetails = document.querySelector(".profile-details");
        profileDetails.textContent = `Profile details for: ${name.dataset.userId}`;
        profileDetails.style.display = "block";
    });
});

// Dynamic Content Manipulation

// Real-Time Updates
function updateProgress() {
    fetch("/api/user-progress")
        .then(response => response.json())
        .then(data => {
            document.querySelector(".progress-bar").style.width = `${data.progress}%`;
            document.querySelector(".points").textContent = `Points: ${data.points}`;
        });
}
setInterval(updateProgress, 60000); // Update every minute

// Comparison Graphs
document.querySelector(".filter-form").addEventListener("change", () => {
    const filterValue = document.querySelector(".filter-input").value;
    fetch(`/api/comparison-data?filter=${filterValue}`)
        .then(response => response.json())
        .then(data => {
            updateComparisonGraph(data);
        });
});

function updateComparisonGraph(data) {
    // Assuming Chart.js is used
    comparisonChart.data.datasets[0].data = data;
    comparisonChart.update();
}

// Feedback Section
document.querySelector(".feedback-form").addEventListener("submit", (event) => {
    event.preventDefault();
    const feedback = document.querySelector(".feedback-input").value;
    fetch("/api/submit-feedback", {
        method: "POST",
        body: JSON.stringify({ feedback }),
        headers: { "Content-Type": "application/json" }
    }).then(() => {
        document.querySelector(".feedback-confirmation").textContent = "Feedback submitted successfully!";
    });
});

// Event Handling

// Click Events
document.querySelectorAll(".achievement-badge").forEach(badge => {
    badge.addEventListener("click", () => {
        const badgeDetails = document.querySelector(".badge-details");
        badgeDetails.textContent = `Details for badge: ${badge.dataset.badgeId}`;
        badgeDetails.style.display = "block";
    });
});

// Form Submission
document.querySelector(".feedback-form").addEventListener("submit", (event) => {
    event.preventDefault();
    const feedback = document.querySelector(".feedback-input").value;
    fetch("/api/submit-feedback", {
        method: "POST",
        body: JSON.stringify({ feedback }),
        headers: { "Content-Type": "application/json" }
    }).then(() => {
        document.querySelector(".feedback-confirmation").textContent = "Feedback submitted successfully!";
    });
});

// Mouse Hover Events
document.querySelectorAll(".achievement-badge").forEach(badge => {
    badge.addEventListener("mouseover", () => {
        badge.classList.add("hover");
    });
    badge.addEventListener("mouseout", () => {
        badge.classList.remove("hover");
    });
});

// Animations and Visual Effects

// Loading Animations
function showLoading() {
    const loader = document.querySelector(".loader");
    loader.style.display = "block";
}

function hideLoading() {
    const loader = document.querySelector(".loader");
    loader.style.display = "none";
}

// Progress Bar Animation
function animateProgressBar(progress) {
    const progressBar = document.querySelector(".progress-bar");
    progressBar.style.width = `${progress}%`;
}

// Transitions for Modals/Tooltips
document.querySelectorAll(".achievement-badge").forEach(badge => {
    badge.addEventListener("click", () => {
        const badgeDetails = document.querySelector(".badge-details");
        badgeDetails.style.transition = "opacity 0.5s ease";
        badgeDetails.style.opacity = 1;
    });
});

// Visual Feedback on Actions
document.querySelectorAll(".achievement-badge").forEach(badge => {
    badge.addEventListener("mouseover", () => {
        badge.style.transform = "scale(1.1)";
    });
    badge.addEventListener("mouseout", () => {
        badge.style.transform = "scale(1)";
    });
});
// Display only main header and hide achievements page header
document.addEventListener("DOMContentLoaded", () => {
    const mainHeader = document.querySelector(".main-header");
    const achievementsHeader = document.querySelector(".achievements-header");

    // Show main header
    mainHeader.style.display = "block";

    // Hide achievements header
    achievementsHeader.style.display = "none";
});
// Hide achievements page header initially
document.addEventListener("DOMContentLoaded", () => {
    const achievementsHeader = document.querySelector(".achievements-header");
    achievementsHeader.style.display = "none";
});
// Resources Page Interactivity

// Upload Buttons
document.querySelectorAll(".upload-button").forEach(button => {
    button.addEventListener("click", () => {
        const modal = document.querySelector(".upload-modal");
        modal.style.display = "block";
    });
});

document.querySelector(".close-modal").addEventListener("click", () => {
    const modal = document.querySelector(".upload-modal");
    modal.style.display = "none";
});

// Navigation Menu
document.querySelectorAll(".nav-item").forEach(item => {
    item.addEventListener("click", (event) => {
        event.preventDefault();
        const targetId = event.target.getAttribute("href").substring(1);
        document.querySelectorAll("section").forEach(section => {
            section.style.display = "none";
        });
        document.getElementById(targetId).style.display = "block";
        document.getElementById(targetId).scrollIntoView({ behavior: "smooth" });

        // Highlight current page
        document.querySelectorAll(".nav-item").forEach(nav => {
            nav.classList.remove("active");
        });
        item.classList.add("active");
    });
});

// Filter Options
document.querySelector(".filter-options").addEventListener("change", (event) => {
    const filterValue = event.target.value;
    document.querySelectorAll(".resource-item").forEach(item => {
        if (item.dataset.category === filterValue || filterValue === "all") {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    });
});

// Dynamic Content Manipulation

// File Uploads
document.querySelector(".upload-form").addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    fetch("/api/upload", {
        method: "POST",
        body: formData
    }).then(response => response.json())
      .then(data => {
          const confirmation = document.querySelector(".upload-confirmation");
          confirmation.textContent = "Upload successful!";
          confirmation.style.display = "block";

          // Display new resource
          const resourceList = document.querySelector(".resource-list");
          const newItem = document.createElement("div");
          newItem.className = "resource-item";
          newItem.dataset.category = data.category;
          newItem.textContent = data.name;
          resourceList.appendChild(newItem);
      });
});

// Show/Hide Sections
document.querySelectorAll(".toggle-section").forEach(button => {
    button.addEventListener("click", () => {
        const section = document.querySelector(button.dataset.target);
        section.style.display = section.style.display === "none" ? "block" : "none";
    });
});

// Real-Time Updates
function fetchNewSubmissions() {
    fetch("/api/new-submissions")
        .then(response => response.json())
        .then(data => {
            const resourceList = document.querySelector(".resource-list");
            data.forEach(item => {
                const newItem = document.createElement("div");
                newItem.className = "resource-item";
                newItem.dataset.category = item.category;
                newItem.textContent = item.name;
                resourceList.appendChild(newItem);
            });
        });
}
setInterval(fetchNewSubmissions, 60000); // Fetch new submissions every minute

// Event Handling

// Form Submission Events
document.querySelector(".upload-form").addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    fetch("/api/upload", {
        method: "POST",
        body: formData
    }).then(response => response.json())
      .then(data => {
          const confirmation = document.querySelector(".upload-confirmation");
          confirmation.textContent = "Upload successful!";
          confirmation.style.display = "block";
      });
});

// Mouse Events
document.querySelectorAll(".button, .nav-item").forEach(element => {
    element.addEventListener("mouseover", () => {
        element.classList.add("hover");
    });
    element.addEventListener("mouseout", () => {
        element.classList.remove("hover");
    });
});

// Keyboard Navigation
document.addEventListener("keydown", (event) => {
    if (event.key === "Tab") {
        const focusedElement = document.activeElement;
        if (focusedElement.classList.contains("nav-item")) {
            focusedElement.classList.add("focused");
        }
    }
});

// Animation

// Fade-In Effects
document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".fade-in").forEach(element => {
        element.style.opacity = 0;
        setTimeout(() => {
            element.style.transition = "opacity 1s";
            element.style.opacity = 1;
        }, 100);
    });
});

// Loading Indicators
function showLoading() {
    const loader = document.querySelector(".loader");
    loader.style.display = "block";
}

function hideLoading() {
    const loader = document.querySelector(".loader");
    loader.style.display = "none";
}

// Highlighting Active Sections
document.querySelectorAll(".nav-item").forEach(item => {
    item.addEventListener("click", () => {
        document.querySelectorAll(".nav-item").forEach(nav => {
            nav.classList.remove("active");
        });
        item.classList.add("active");
    });
});

// Visual Effects

// Hover Effects
document.querySelectorAll(".button, .nav-item").forEach(element => {
    element.addEventListener("mouseover", () => {
        element.classList.add("hover");
    });
    element.addEventListener("mouseout", () => {
        element.classList.remove("hover");
    });
});

// Transitions
document.querySelectorAll(".transition").forEach(element => {
    element.style.transition = "all 0.3s ease";
});

// Image Effects
// Image Effects
document.querySelectorAll(".resource-item img").forEach(img => {
    img.addEventListener("mouseover", () => {
        img.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
    });
    img.addEventListener("mouseout", () => {
        img.style.boxShadow = "none";
    });
});

// Navigation Menu
document.querySelectorAll(".nav-item").forEach(item => {
    item.addEventListener("click", (event) => {
        event.preventDefault();
        const targetId = event.target.getAttribute("href").substring(1);
        document.querySelectorAll("section").forEach(section => {
            section.style.display = "none";
        });
        document.getElementById(targetId).style.display = "block";
        document.getElementById(targetId).scrollIntoView({ behavior: "smooth" });

        // Highlight current page
        document.querySelectorAll(".nav-item").forEach(nav => {
            nav.classList.remove("active");
        });
        item.classList.add("active");
    });
});