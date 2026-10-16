
# Personal Portfolio Website

A personal portfolio website built using HTML5 and CSS3.
It introduces my background, technical skills, and contact information.

## Project Overview

The goal of this project is to build an attractive, professional, and responsive personal portfolio website while learning HTML and CSS fundamentals.

### Features

- Personal introduction and education details
- Technical skills displayed in organized cards
- Profile picture
- GitHub and LinkedIn links
- Contact form with HTML validation
- Midnight Aurora color theme
- Responsive layout for mobile screens
- Hover effects and smooth transitions

## Technologies Used

- HTML5
- CSS3
- CSS Flexbox and Grid
- CSS media queries
- Google Fonts (Inter)

## Project Structure

```text
Personal-Portfolio/
├── index.html
├── style.css
├── README.md
├── images/
│   └── profile.jpg
└── screenshots/
    ├── desktop.png
    ├── skills.png
    ├── contact.png
    └── mobile.png
```

## Setup Instructions

1. Download or clone this repository.
2. Open the project folder in Visual Studio Code.
3. Open `index.html` in a web browser.
4. Ensure an internet connection is available to load Google Fonts.

No additional packages are required.

## CSS Concepts Learned

### 1. CSS Selectors

Element selectors such as `body`, `h1`, and `footer` style HTML elements. Class and ID selectors can target specific elements.

### 2. Colors and Typography

The project uses a dark emerald and teal palette, readable text, and the Inter font to create the Midnight Aurora theme.

### 3. Box Model

Margin, padding, borders, and `box-sizing: border-box` control element spacing and dimensions.

### 4. Flexbox and Grid

Flexbox centers and arranges navigation links. CSS Grid displays skills in responsive columns.

### 5. Hover Effects and Transitions

The `:hover` pseudo-class adds interactive effects to navigation links, skill cards, and buttons. CSS transitions make these changes smoother.

### 6. Responsive Design

Media queries adjust spacing, typography, and layouts for smaller screens.

### 7. Form Styling

CSS styles input fields, labels, the message box, and the submit button. Focus styles help users identify the active field.

## Design Decisions

The Midnight Aurora theme uses deep navy, emerald, and teal colors with subtle gradients. Rounded cards, consistent spacing, and restrained glow effects create a clean appearance.

The layout uses a centered content area to maintain readability on large screens. Smaller screens use reduced spacing and responsive skill columns.

## Screenshots

### Desktop Website

![Desktop portfolio](screenshots/desktop.png)

### Skills Section

![Skills section](screenshots/skills.png)

### Contact Form

![Contact form](screenshots/contact.png)

### Mobile Layout

![Mobile portfolio](screenshots/mobile.png)

## Testing

Test the following features in a browser:

- Website loads without errors.
- Navigation links lead to the correct sections.
- Profile picture displays correctly.
- Hover effects work on supported devices.
- Contact form validates required fields and email format.
- Layout remains readable on mobile screens.

Record the actual results of your tests before submission.

## Known Limitations

The contact form currently uses browser-side validation only. It does not send emails or store messages because a backend or form service has not been connected.

## Conclusion

This project helped me practice HTML5 structure, CSS selectors, colors, typography, the box model, Flexbox, Grid, hover effects, and responsive design. It also gave me experience organizing project files and managing code with GitHub.

## Author

Mayukh

## GitHub Repository

https://github.com/MayukhDas2004/personal-portfolio



## Week 3: JavaScript Interactivity

### Features
- Show and hide About Me information.
- Interactive image gallery with Previous and Next buttons.
- To-do list with add, complete, delete, and clear-completed features.
- Contact form validation with custom error messages.
- Dark/light mode with saved theme preference.
- Task and theme preferences stored in browser localStorage.

### Technologies
- HTML5
- CSS3
- JavaScript
- DOM manipulation
- Event listeners
- Browser localStorage

### Testing
- Tested About section toggle.
- Tested gallery navigation.
- Tested task creation and completion.
- Tested contact form validation.
- Tested theme switching and persistence.

### Limitation
The contact form performs client-side validation only.
It does not send emails because no backend or form service is connected.
