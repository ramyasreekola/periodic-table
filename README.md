# Periodic Table

This is a frontend application that displays periodic table - an arrangement of chemical elements, organized on the basis of their atomic numbers, electron configurations and recurring chemical properties.It allows users to invert the table, putting heavier elements at the top and lighter elements at the bottom. It also highlights elements based on their block.
## Installation
Clone the repository:

Copy code
``` bash=
git clone https://github.com/ramyasreekola/periodic-table
cd periodic-table
```

Install dependencies:
```bash
npm install
```
Run the application:
```bash
npm run dev
```
Open your browser and navigate to http://localhost:5173 to view the application.

## Features
* Displays the periodic table with elements arranged in rows and columns.
* Allows users to invert the table, putting heavier elements at the top and lighter elements at the bottom.
* Highlights elements based on their block.


## Usage
* The periodic table is initially displayed in its standard configuration.
* Click the "Invert" button to rearrange the table with heavier elements at the top and lighter elements at the bottom. Click the button again to revert to the original configuration.
* Elements sharing the same block are highlighted/unhighlighted together, when any of them is selected.


## TODO
* Add unit tests for App component
* For same group elements hightlight - could use onMouseEnter onMouseLeave for even smoother user experience