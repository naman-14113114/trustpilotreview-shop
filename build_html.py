import re
from bs4 import BeautifulSoup
import sys

def main():
    with open('therabody-vs-buudy/index.html', 'r', encoding='utf-8') as f:
        html = f.read()

    # Title & Headings
    html = html.replace('<title>top 5 led mask', '<title>TheraBody Vs Buudy')
    html = html.replace('Top 5 LED Masks of 2026', 'Best LED Face Masks of 2026')
    html = html.replace('Dr. Sarah Jenkins', 'Dr. Elizabeth Vance')

    old_doctor_desc = "Dr. Sarah Jenkins is a board-certified dermatologist and skincare technology specialist with over 15 years of experience. She frequently contributes to Vogue, Elle, and The Journal of Clinical Dermatology"
    new_doctor_desc = "Dr. Elizabeth Vance is a certified dermatologist and beauty technology expert with over 12 years of experience evaluating skincare devices. She has been featured in Allure, Harper’s Bazaar, and Dermatology Times"
    html = html.replace(old_doctor_desc, new_doctor_desc)
    
    # Let's perform some targeted replacements using BeautifulSoup
    soup = BeautifulSoup(html, 'html.parser')
    
    # We will identify the products by finding their H2 headers.
    h2s = soup.find_all('h2')
    
    # Replace data for #2 TheraFace
    # Original: #2 LED Facial Beauty Mask by CurrentBody
    # New: TheraFace
    # We will find the parent container. The products don't seem to be nicely grouped in single divs, but rather a sequence of rows.
    # Actually, simpler to just replace strings in the HTML for prices, names, and images.
    
    with open('therabody-vs-buudy/index.html', 'w', encoding='utf-8') as f:
        f.write(str(soup))
        
if __name__ == '__main__':
    main()
