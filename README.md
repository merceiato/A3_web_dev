# Good Dog Website Project

## Overview
The Good Dog website is a single-page interactive platform designed for a nonprofit organization dedicated to pet rehabilitation and adoption. This website includes sections for adoptable pets, donation options, and volunteer recruitment. It uses HTML, CSS, and JavaScript, along with the Shoelace UI component library.

---

## Features
- **Responsive Design**: Works on both desktop and mobile devices.
- **Carousel**: Displays adoptable pets with an automatic image slider.
- **Interactive Forms**: Allows users to submit contact inquiries.
- **Donation Progress Bar**: Visualizes funding goals.
- **Modern Aesthetic**: Clean, minimalistic layout with micro-interactions.

---

## Installation and Hosting Locally
This project can be hosted locally using Python's built-in HTTP server within a virtual environment. Follow these steps:

### Prerequisites
1. Install Python (3.x recommended) from [Python.org](https://www.python.org/).
2. Ensure you have a text editor (e.g., VS Code, Sublime Text) for viewing and editing files.

### Instructions
1. **Clone the Repository**
   - Clone the project folder or download it as a ZIP and extract it.

2. **Create a Virtual Environment**
   - Navigate to the project directory:
     bash
     cd path/to/project
     
   - Create a virtual environment:
     bash
     python -m venv env
     
   - Activate the virtual environment:
     - On Windows:
       bash
       .\env\Scripts\activate
       
     - On macOS/Linux:
       bash
       source env/bin/activate
       

3. **Install Dependencies**
   - Although this project doesn't require additional Python libraries, activate the virtual environment to maintain a clean Python setup. Use the virtual environment for any additional Python-based tools if needed.

4. **Start the Local Server**
   Run the following command to start a Python HTTP server:
   - For Python 3.x:
     bash
     python -m http.server 8000
     

5. **Access the Website**
   Open your browser and navigate to:
   
   http://localhost:8000
   

6. **Stop the Server**
   Press `Ctrl+C` in the terminal to stop the server when finished.

7. **Deactivate the Virtual Environment**
   - When finished, deactivate the virtual environment by running:
     bash
     deactivate
     

---

## Project Structure

.
├── index.html       # Main HTML file
├── styles.css       # Styling (CSS)
├── main.js          # JavaScript logic
├── assets/          # Images and other media
└── README.md        # Project documentation


---

## Dependencies
- **Shoelace UI Library**: Provides modern UI components.
  - Source: [Shoelace](https://shoelace.style/)

---

## Customization
To modify or extend the project:
1. **HTML**: Update `index.html` for structural changes.
2. **CSS**: Edit `styles.css` for styling adjustments.
3. **JavaScript**: Enhance functionality by modifying `main.js`.

---

## License
This project is released under the MIT License. Feel free to use and modify it as needed.

---

## Contact
For questions or feedback, please reach out to the project maintainer at:
- Email: [your_email@example.com](mailto:your_email@example.com)
- GitHub: [your_github_username](https://github.com/your_github_username)

# A3_web_dev
