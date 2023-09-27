//In the index.html just add the source link for this search.js in the script

let caseNumber = 1; // Initializing the case number for Legal records 

function extractText(pdfUrl) {
    return pdfjsLib.getDocument(pdfUrl).promise.then(function (pdf) {
        let text = "";
        const numPages = pdf.numPages;

        function extractP(pageNumber) {
            return pdf.getPage(pageNumber).then(function (page) {
                return page.getTextContent().then(function (textContent) {
                    const pageText = textContent.items.map((item) => item.str).join(" ");
                    text += pageText + "\n";
                });
            });
        }

        const pagePromises = [];
        for (let i = 1; i <= numPages; i++) {
            pagePromises.push(extractP(i));
        }

        return Promise.all(pagePromises).then(function () {
            return text;
        });
    });
}


function searchP(text, keyword, pdfUrl) {
    if (text.toLowerCase().includes(keyword.toLowerCase())) {
        
        const resultsContainer = document.getElementById("pdf-results");

        const pdfContainer = document.createElement("div");
        pdfContainer.className = "pdf-result";

        const downloadLink = document.createElement("a");
        downloadLink.href = pdfUrl;
        downloadLink.download = pdfUrl.split('/').pop(); 

        const pdfIcon = document.createElement("img");
        pdfIcon.src = "dwl.png"; 
        pdfIcon.alt = "PDF Icon";

        downloadLink.appendChild(pdfIcon);

        const caseNumberSpan = document.createElement("span");
        caseNumberSpan.textContent = `Pdf : ${caseNumber}`;

        pdfContainer.appendChild(downloadLink);
        pdfContainer.appendChild(caseNumberSpan);

        resultsContainer.appendChild(pdfContainer);

        caseNumber++; 
    }
}


document.getElementById("search-form").addEventListener("submit", function (e) {
    e.preventDefault();
    const keyword = document.getElementById("search-input").value;

    
    document.getElementById("pdf-results").innerHTML = "";
    caseNumber = 1; 

    const pdfUrls = [
        "Resume.pdf"       //Enter the Path to the PDFs
    ];

    
    pdfUrls.forEach(function (pdfUrl) {
        extractText(pdfUrl).then(function (extractedText) {
            searchP(extractedText, keyword, pdfUrl);
        });
    });
});
