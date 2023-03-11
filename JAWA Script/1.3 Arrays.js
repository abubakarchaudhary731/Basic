const stdNames = [  "M UMER NADEEM",
                    "ZAIN KHALID",
                    "ABU BAKAR",
                    "YUSRA NOOR",
                    "AYSHA",
                    "MALIK AMAN",
                    "AHMED",
                    "HAMID",
                    "ARSLAN"
                ];

document.write(`${stdNames} <br> <br>`);

stdNames.splice(0,2); // 0 is the index no & 2 is the range.....in simple words jaha sy jaha tk remove krna. 
document.write(`${stdNames} <br> <br>`);

stdNames.push("Ali"); // Add New Element. 
document.write(`${stdNames} <br> <br>`);

stdNames.reverse()
document.write(`${stdNames} <br> <br>`);

stdNames.sort(); // for Sequance.
document.write(`${stdNames}  <br> <br>`);

stdNames.pop(); // Remove Last Element.
document.write(`${stdNames} <br> <br>`);