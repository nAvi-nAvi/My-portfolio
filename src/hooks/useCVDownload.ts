import { useToast } from '@/hooks/use-toast';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { CV_CONFIG } from '@/constants';

export const useCVDownload = () => {
  const { toast } = useToast();

  const generateCVHTML = (): string => {
    return `
      <div id="cv-template" style="background: white; padding: 70px; max-width: 1100px; font-family: Arial, sans-serif; color: #333;">
        <!-- Header -->
        <div style="border-bottom: 4px solid #2563eb; padding-bottom: 20px; margin-bottom: 20px;">
          <h1 style="font-size: 32px; font-weight: bold; color: #2563eb; margin-bottom: 6px;">Navaneedha Krishnan</h1>
          <p style="font-size: 20px; color: #666; margin-bottom: 6px;">Full Stack Software Engineer</p>
          <div style="display: flex; flex-wrap: wrap; gap: 16px; font-size: 14px; color: #666;">
            <div style="display: flex; align-items: center;">
              <span style="font-weight: bold;">📧</span>
              <span style="margin-left: 4px;">navaneedhakrishnan94@gmail.com</span>
            </div>
            <div style="display: flex; align-items: center;">
              <span style="font-weight: bold;">📱</span>
              <span style="margin-left: 4px;">+91 9944494462</span>
            </div>
            <div style="display: flex; align-items: center;">
              <span style="font-weight: bold;">📍</span>
              <span style="margin-left: 4px;">Chennai 600041, India</span>
            </div>
          </div>
        </div>

        <!-- Professional Summary -->
        <div style="margin-bottom: 18px;">
          <h2 style="font-size: 24px; font-weight: bold; color: #2563eb; margin-bottom: 10px; border-bottom: 2px solid #e5e7eb; padding-bottom: 6px;">
            Professional Summary
          </h2>
          <p style="color: #666; line-height: 1.6;">
            Experienced Full Stack Software Engineer with 3+ years of expertise in React.js, Node.js, 
            Angular, and Java Spring Boot. Proven track record of leading development teams, mentoring 
            junior developers, and delivering scalable applications across diverse industries. Specialized 
            in both rational and irrational databases, Python development, and comprehensive testing strategies.
          </p>
        </div>

        <!-- Technical Skills -->
        <div style="margin-bottom: 18px;">
          <h2 style="font-size: 24px; font-weight: bold; color: #2563eb; margin-bottom: 10px; border-bottom: 2px solid #e5e7eb; padding-bottom: 6px;">
            Technical Skills
          </h2>
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
            <div>
              <h3 style="font-weight: bold; color: #333; margin-bottom: 8px;">Frontend Technologies</h3>
              <ul style="color: #666; margin: 0; padding-left: 20px;">
                <li>React.js, Next.js, Angular</li>
                <li>TypeScript, JavaScript</li>
                <li>HTML5, CSS3, Tailwind CSS</li>
                <li>React Native (Mobile Development)</li>
              </ul>
            </div>
            <div>
              <h3 style="font-weight: bold; color: #333; margin-bottom: 8px;">Backend Technologies</h3>
              <ul style="color: #666; margin: 0; padding-left: 20px;">
                <li>Node.js, Express.js</li>
                <li>Java Spring Boot, Hibernate</li>
                <li>Python</li>
                <li>RESTful APIs, GraphQL</li>
              </ul>
            </div>
            <div>
              <h3 style="font-weight: bold; color: #333; margin-bottom: 8px;">Databases & Tools</h3>
              <ul style="color: #666; margin: 0; padding-left: 20px;">
                <li>MongoDB, PostgreSQL, Redis</li>
                <li>RabbitMQ, Message Queues</li>
                <li>Git, Docker</li>
                <li>AWS, Cloud Services</li>
              </ul>
            </div>
            <div>
              <h3 style="font-weight: bold; color: #333; margin-bottom: 8px;">Testing & Methodologies</h3>
              <ul style="color: #666; margin: 0; padding-left: 20px;">
                <li>Unit Testing, Integration Testing</li>
                <li>Jest, Mocha, Chai</li>
                <li>Agile/Scrum Methodologies</li>
                <li>CI/CD Pipelines</li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Professional Experience -->
        <div style="margin-bottom: 18px;">
          <h2 style="font-size: 24px; font-weight: bold; color: #2563eb; margin-bottom: 10px; border-bottom: 2px solid #e5e7eb; padding-bottom: 8px;">
            Professional Experience
          </h2>
          <div style="margin-bottom: 16px;">
            <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 8px;">
              <h3 style="font-size: 18px; font-weight: bold; color: #333;">Software Engineer</h3>
              <span style="color: #666;">3+ Years</span>
            </div>
            <p style="color: #2563eb; font-weight: 500; margin-bottom: 8px;">KaayLabs Pvt Ltd, Chennai</p>
            <ul style="color: #666; margin: 0; padding-left: 20px;">
              <li>Led multiple full-stack development projects and mentored junior developers</li>
              <li>Delivered scalable solutions across various industries including finance, e-commerce, and logistics</li>
              <li>Specialized in React.js, Node.js, and Java Spring Boot applications</li>
              <li>Focused on performance optimization and maintaining high code quality standards</li>
              <li>Implemented comprehensive testing strategies and error handling mechanisms</li>
            </ul>
          </div>
        </div>

        <!-- Education -->
        <div style="margin-bottom: 18px; margin-top: 100px;">
          <h2 style="font-size: 24px; font-weight: bold; color: #2563eb; margin-bottom: 10px; border-bottom: 2px solid #e5e7eb; padding-bottom: 8px;">
            Education
          </h2>
          <table style="width: 100%; border-collapse: collapse; margin-top: 8px;">
            <thead>
              <tr style="border-bottom: 1px solid #e5e7eb;">
                <th style="text-align: left; padding: 8px 0; font-size: 14px; font-weight: bold; color: #333; width: 15%;">Degree</th>
                <th style="text-align: left; padding: 8px 0; font-size: 14px; font-weight: bold; color: #333; width: 50%;">Institution</th>
                <th style="text-align: left; padding: 8px 0; font-size: 14px; font-weight: bold; color: #333; width: 20%;">Performance</th>
                <th style="text-align: right; padding: 8px 0; font-size: 14px; font-weight: bold; color: #333; width: 15%;">Year</th>
              </tr>
            </thead>
            <tbody>
              <tr style="border-bottom: 1px solid #f3f4f6;">
                <td style="padding: 12px 0; font-size: 14px; color: #666; vertical-align: top;">BE (EEE)</td>
                <td style="padding: 12px 0; font-size: 14px; font-weight: bold; color: #333; vertical-align: top;">Loyola Institute of Technology and Science, Kanyakumari</td>
                <td style="padding: 12px 0; font-size: 14px; color: #666; vertical-align: top;"><strong>CGPA:</strong> 8.37</td>
                <td style="padding: 12px 0; font-size: 14px; color: #666; text-align: right; vertical-align: top;">2017</td>
              </tr>
              <tr style="border-bottom: 1px solid #f3f4f6;">
                <td style="padding: 12px 0; font-size: 14px; color: #666; vertical-align: top;">HSC</td>
                <td style="padding: 12px 0; font-size: 14px; font-weight: bold; color: #333; vertical-align: top;">MKVK Matric Higher Secondary School, Tenkasi</td>
                <td style="padding: 12px 0; font-size: 14px; color: #666; vertical-align: top;"><strong>Percentage:</strong> 86%</td>
                <td style="padding: 12px 0; font-size: 14px; color: #666; text-align: right; vertical-align: top;">2013</td>
              </tr>
              <tr style="border-bottom: 1px solid #f3f4f6;">
                <td style="padding: 12px 0; font-size: 14px; color: #666; vertical-align: top;">SSLC</td>
                <td style="padding: 12px 0; font-size: 14px; font-weight: bold; color: #333; vertical-align: top;">Shri Krishnaswamy Matric Higher Secondary School, Chennai</td>
                <td style="padding: 12px 0; font-size: 14px; color: #666; vertical-align: top;"><strong>Percentage:</strong> 80%</td>
                <td style="padding: 12px 0; font-size: 14px; color: #666; text-align: right; vertical-align: top;">2011</td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- Key Projects -->
        <div style="margin-bottom: 18px;">
          <h2 style="font-size: 24px; font-weight: bold; color: #2563eb; margin-bottom: 10px; border-bottom: 2px solid #e5e7eb; padding-bottom: 8px;">
            Key Projects
          </h2>
          <div style="display: flex; flex-direction: column; gap: 16px;">
            <div>
              <h3 style="font-size: 18px; font-weight: bold; color: #333; margin-bottom: 4px;">Searchqore</h3>
              <p style="color: #666; margin-bottom: 8px;">Advanced bookkeeping software with automated transaction categorization</p>
              <p style="font-size: 14px; color: #666;"><strong>Tech:</strong> React.js, Node.js, Spring Boot, RabbitMQ</p>
            </div>
            <div>
              <h3 style="font-size: 18px; font-weight: bold; color: #333; margin-bottom: 4px;">Pampered Chef Migration</h3>
              <p style="color: #666; margin-bottom: 8px;">Migrated 20-year-old Java Hibernate JSP application to React and Node.js</p>
              <p style="font-size: 14px; color: #666;"><strong>Tech:</strong> React.js, Node.js, Java, Hibernate, CMS</p>
            </div>
            <div>
              <h3 style="font-size: 18px; font-weight: bold; color: #333; margin-bottom: 4px;">Mouser Pricing Application</h3>
              <p style="color: #666; margin-bottom: 8px;">Product quotation and orders application with automated best pricing</p>
              <p style="font-size: 14px; color: #666;"><strong>Tech:</strong> React.js, Node.js, Redis, Pricing Engine</p>
            </div>
            <div>
              <h3 style="font-size: 18px; font-weight: bold; color: #333; margin-bottom: 4px;">Pie-Factory Carbon Tracker</h3>
              <p style="color: #666; margin-bottom: 8px;">Complete carbon tracking application with multi-tenant architecture</p>
              <p style="font-size: 14px; color: #666;"><strong>Tech:</strong> React.js, Node.js, Multi-tenant, Payment Gateway</p>
            </div>
            <div>
              <h3 style="font-size: 18px; font-weight: bold; color: #333; margin-bottom: 4px;">Dynamic Workflow Engine</h3>
              <p style="color: #666; margin-bottom: 8px;">Configurable workflow application with auto/manual approvals</p>
              <p style="font-size: 14px; color: #666;"><strong>Tech:</strong> React.js, Node.js, Workflow Engine, Dynamic Forms</p>
            </div>
          </div>
        </div>

        <!-- Core Competencies -->
        <div style="margin-bottom: 18px;">
          <h2 style="font-size: 24px; font-weight: bold; color: #2563eb; margin-bottom: 10px; border-bottom: 2px solid #e5e7eb; padding-bottom: 8px;">
            Core Competencies
          </h2>
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; color: #666;">
            <ul style="margin: 0; padding-left: 20px;">
              <li>Full Stack Development</li>
              <li>Team Leadership & Mentoring</li>
              <li>Project Management</li>
              <li>Performance Optimization</li>
            </ul>
            <ul style="margin: 0; padding-left: 20px;">
              <li>Code Quality & Best Practices</li>
              <li>Problem Solving</li>
              <li>Agile Methodologies</li>
              <li>Cross-platform Development</li>
            </ul>
          </div>
        </div>
      </div>
    `;
  };

  const downloadCV = async (): Promise<void> => {
    try {
      toast({
        title: "Generating CV..."
      });

      // Create a temporary container for the CV
      const tempContainer = document.createElement('div');
      tempContainer.style.position = 'absolute';
      tempContainer.style.left = '-9999px';
      tempContainer.style.top = '0';
      tempContainer.style.width = `${CV_CONFIG.WIDTH}px`;
      tempContainer.style.backgroundColor = 'white';
      tempContainer.style.padding = '20px';
      tempContainer.style.fontFamily = 'Arial, sans-serif';
      document.body.appendChild(tempContainer);

      // Create CV content directly
      tempContainer.innerHTML = generateCVHTML();

      // Wait for the content to render
      await new Promise(resolve => setTimeout(resolve, 500));

      // Get the CV element
      const cvElement = tempContainer.querySelector('#cv-template');
      
      if (!cvElement) {
        throw new Error('CV template not found');
      }

      // Convert to canvas
      const canvas = await html2canvas(cvElement as HTMLElement, {
        scale: CV_CONFIG.SCALE,
        useCORS: true,
        allowTaint: true,
        backgroundColor: '#ffffff',
        width: CV_CONFIG.WIDTH,
        height: cvElement.scrollHeight
      });

      // Create PDF
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      
      const imgWidth = CV_CONFIG.A4_WIDTH;
      const pageHeight = CV_CONFIG.A4_HEIGHT;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      let heightLeft = imgHeight;

      let position = 0;

      // Add first page
      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      // Add additional pages if needed
      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }

      // Download the PDF
      pdf.save(CV_CONFIG.FILENAME);

      // Clean up
      document.body.removeChild(tempContainer);

      // Show success toast
      toast({
        title: "CV Downloaded Successfully!",
        description: `My CV has been downloaded as '${CV_CONFIG.FILENAME}'`,
      });

    } catch (error) {
      console.error('CV generation failed:', error);
      toast({
        title: "Failed to Generate CV",
        description: "There was an error generating your CV. Please try again.",
        variant: "destructive",
      });
    }
  };

  return { downloadCV };
}; 