// Get DOM elements
const menuIcon = document.getElementById('menuIcon');
const flyoutMenu = document.getElementById('flyoutMenu');
const closeBtn = document.getElementById('closeBtn');
const parentLinks = document.querySelectorAll('.parent-link');
const childLinks = document.querySelectorAll('.child-link');
const tabButtons = document.querySelectorAll('.tab-btn');

// Toggle flyout menu
function toggleMenu() {
    flyoutMenu.classList.toggle('active');
}

// Close menu
function closeMenu() {
    flyoutMenu.classList.remove('active');
}

// Navigate to parent page
function navigateToParent(pageName) {
    // Hide all pages
    const allPages = document.querySelectorAll('.page');
    allPages.forEach(page => {
        page.classList.remove('active');
    });

    // Show selected page
    const selectedPage = document.getElementById(`${pageName}-page`);
    if (selectedPage) {
        selectedPage.classList.add('active');
        
        // Show the first child page by default
        const childPages = selectedPage.querySelectorAll('.child-page');
        childPages.forEach((childPage, index) => {
            if (index === 0) {
                childPage.classList.add('active');
            } else {
                childPage.classList.remove('active');
            }
        });

        // Set first tab as active
        const tabs = selectedPage.querySelectorAll('.tab-btn');
        tabs.forEach((tab, index) => {
            if (index === 0) {
                tab.classList.add('active');
            } else {
                tab.classList.remove('active');
            }
        });
    }
}

// Navigate to child page
function navigateToChild(parentName, childName) {
    // First navigate to parent page
    navigateToParent(parentName);

    // Then show the specific child page
    const parentPage = document.getElementById(`${parentName}-page`);
    if (parentPage) {
        const childPages = parentPage.querySelectorAll('.child-page');
        const tabs = parentPage.querySelectorAll('.tab-btn');

        childPages.forEach(page => {
            if (page.id === `${parentName}-${childName}`) {
                page.classList.add('active');
            } else {
                page.classList.remove('active');
            }
        });

        // Update active tab
        tabs.forEach(tab => {
            if (tab.dataset.child === childName) {
                tab.classList.add('active');
            } else {
                tab.classList.remove('active');
            }
        });
    }
}

// Switch tabs
function switchTab(parentName, childName, tabElement) {
    const parentPage = document.getElementById(`${parentName}-page`);
    if (parentPage) {
        // Update child pages
        const childPages = parentPage.querySelectorAll('.child-page');
        childPages.forEach(page => {
            if (page.id === `${parentName}-${childName}`) {
                page.classList.add('active');
            } else {
                page.classList.remove('active');
            }
        });

        // Update tabs
        const tabs = parentPage.querySelectorAll('.tab-btn');
        tabs.forEach(tab => {
            tab.classList.remove('active');
        });
        tabElement.classList.add('active');
    }
}

// Event Listeners

// Menu icon click
menuIcon.addEventListener('click', toggleMenu);

// Close button click
closeBtn.addEventListener('click', closeMenu);

// Parent link clicks
parentLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const pageName = link.dataset.page;
        navigateToParent(pageName);
        closeMenu();
    });
});

// Child link clicks
childLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const parentName = link.dataset.parent;
        const childName = link.dataset.child;
        navigateToChild(parentName, childName);
        closeMenu();
    });
});

// Tab button clicks
tabButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        const parentName = button.dataset.parent;
        const childName = button.dataset.child;
        switchTab(parentName, childName, button);
    });
});

// Close menu when clicking outside (optional enhancement)
document.addEventListener('click', (e) => {
    // Only check if menu is active to avoid unnecessary processing
    if (flyoutMenu.classList.contains('active') && 
        !flyoutMenu.contains(e.target) && 
        !menuIcon.contains(e.target)) {
        closeMenu();
    }
});

// Initialize - show first page on load
document.addEventListener('DOMContentLoaded', () => {
    navigateToParent('espresso');
});
