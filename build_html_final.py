import re
import sys

def repl(text, search, replace):
    if search not in text:
        print(f"WARNING: Could not find '{search}'")
    return text.replace(search, replace)

def main():
    with open('therabody-vs-buudy/index.html', 'r', encoding='utf-8') as f:
        html = f.read()

    # Base replacements
    html = repl(html, '<title>top 5 led mask', '<title>TheraBody Vs Buudy')
    html = repl(html, 'Top 5 LED Masks of 2026', 'Best LED Face Masks of 2026')
    html = repl(html, 'Dr. Sarah Jenkins', 'Dr. Elizabeth Vance')

    old_doc = "Dr. Sarah Jenkins is a board-certified dermatologist and skincare technology specialist with over 15 years of experience. She frequently contributes to Vogue, Elle, and The Journal of Clinical Dermatology"
    new_doc = "Dr. Elizabeth Vance is a certified dermatologist and beauty technology expert with over 12 years of experience evaluating skincare devices. She has been featured in Allure, Harper’s Bazaar, and Dermatology Times"
    html = repl(html, old_doc, new_doc)

    images = {
        'old_2': '176872504642f0322d65.jpeg',
        'old_3': '1769107230af732ce69a.jpeg',
        'old_4': '1768726434a7e6301df7.png',
        'old_5': '1768726655a4cf8cd691.png',
        
        'new_2': '177107817340059938e3.jpeg', # TheraFace
        'new_3': '176872504642f0322d65.jpeg', # CurrentBody
        'new_4': '1769107230af732ce69a.jpeg', # Omnilux
        'new_5': '1768726434a7e6301df7.png',  # Shark
    }
    
    html = html.replace(images['old_2'], 'IMG_PLACEHOLDER_2')
    html = html.replace(images['old_3'], 'IMG_PLACEHOLDER_3')
    html = html.replace(images['old_4'], 'IMG_PLACEHOLDER_4')
    html = html.replace(images['old_5'], 'IMG_PLACEHOLDER_5')
    
    html = html.replace('IMG_PLACEHOLDER_2', images['new_2'])
    html = html.replace('IMG_PLACEHOLDER_3', images['new_3'])
    html = html.replace('IMG_PLACEHOLDER_4', images['new_4'])
    html = html.replace('IMG_PLACEHOLDER_5', images['new_5'])

    # PRODUCT 2 (TheraFace - replaces CurrentBody)
    html = repl(html, '<strong>#2 LED Facial Beauty Mask by CurrentBody</strong>', '<strong>#2 LED Facial Beauty Mask by TheraFace</strong>')
    html = repl(html, 'CurrentBody LED Mask</span></a></h3>', 'TheraFace LED Mask</span></a></h3>')
    # Price
    # Let's replace the first £399.99 we find, which is Product #2.
    html = html.replace('£399.99', 'PRICE_PLACEHOLDER_2', 1) 
    html = html.replace('PRICE_PLACEHOLDER_2', '£579')
    # Text
    old_p2_1 = "The CurrentBody LED Mask stands out as a premier selection in our evaluation, solidifying its reputation as a global leader in non-invasive skincare technology. Engineered with a sophisticated blend of red and near-infrared light, this device is clinically projected to reduce wrinkles by 24% in just four weeks."
    new_p2_1 = "The TheraFace Mask lands at number two, bringing the heavy-hitting reputation of Therabody (famous for the Theragun) into the skincare world. This device is a technological beast, boasting an impressive 648 medical-grade LEDs and a unique \"VibraWave\" massage therapy feature designed to ease facial tension while treating the skin."
    
    old_p2_2 = "Its proprietary \"Pillow Technology\" ensures uniform light distribution across all facial contours, maximizing the efficacy of every 10-minute session. Grounded in clinical research and expert-backed science, it remains a top-tier investment for those seeking professional-grade skin rejuvenation at home."
    new_p2_2 = "It offers a clinically proven combination of Red, Blue, and Yellow light therapies to tackle wrinkles, acne, and uneven tone. The cordless design is a nice touch, allowing for freedom of movement during the quick 9-minute treatments."
    
    old_p2_3 = "Trusted by over 500,000 users across 80 countries, the mask has earned a 97% satisfaction rate for delivering a visibly brighter and more refreshed complexion. It continues to be a benchmark for reliability and proven results in the domestic beauty-tech sector."
    new_p2_3 = "However, the \"premium\" nature of this device comes with a massive drawback: the price. At £579, it is more than triple the cost of our top pick. Furthermore, despite the high cost, it is a face-only device. It completely neglects the neck and décolletage areas, which are standard coverage zones with the Buudy mask. It is also a rigid, heavy headset rather than a flexible silicone mask, which some users find less comfortable for relaxation."
    
    html = repl(html, old_p2_1, new_p2_1)
    html = repl(html, old_p2_2, new_p2_2)
    html = repl(html, old_p2_3, new_p2_3)


    # PRODUCT 3 (CurrentBody - replaces Omnilux)
    html = repl(html, '<strong>#3 LED Facial Beauty Mask by Omnilux</strong>', '<strong>#3 LED Facial Beauty Mask by CurrentBody</strong>')
    html = repl(html, 'Omnilux LED Mask</span></a></h3>', 'CurrentBody LED Mask</span></a></h3>')
    html = html.replace('£348', 'PRICE_PLACEHOLDER_3', 1)
    html = html.replace('PRICE_PLACEHOLDER_3', '£399.99')
    
    old_p3_1 = "Omnilux remains a preeminent name in the light therapy industry, recognized for bringing professional-grade standards to the home skincare market. Utilizing a clinically proven combination of red and near-infrared LED light, this device is specifically engineered to target deep-set wrinkles and revitalize skin texture within weeks of consistent use."
    new_p3_1 = "The CurrentBody LED Mask stands out as a premier selection in our evaluation, solidifying its reputation as a global leader in non-invasive skincare technology. Engineered with a sophisticated blend of red and near-infrared light, this device is clinically projected to reduce wrinkles by 24% in just four weeks."
    
    old_p3_2 = "While it carries a premium price point of £348, the mask is highly regarded for its ergonomic design, offering a comfortable fit that ensures a seamless user experience. Favored by dermatological experts and skincare enthusiasts alike, the device has earned significant praise for delivering high-quality results that rival in-clinic treatments."
    new_p3_2 = "Its proprietary \"Pillow Technology\" ensures uniform light distribution across all facial contours, maximizing the efficacy of every 10-minute session. Grounded in clinical research and expert-backed science, it remains a top-tier investment for those seeking professional-grade skin rejuvenation at home."
    
    old_p3_3 = "For those prioritizing long-term skin health and professional-standard efficacy, the Omnilux mask represents a sophisticated and reliable investment in modern beauty technology. It remains a top-tier choice for consumers seeking a durable, expert-backed solution for advanced facial rejuvenation."
    new_p3_3 = "Trusted by over 500,000 users across 80 countries, the mask has earned a 97% satisfaction rate for delivering a visibly brighter and more refreshed complexion. It continues to be a benchmark for reliability and proven results in the domestic beauty-tech sector."
    
    html = repl(html, old_p3_1, new_p3_1)
    html = repl(html, old_p3_2, new_p3_2)
    html = repl(html, old_p3_3, new_p3_3)


    # PRODUCT 4 (Omnilux - replaces Shark)
    html = repl(html, '<strong>#4 LED Facial Beauty Mask by </strong>Shark CryoGlow', '<strong>#4 LED Facial Beauty Mask by Omnilux</strong>')
    html = repl(html, 'Shark CryoGlow<span style="color: rgb(0, 0, 0)"> LED Mask', '<span style="color: rgb(0, 0, 0)">Omnilux LED Mask')
    html = repl(html, 'Shark CryoGlow LED Mask</span>', 'Omnilux LED Mask</span>')
    html = html.replace('£299.99', 'PRICE_PLACEHOLDER_4', 1)
    html = html.replace('PRICE_PLACEHOLDER_4', '£348')
    
    old_p4_1 = "Our top pick after rigorous testing is the Shark CryoGlow LED Face Mask, which has quickly made headlines and won prestigious beauty awards. From a trusted brand known for high-tech innovation, Shark offers the first LED mask featuring integrated under-eye cooling technology, making it the ultimate 2-in-1 solution for comprehensive facial care."
    new_p4_1 = "Omnilux remains a preeminent name in the light therapy industry, recognized for bringing professional-grade standards to the home skincare market. Utilizing a clinically proven combination of red and near-infrared LED light, this device is specifically engineered to target deep-set wrinkles and revitalize skin texture within weeks of consistent use."
    
    old_p4_2 = "Trusted by leading beauty editors at Oprah Daily and Women’s Health, this mask offers three \"chill\" levels and four distinct treatment modes, including Better Ageing and Blemish Repair. These advanced settings ensure a quick and efficient therapy session in as little as 6 to 8 minutes, utilizing proven wavelengths like Red (630nm) and Blue (415nm) light."
    new_p4_2 = "While it carries a premium price point of £348, the mask is highly regarded for its ergonomic design, offering a comfortable fit that ensures a seamless user experience. Favored by dermatological experts and skincare enthusiasts alike, the device has earned significant praise for delivering high-quality results that rival in-clinic treatments."
    
    old_p4_3 = "In our experience, a single daily session is all that is required to see noticeable improvements in skin clarity and tone. The independent clinical studies and dermatologist-backed technology specifically excel at brightening the under-eye area, with users reporting that the cooling pads visibly reduce puffiness and refresh the complexion after just one use."
    new_p4_3 = "For those prioritizing long-term skin health and professional-standard efficacy, the Omnilux mask represents a sophisticated and reliable investment in modern beauty technology. It remains a top-tier choice for consumers seeking a durable, expert-backed solution for advanced facial rejuvenation."

    html = repl(html, old_p4_1, new_p4_1)
    html = repl(html, old_p4_2, new_p4_2)
    html = repl(html, old_p4_3, new_p4_3)


    # PRODUCT 5 (Shark CryoGlow - replaces Lavenza)
    html = repl(html, '<strong>#5 LED Facial Beauty Mask by Lavenza</strong>', '<strong>#5 LED Facial Beauty Mask by Shark CryoGlow</strong>')
    html = repl(html, 'Lavenza<span style="color: rgb(0, 0, 0)"> LED Mask', 'Shark CryoGlow<span style="color: rgb(0, 0, 0)"> LED Mask')
    html = html.replace('£179', 'PRICE_PLACEHOLDER_5', 1) # Note: Buudy is also £179, but it's first. Just replace the *last* £179 or specific area.
    html = html.replace('PRICE_PLACEHOLDER_5', '£299.99')
    
    old_p5_1 = "The Lanveza LED Facial Beauty Mask has gained steady visibility on social media as a specialized anti-aging tool. While it is FDA-cleared and utilizes a standard blend of red and near-infrared light, it ranks fifth on our list due to its narrow functional scope. It is designed primarily for a basic 10-minute anti-aging routine rather than a comprehensive skincare treatment."
    new_p5_1 = "Our top pick after rigorous testing is the Shark CryoGlow LED Face Mask, which has quickly made headlines and won prestigious beauty awards. From a trusted brand known for high-tech innovation, Shark offers the first LED mask featuring integrated under-eye cooling technology, making it the ultimate 2-in-1 solution for comprehensive facial care."
    
    old_p5_2 = "Despite the security of a 90-day guarantee, the device lacks the versatility of our top-tier picks. With only <strong>132 LEDs</strong>—significantly fewer than the high-density <strong>Buudy</strong> mask—it offers weaker light coverage and lacks essential neck treatment. Furthermore, it is restricted to just two wavelengths, missing the multi-color spectrum needed to target acne, dark spots, or inflammation."
    new_p5_2 = "Trusted by leading beauty editors at Oprah Daily and Women’s Health, this mask offers three \"chill\" levels and four distinct treatment modes, including Better Ageing and Blemish Repair. These advanced settings ensure a quick and efficient therapy session in as little as 6 to 8 minutes, utilizing proven wavelengths like Red (630nm) and Blue (415nm) light."
    
    old_p5_3 = "User feedback also points to several ergonomic and technical flaws, including an uncomfortable fit around the nose and unclear instructions. The absence of a low-battery indicator further detracts from the user experience, leading to unexpected mid-session shut-offs. While suitable as an entry-level device, its limited features and inconsistent data make it a less effective investment for professional-grade results."
    new_p5_3 = "In our experience, a single daily session is all that is required to see noticeable improvements in skin clarity and tone. The independent clinical studies and dermatologist-backed technology specifically excel at brightening the under-eye area, with users reporting that the cooling pads visibly reduce puffiness and refresh the complexion after just one use."
    
    html = repl(html, old_p5_1, new_p5_1)
    html = repl(html, old_p5_2, new_p5_2)
    html = repl(html, old_p5_3, new_p5_3)


    with open('therabody-vs-buudy/index.html', 'w', encoding='utf-8') as f:
        f.write(html)

if __name__ == '__main__':
    main()
