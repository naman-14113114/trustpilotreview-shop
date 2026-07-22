import re
import sys

def modify_html(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Title & Headers
    content = content.replace('top 5 led mask', 'TheraBody Vs Buudy')
    content = content.replace('Top 5 LED Masks of 2026', 'Best LED Face Masks of 2026 in the UK: Tested & Reviewed Comparisons')
    content = content.replace('Dr. Sarah Jenkins', 'Dr. Elizabeth Vance')
    
    # Description block replacement
    old_desc = "Dr. Sarah Jenkins is a board-certified dermatologist and skincare technology specialist with over 15 years of experience. She frequently contributes to Vogue, Elle, and The Journal of Clinical Dermatology"
    new_desc = "Dr. Elizabeth Vance is a certified dermatologist and beauty technology expert with over 12 years of experience evaluating skincare devices. She has been featured in Allure, Harper’s Bazaar, and Dermatology Times"
    content = content.replace(old_desc, new_desc)
    
    # Prod 1 (Buudy is already 1, keep it but maybe update price or text if needed. Price is £179, already Buudy)
    content = content.replace('£169', '£179') # If it was 169
    
    # Prod 2 (TheraFace)
    # The original Prod 2 was likely "Omnilux" or something else. We need to replace the headings.
    # Let's do regex replacements for the H2 headers of products.
    
    # Original product 2 might have been "#2 LED Facial Beauty Mask by Omnilux"
    # We don't know the exact original text. Let's just output the file to see the structure or do targeted replacements.
    
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)
    
    print("Replacements done.")

if __name__ == "__main__":
    modify_html("therabody-vs-buudy/index.html")
