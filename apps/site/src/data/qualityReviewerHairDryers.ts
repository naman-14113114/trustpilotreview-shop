export interface QualityReviewerProduct {
  id: number;
  rank: string;
  name: string;
  brand?: string;
  rating_overall: string;
  price: string;
  original_price?: string;
  total_grade: string;
  sub_scores: {
    drying_time: string;
    heat_speed_settings: string;
    temperature_control: string;
    noise_level: string;
    value_for_money: string;
  };
  pros: string[];
  cons: string[];
  review: string[];
  image_path: string;
}

export const qualityReviewerProducts: QualityReviewerProduct[] = [
  {
    id: 1,
    rank: "1.",
    name: "Muuhu AirPro",
    brand: "Muuhu",
    rating_overall: "9.6/10",
    price: "129 GBP",
    original_price: "259 GBP",
    total_grade: "A+",
    sub_scores: {
      drying_time: "9.7/10",
      heat_speed_settings: "9.5/10",
      temperature_control: "9.4/10",
      noise_level: "9.3/10",
      value_for_money: "9.8/10",
    },
    pros: [
      "7 Attachments Included",
      "Excellent Value for Money",
      "Quick Drying Performance",
      "CE, UKCA & RoHS compliant.",
      "Intelligent Temperature Control",
      "Quiet Operation at Just 65 dB",
      "Produces Over 200M+ Negative Ions",
      "Ultra-Lightweight Design at 475g",
      "12 Different Heat And Speed Settings",
      "Rated 4.9/5 by 16,000+ UK Customers",
      "Free Gifts with Current Orders",
      "Smart App Companion",
      "90-Day Money-Back Guarantee",
    ],
    cons: [
      "Can Only Be Purchased Online",
      "Sells out quickly during sales",
      "Free app requires the purchase of Dryer",
    ],
    review: [
      "Our top pick is the Muuhu AirPro, a salon-grade device with a 1,600W, 110,000 RPM brushless motor, 3 temperature settings, 3 speed settings and seven professional attachments, including two Coanda auto-wrap curlers for effortless curls and waves.",
      "A major advantage is the complete styling system: a dedicated L-shaped base, left and right auto-wrap Coanda curlers, a smoothing brush, a round volumising brush, a concentrator nozzle, and a diffuser. Intelligent heat control and negative-ion technology dry hair fast while helping protect against heat damage.",
      "Trusted by over 16,000 customers with a 4.9-star rating, this styler delivers salon results at home. Currently priced at £129, it offers the best value on the market, combining a 110,000 RPM motor, seven attachments, ionic care, a 2-year warranty, and a 90-day money-back guarantee."
    ],
    image_path: "/img/hair/muuhu-airpro-hair-dryer.png"
  },
  {
    id: 2,
    rank: "2.",
    name: "Dyson Supersonic",
    brand: "Dyson",
    rating_overall: "8.9/10",
    price: "499 GBP",
    total_grade: "A-",
    sub_scores: {
      drying_time: "9.1/10",
      heat_speed_settings: "8.8/10",
      temperature_control: "9.3/10",
      noise_level: "9.1/10",
      value_for_money: "8.8/10"
    },
    pros: [
      "Features a hollow air inlet design",
      "Comes with a superb array of styling attachments",
      "Reliable temperature regulation",
      "Strong airflow measuring 50 m/s"
    ],
    cons: [
      "Much more expensive than top pick",
      "Noticeably heavy at 816g",
      "No free gifts included",
      "Fewer attachments than #1 pick",
      "Quite loud during operation (74dB)",
      "No companion app support",
      "Shorter money-back guarantee",
      "Cumbersome for travel"
    ],
    review: [
      "The Dyson Supersonic continues to be highly requested, which is hardly surprising given the immense hype surrounding its innovative technology since its 2016 launch.",
      "While we previously relied on it within our salons before transitioning to the Batroni, the Dyson remains an exceptional choice and arguably one of the most capable hair dryers available. However, compared to newer alternatives, it does present a few drawbacks.",
      "The unit is somewhat weighty, which can cause fatigue during prolonged use, and the operating volume is relatively high. On the plus side, its impressive airflow ensures swift drying times, and the generous selection of included styling attachments is a brilliant bonus."
    ],
    image_path: "/images/quality-reviewer/product-2.webp"
  },
  {
    id: 3,
    rank: "3.",
    name: "Gama IQ Perfetto",
    brand: "Gama IQ",
    rating_overall: "9.6/10",
    price: "319 GBP",
    total_grade: "B",
    sub_scores: {
      drying_time: "8.5/10",
      heat_speed_settings: "8.7/10",
      temperature_control: "8.4/10",
      noise_level: "9.1/10",
      value_for_money: "8.2/10"
    },
    pros: [
      "Incorporates temperature control",
      "Exceptionally lightweight design",
      "Includes three styling attachments"
    ],
    cons: [
      "No free gifts with order",
      "Fewer attachments included",
      "Expensive compared to top pick",
      "Lacks negative ion conditioning",
      "No mobile app connectivity",
      "Hidden return and restocking fees",
      "Shorter money-back guarantee period",
      "Emits noticeable noise (78dB)",
      "Missing delayed shutdown feature"
    ],
    review: [
      "Earning third place in our assessment, the Gama IQ Perfetto is a fascinating contender. As the lightest hair dryer we tested, it offers effortless handling for drying and styling—a feature we thoroughly appreciated.",
      "It also boasts effective temperature control, though specific details on its heat monitoring frequency were unavailable. Unlike several competitors, it includes three useful attachments, complete with a diffuser.",
      "Conversely, the absence of negative ion technology means it may not be ideal for those prone to frizzy hair. Moreover, the motor is rather loud, and it provides fewer heat and speed combinations than rival models. Factoring in its premium cost and the apparent lack of a delayed shutdown feature, we have slight reservations regarding its long-term durability."
    ],
    image_path: "/images/quality-reviewer/product-3.webp"
  },
  {
    id: 4,
    rank: "4.",
    name: "T3 Cura Luxe",
    brand: "T3",
    rating_overall: "9.6/10",
    price: "279 GBP",
    total_grade: "C+",
    sub_scores: {
      drying_time: "7.7/10",
      heat_speed_settings: "7.0/10",
      temperature_control: "7.1/10",
      noise_level: "8.2/10",
      value_for_money: "6.5/10"
    },
    pros: [
      "Equipped with negative ion technology",
      "Provides 10 versatile heat and speed settings"
    ],
    cons: [
      "Fewer styling attachments than #1 pick",
      "Substantially pricier than top pick",
      "Subject to hidden return fees",
      "Noticeably heavy at 500g",
      "No complimentary gifts included",
      "Lacks automatic temperature regulation",
      "Less money-back guarantee coverage",
      "No smart app support",
      "Quite loud during use (74dB)",
      "Does not include a diffuser"
    ],
    review: [
      "Securing the fourth spot is the T3 Cura Luxe, another much-discussed hair dryer that warranted a thorough evaluation. Performance was commendable, offering a respectable 10 heat and speed configurations—though fewer than some alternatives.",
      "Its standout feature is an excellent negative ion system, which proved highly effective at tackling frizz. Despite these strengths, the T3 Cura Luxe falls short by omitting a diffuser and lacking built-in temperature regulation to prevent heat damage.",
      "It also sits at the higher end of the pricing spectrum and appears to miss a delayed shutdown function. Additionally, it operates rather loudly and carries more physical weight than many others in our lineup."
    ],
    image_path: "/images/quality-reviewer/product-4.webp"
  },
  {
    id: 5,
    rank: "5.",
    name: "Harry Josh Ultra Light",
    brand: "Harry Josh",
    rating_overall: "9.6/10",
    price: "429 GBP",
    total_grade: "D",
    sub_scores: {
      drying_time: "7.1/10",
      heat_speed_settings: "6.5/10",
      temperature_control: "6.5/10",
      noise_level: "8.3/10",
      value_for_money: "7.4/10"
    },
    pros: [
      "Offers 12 varied heat and speed configurations",
      "Delivers a very capable airflow of 42 m/s"
    ],
    cons: [
      "Extremely expensive compared to top pick",
      "Significantly fewer attachments",
      "No free bonus gifts",
      "Hidden return shipping and fees",
      "Diffuser attachment is not included",
      "Shorter trial & money-back window",
      "Somewhat heavy at 526g",
      "No companion mobile app",
      "Lacks delayed shutdown feature"
    ],
    review: [
      "The Harry Josh Ultra Light proved to be a solid performer in our trials. Equipped with 12 distinct setting combinations and reliable airflow, it allowed us to craft an array of stunning hairstyles.",
      "While it wasn't the quickest at drying, the final finish was undeniably impressive. The styling experience would have been vastly improved had a diffuser been provided, but sadly it is absent.",
      "At 526g, it felt slightly heavier to manoeuvre than its peers, and the substantial asking price undeniably impacted its overall value-for-money rating."
    ],
    image_path: "/images/quality-reviewer/product-5.webp"
  }
];
