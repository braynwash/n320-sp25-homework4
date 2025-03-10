## Assignment 4

### Project Summary

The following project is a combination of four different use cases for live PDF generation using Node.js (and the jsPDF library). Each generator is designed to dynamically create and display PDFs based on user input with an option to download the final generated PDFs. All four use cases extend a PDFGenerator class, utilizing JS OOP principles to make the project extensible and easy to develop as all four use cases don't need to build their own PDF generator logic. Despite all cases being different, all pages follow the same/similar layout and styling to keep a cohesive theme.

### Repo Link

[Github repo link](https://github.com/braynwash/n320-sp25-homework4)

### Key Takeaways

This project allows users to:
* Dynamically create, view, and download PDFs based on their input.
     * This allows for a <i>LOT</i> of different applications, and allows for dynamic document creation.
     * Users can also edit the PDF (indirectly) through things like forms and text inputs.
* Use a previously made PDF generator and create unique extensions of it.
    * This gave the team a lot of practice with collaboration, and utilizing code that wasn't made by them. 

### Design Choices

List color palette used and rationale for top level layout decisions.

I used realtimecolors.com to generate a color palette on a preview site. I eventually settled with a nice white and red palette, resembling IU colors. Using this palette, I mainly styled the navigation while keeping the palette variables accessible for elements such as linked, input boxes, and more.

`--text: #100a09;`
`--background: #faf2f1;`
`--primary: #d24e42;`
`--secondary: #ee837a;`
`--accent: #f94d3d;`

### Members & Responsibilities

The Cremebrulees

- Erin - Designer
  - [Design Choices](#design-choices)
  - [PDFGenerator](views/app/PDFGenerator.js)
  - [Landing Page](views/index.html)
  - [Event Ticket](views/eventTicket.html)
- Jeremy - President
  - [Project Summary and Live Link](#project-summary)
  - [Course Certificate](views/courseCertificate.html)
- Ev - Analyst
  - [Key Takeaways](#key-takeaways)
- Cameron - Scrum Master
  - [Members & Responsibilities](#members--responsibilities)
  - [Invoice](views/invoice.html)
