# Barista Flyout Menu

A responsive flyout menu application for a coffee shop website featuring an interactive navigation system.

## Features

- **Fixed Menu Icon**: Hamburger menu icon positioned in the top right corner of the viewport
- **Flyout Navigation**: Smooth sliding menu that opens from the right side
- **5 Parent Pages**: Each representing a different coffee drink category:
  - Espresso
  - Latte
  - Cappuccino
  - Americano
  - Mocha
- **Nested Navigation**: Each parent page has 3 child pages accessible via the menu
- **Tab Navigation**: Each parent page displays tabs for switching between child pages
- **Dual Navigation**: Users can navigate to child pages either:
  - Through the flyout menu child links
  - Using the tab buttons on each parent page

## Usage

Simply open `index.html` in a web browser. You can:

1. Click the menu icon in the top right to open the flyout menu
2. Click on any parent link to navigate to that category
3. Hover over parent links to reveal child page links
4. Click on child links to navigate directly to specific pages
5. Use the tabs at the top of each page to switch between child pages
6. Click the × button or click outside the menu to close it

## Technologies

- HTML5
- CSS3 (with animations and transitions)
- Vanilla JavaScript (no dependencies)

## File Structure

- `index.html` - Main HTML structure
- `styles.css` - All styling and animations
- `script.js` - Navigation and interaction logic