import fitz  # PyMuPDF
import os

# Define paths
pdf_folder = "public"
files_to_convert = [
    "Amitabh-web-dev-certificate.pdf",
    "certificate-Building-with-claude-api.pdf"
]

for pdf_file in files_to_convert:
    pdf_path = os.path.join(pdf_folder, pdf_file)
    
    if os.path.exists(pdf_path):
        # Open the PDF
        pdf_document = fitz.open(pdf_path)
        
        # Get the first page
        page = pdf_document[0]
        
        # Render to an image (PNG)
        pix = page.get_pixmap(matrix=fitz.Matrix(2, 2))  # 2x zoom for better quality
        
        # Create output filename
        output_filename = pdf_file.replace(".pdf", ".png")
        output_path = os.path.join(pdf_folder, output_filename)
        
        # Save the image
        pix.save(output_path)
        print(f"✓ Converted {pdf_file} to {output_filename}")
        
        pdf_document.close()
    else:
        print(f"✗ File not found: {pdf_file}")

print("\nConversion completed!")
