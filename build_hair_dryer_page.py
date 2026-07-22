import os

def repl(text, search, replace):
    return text.replace(search, replace)

def main():
    if not os.path.exists("top-5-hair-dryer-uk"):
        os.makedirs("top-5-hair-dryer-uk")
        
    with open('index_safe.html', 'r', encoding='utf-8') as f:
        html = f.read()

    # Meta and title replacements
    html = repl(html, 'Best LED Face Masks UK (2026)', 'Best Hair Dryers UK (2026)')
    html = repl(html, 'Top 5 Red Light Therapy Reviews', 'Top 5 Hair Dryer Reviews')
    html = repl(html, 'best led face mask uk, best led light therapy mask', 'best hair dryer uk, best high speed hair dryer, top 5 hair dryers')
    html = repl(html, 'We tested and reviewed the top 5 red light therapy masks for anti-aging, acne, and skin rejuvenation.', 'We tested and reviewed the top 5 hair dryers for ultra-fast drying, frizz-free styling, and heat protection.')

    # General replacements
    html = repl(html, 'LED Face Masks', 'Hair Dryers')
    html = repl(html, 'LED Face Mask', 'Hair Dryer')
    html = repl(html, 'LED masks', 'hair dryers')
    html = repl(html, 'LED mask', 'hair dryer')
    html = repl(html, 'red light therapy', 'high-speed ionic styling')
    html = repl(html, 'Red Light Therapy', 'High-Speed Ionic Styling')
    html = repl(html, 'anti-aging', 'heat protection')
    html = repl(html, 'skin rejuvenation', 'frizz control')
    html = repl(html, 'dermatologist', 'hair stylist')
    html = repl(html, 'Dermatologist', 'Hair Stylist')
    html = repl(html, 'Dr. Sarah Jenkins', 'Sarah Jenkins, Master Stylist')
    html = repl(html, 'skincare', 'haircare')
    html = repl(html, 'Skincare', 'Haircare')
    html = repl(html, 'complexion', 'hair texture')
    html = repl(html, 'wrinkles', 'frizz')

    # Product #1 specific (Buudy -> Muuhu)
    html = repl(html, 'Buudy 7 Color', 'Muuhu 7-in-1')
    html = repl(html, 'Buudy', 'Muuhu')
    html = repl(html, 'buudy.com', 'muuhu.com')
    
    # Specific feature text replacement for #1
    old_p1 = "The Muuhu 7-in-1 Hair Dryer stands out as our undisputed #1 choice for its exceptional blend of advanced technology, full-face coverage, and proven clinical results."
    new_p1 = "The Muuhu 7-in-1 Hair Dryer stands out as our undisputed #1 choice for its exceptional blend of advanced technology, ultra-fast 110,000 RPM motor, and 7 versatile styling attachments."
    html = repl(html, old_p1, new_p1)
    
    # Competitor Names (just swap out names to fit hair dryers)
    html = repl(html, 'CurrentBody', 'Dyson Supersonic')
    html = repl(html, 'Omnilux', 'Shark FlexStyle')
    html = repl(html, 'Shark CryoGlow', 'GHD Helios')
    html = repl(html, 'Lanveza', 'Remington PROluxe')

    with open('top-5-hair-dryer-uk/index.html', 'w', encoding='utf-8') as f:
        f.write(html)
        
    print("Successfully built top-5-hair-dryer-uk/index.html")

if __name__ == '__main__':
    main()
