const puppeteer = require('puppeteer');

async function generatePDF(data) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    const htmlContent = `
        <html>
        <head>
            <title>Resume</title>
            <style>
                /* Add your CSS styles here */
                /* Global Styles */
                body {
                    font-family: Arial, sans-serif;
                    margin: 0;
                    padding: 0;
                    background-color: #f4f4f4;
                    color: #333;
                }
                
                .content {
                    max-width: 800px;
                    margin: 20px auto;
                    padding: 20px;
                    background-color: #fff;
                    border-radius: 5px;
                    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                }
                
                .section {
                    margin-bottom: 30px;
                }
                
                .section-title {
                    font-size: 24px;
                    margin-bottom: 15px;
                    color: #333;
                }
                
                /* Summary Section */
                .s-summ {
                    font-size: 16px;
                    line-height: 1.5;
                }
                
                /* Skills Section */
                .skills {
                    margin-top: 10px;
                }
                
                .skill {
                    display: inline-block;
                    background-color: #4CAF50;
                    color: white;
                    padding: 5px 10px;
                    margin-right: 5px;
                    margin-bottom: 5px;
                    border-radius: 3px;
                }
                
                /* Experience and Education Sections */
                .section p {
                    font-size: 16px;
                    line-height: 1.5;
                }
                /* Header Styles */
                    h1 {
                        font-size: 36px;
                        margin-bottom: 10px;
                        color: #333;
                    }

                    .s-add, .s-email {
                        font-size: 16px;
                        margin-bottom: 5px;
                    }

                    .s-email {
                        color: #666;
                    }

                    /* Skill Styles */
                    .skill {
                        background-color: #007bff;
                    }

                    /* Experience and Education Section Styles */
                    .section p {
                        margin-bottom: 10px;
                    }

                    /* Link Styles */
                    a {
                        color: #007bff;
                        text-decoration: none;
                        transition: color 0.3s ease;
                    }

                    a:hover {
                        color: #0056b3;
                    }

                    /* Button Styles */
                    .button {
                        display: inline-block;
                        padding: 10px 20px;
                        background-color: #007bff;
                        color: #fff;
                        border: none;
                        border-radius: 5px;
                        cursor: pointer;
                        transition: background-color 0.3s ease;
                    }

                    .button:hover {
                        background-color: #0056b3;
                    }
                
            </style>
        </head>
        <body style="font-family: Arial, sans-serif; background-color: #f4f4f4; color: #333;">
        <div class="content" style="max-width: 800px; margin: 20px auto; padding: 20px; background-color: #fff; border-radius: 5px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);">
            <section class="section" style="margin-bottom: 30px;">
                <h1 style="font-size: 36px; margin-bottom: 10px; color: #333;">${data.fullname}</h1>
                <p class="s-add" style="font-size: 16px; margin-bottom: 5px;">${data.saddress}</p>
                <p class="s-email" style="font-size: 16px; color: #666;">${data.email} | ${data.phone}</p>
            </section>
            
            <section class="section" style="margin-bottom: 30px;">
                <h2 class="section-title" style="font-size: 24px; margin-bottom: 15px; color: #333;">Summary</h2>
                <p class="s-summ" style="font-size: 16px; line-height: 1.5;">A motivated and results-oriented individual with a strong background in ${data.field} and a passion for creating efficient and user-friendly applications.</p>
            </section>
            
            <section class="section" style="margin-bottom: 30px;">
                <h2 class="section-title" style="font-size: 24px; margin-bottom: 15px; color: #333;">Skills</h2>
                <div class="skills" style="margin-top: 10px;">
                    ${data.skills.map(skill => `<span class="skill" style="display: inline-block; background-color: #4CAF50; color: white; padding: 5px 10px; margin-right: 5px; margin-bottom: 5px; border-radius: 3px;">${skill}</span>`).join(' ')}
                </div>
            </section>
            
            <section class="section" style="margin-bottom: 30px;">
                <h2 class="section-title" style="font-size: 24px; margin-bottom: 15px; color: #333;">Experience</h2>
                <p style="font-size: 16px; line-height: 1.5;">${data.experience}</p>
            </section>
            
            <section class="section" style="margin-bottom: 30px;">
                <h2 class="section-title" style="font-size: 24px; margin-bottom: 15px; color: #333;">Education</h2>
                <p style="font-size: 16px; line-height: 1.5;">${data.education}</p>
            </section>
        </div>
    </body>
    
        </html>
    `;

    await page.setContent(htmlContent);
    await page.pdf({ path: 'resume.pdf', format: 'A4' });

    await browser.close();
}

module.exports = generatePDF;
