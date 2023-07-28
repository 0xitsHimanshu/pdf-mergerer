# PDF Merging Project - README

## Description

PDF Merging is a Node.js web application that allows users to merge two or more than two PDF files into a single PDF document. The project uses Express.js to serve the servers in the backend and employs the 'pdf-lib' library to perform the PDF merging functionality.

## Features

- Merge multiple PDF files into a single PDF document.
- User-friendly web interface for uploading and merging PDF files.
- Fast and efficient PDF merging using 'pdf-lib' library.
- Error handling and validation for uploaded files.

## Installation

1. Clone the repository from GitHub:

    git clone https://github.com/your-username/PdfMerging.git
    cd PdfMerging

2. Install the required dependencies using npm:

    npm install

3. Start the server:

    npm start

## Usage

1. Open your web browser and go to `http://localhost:3000`.
2. You will see a simple web page with instructions on how to use the PDF merging tool.
3. Click on the "Choose File" button to select the PDF files you want to merge.
4. After selecting the files, click on the "Merge PDFs" button to start the merging process.
5. Once the merging is complete, the merged PDF file will be available for download.

## Dependencies

The following main dependencies are used in this project:

- Express.js: A minimal and flexible Node.js web application framework for serving the servers.
- pdf-lib: A powerful library to create and modify PDF documents in JavaScript.
- plain-js: Custom JavaScript code for handling the merging of PDF files.

## Contributing

If you want to contribute to the project, feel free to open pull requests or create issues. Any contributions are welcome!

## License

This project is licensed under the [MIT License](LICENSE). You are free to use, modify, and distribute the code for personal and commercial purposes. However, remember to give appropriate credit to the original authors and include the license file in your distribution.
