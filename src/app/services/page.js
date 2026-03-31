const servicesData = [
  {
    category: "Hollywood Method Lift Up Facial Massage",
    items: [
      {
        name: "Hollywood Lifting Express 30 mins",
        duration: "30 min",
        price: "$80",
        image: "/services/hollywood-lifting-express.jpg",
        description:
          "A quick lifting treatment for instant glow and sculpted look — in just 30 minutes. Perfect before an event or for a fast skin refresh.",
        details: [
          "Targeted lifting massage",
          "Muscle activation",
          "Improved circulation",
          "Great for first-time clients or as maintenance between full treatments",
        ],
      },
      {
        name: "Hollywood Lifting Massage",
        duration: "90 min",
        price: "$160",
        image: "/services/hollywood-lifting-massage.jpg",
        description:
          "A signature sculpting treatment designed to lift, tone, and restore natural facial structure. This treatment includes deep work on the face, neck, and décolleté, combining lifting techniques, lymphatic drainage, and targeted muscle and fascia release.",
        details: [
          "Cleansing & toning",
          "Personalized oil selection",
          "Deep facial lifting massage (5-stage technique)",
          "Neck & décolleté sculpting",
          "Lymphatic drainage to reduce puffiness",
          "Deep muscle and fascia work",
          "Scalp massage",
          "Scalp & foot massage (bonus)",
        ],
        extra:
          "This treatment not only improves skin appearance but also releases tension, enhances circulation, and promotes a naturally lifted, refreshed look.",
      },
      {
        name: "Hollywood Lifting Ritual",
        duration: "135 min",
        price: "$220",
        image: "/services/hollywood-lifting-ritual.jpg",
        description:
          "A complete lifting ritual designed to deeply sculpt, renew, and restore your skin. This advanced treatment combines our signature Hollywood Lifting Massage with professional skincare steps for maximum visible results and long-lasting glow.",
        details: [
          "Deep cleansing & exfoliation",
          "Toning & personalized skincare selection",
          "Targeted serums & active ingredients",
          "Signature 5-stage lifting massage (face, neck & décolleté)",
          "Lymphatic drainage & fascia work",
          "Customized mask",
          "Hand mask treatment",
          "Scalp massage",
          "Scalp & foot massage (bonus)",
        ],
        extra:
          "This ritual works on both skin and deeper structures — improving tone, reducing puffiness, and leaving your face visibly lifted, sculpted, and radiant. Perfect for those looking for a full experience with maximum results.",
      },
    ],
  },
  {
    category: "Guinot Advanced Facials",
    items: [
      {
        name: "Hydradermie Lift (microcurrent) + Hollywood Massage",
        duration: "140 min",
        price: "$320",
        image: "/services/guinot-advanced-facials.jpg",
        description:
          "An exclusive patented technique that gives the face a youthful appearance and ensures the clarity of the contours of the face due to the strengthening of facial muscles. This procedure is an alternative to the methods of aesthetic medicine aimed at instantly reducing the manifestations of skin aging.",
        details: ["Anti-aging drainage", "Myostimulation", "Modeling massage"],
      },
      {
        name: "Guinot Hydradermie (microcurrent)",
        duration: "90 min",
        price: "$190",
        image: "/services/guinot-advanced-facials.jpg",
        description:
          "The Hydraderm device is an innovative intelligent device for facial skin rejuvenation. The Guinot Institute (France) has created a unique patented device using the latest smart technologies and innovations - Hydraderm Cellular Energy, whose effect is able to restore the cellular energy of young skin.",
        extra:
          "A viable alternative to cosmetic surgery, Hydradermie is a treatment that visibly rejuvenates the skin by restoring the cellular energy of more youthful skin.",
      },
    ],
  },
  {
    category: "Signature Facial",
    items: [
      {
        name: "Signature Facial Care",
        duration: "90 min",
        price: "$180",
        image: "/services/signature-facial.jpg",
        description:
          "A customized facial using premium Japanese skincare FORLLE'D, tailored to your skin’s unique needs for visible results and deep nourishment.",
        details: [
          "Double cleansing",
          "Exfoliation",
          "Ultrasound",
          "Massage",
          "Serum",
          "Mask",
        ],
        extra: "A rejuvenating treatment for a refreshed, glowing complexion.",
      },
    ],
  },
  {
    category: "DMK Enzyme Therapy",
    items: [
      {
        name: "Hollywood Glow: DMK Enzyme Therapy & Lift Massage",
        duration: "120 min",
        price: "$280",
        image: "/services/dmk-enzyme-therapy.jpg",
        description:
          "Experience the ultimate in skin rejuvenation with our Hollywood Glow treatment, which combines DMK enzyme therapy and a luxurious lifting massage.",
        details: [
          "DMK Enzyme Therapy starts with deep cleansing and a specialized enzyme mask",
          "Detoxifies, stimulates cell renewal, and enhances skin texture",
          "Hollywood Lifting Massage follows to lift, firm, and improve circulation",
          "Amplifies the benefits of the enzyme therapy",
        ],
      },
    ],
  },
  {
    category: "Microneedling",
    items: [
      {
        name: "Microneedling",
        duration: "120 min",
        price: "$250",
        image: "/services/microneedling.jpg",
        description:
          "A customized skin-rejuvenation treatment designed to improve texture, tone, and overall radiance. This procedure uses a microneedling device to create micro-channels in the skin, allowing advanced Forlle’d serums to penetrate deeply and work at the cellular level.",
        details: [
          "Deep cleansing",
          "Personalized selection of Forlle’d serums (hydrating, brightening, firming, etc.)",
          "Microneedling session tailored to your skin needs",
          "Calming mask and aftercare application",
        ],
      },
    ],
  },
  {
    category: "Bioplasia",
    items: [
      {
        name: "BIOPLASIA facial & harmony balance",
        duration: "120 min",
        price: "$280",
        image: "/services/bioplasia.jpg",
        description:
          "Bioplasia combines deep facial sculpting, bioenergetic work, and a relaxing massage to enhance both outer beauty and inner well-being.",
        extra:
          "This 120 mins session includes a complete facial treatment with masks and specialized products, while also focusing on energy balance and mental wellness. This is more than a facial, it’s a holistic journey to radiance and balance.",
      },
    ],
  },
  {
    category: "Cleansing Facial",
    items: [
      {
        name: "Cleansing Facial",
        duration: "120 min",
        price: "$160",
        image: "/services/cleansing-facial.jpg",
        description: "The action of the procedure is aimed at:",
        details: [
          "Deep cleansing",
          "Restoring the balance of the skin microbiome",
          "Removal of impurities and excess sebum",
          "Treatment of papules and pustules",
          "Smoothing acne scars",
          "Prevention of recurrence of acne symptoms",
        ],
      },
    ],
  },
  {
    category: "Dermaplaning",
    items: [
      {
        name: "Dermaplaning",
        duration: "60 min",
        price: "$140",
        image: "/services/dermaplaning.jpg",
        description:
          "A method of mechanical exfoliation that utilizes a medical-grade blade to gently “shave” the surface of the skin, removing the top layer of dead skin cells and vellus hair. It’s completely safe for even sensitive faces — and highly effective.",
        details: [
          "Can be used for acne scars",
          "Helps dull skin",
          "Helps dry skin",
          "Helps sun-damaged skin",
          "Helps fine wrinkles",
        ],
      },
    ],
  },
  {
    category: "Sugaring ( womens only )",
    items: [
      {
        name: "Lips",
        duration: "",
        price: "$20",
        description:
          "We sugar the sides, middle and corners of the mouth and lower lip.",
      },
      {
        name: "Chin",
        duration: "",
        price: "$20",
        description: "We'll sugar from lower lip to just under the jawbone.",
      },
      {
        name: "Underarms",
        duration: "",
        price: "$30",
        description: "Hair is removed from the entire armpit.",
      },
      {
        name: "Full Arms",
        duration: "",
        price: "$64",
        description:
          "Hair is removed from your fingertips to the top of your shoulders.",
      },
      {
        name: "Half Arms",
        duration: "",
        price: "$40",
        description: "We'll begin sugaring from your elbow to your fingertips.",
      },
      {
        name: "Legs Full",
        duration: "",
        price: "$98",
        description:
          "Hair is sugared from the tip of your toes to the top of your thighs.",
      },
      {
        name: "Stomach",
        duration: "",
        price: "$40",
        description:
          "Hair is sugared from your sternum to your hip bones, leaving your stomach completely hair-free.",
      },
      {
        name: "Back (Full)",
        duration: "",
        price: "$70",
        description:
          "Hair is removed from the base of the neck, across your shoulders, to the small of your back.",
      },
      {
        name: "Back (Upper)",
        duration: "",
        price: "$40",
        description: "Hair is sugared from your shoulders to mid-back.",
      },
      {
        name: "Back (Lower)",
        duration: "",
        price: "$34",
        description:
          "We will remove hair from your mid-back (latissmus dorsi muscle) downwards to just above your buttocks.",
      },
      {
        name: "Chest (Full)",
        duration: "",
        price: "$70",
        description:
          "Hair is sugared from the collarbone down to your hip bones.",
      },
      {
        name: "Chest (Strip)",
        duration: "",
        price: "$22",
        description: "Hair is removed along the sternum.",
      },
      {
        name: "Legs (Upper)",
        duration: "",
        price: "$54",
        description:
          "Hair is sugared from the hip bones to knee (below the butt in the back).",
      },
      {
        name: "Legs (Lower)",
        duration: "",
        price: "$54",
        description:
          "Hair is sugared from the top of the knee down to the tip of your toes.",
      },
      {
        name: "Nipples",
        duration: "",
        price: "$16",
        description: "We will remove hair from around your areolas.",
      },
      {
        name: "Stomach (Strip)",
        duration: "",
        price: "$20",
        description:
          "AKA Happy Trail. Hair is removed from below the belly button to pubic bone (width is 4 fingers or less).",
      },
      {
        name: "Cheeks",
        duration: "",
        price: "$15",
        description:
          "We'll sugar from below the eye socket to the corner of the mouth, down a little under the jawbone and up to the ear, including your sideburns.",
      },
      {
        name: "Eyebrow Maintenance",
        duration: "",
        price: "$20",
        description:
          "Enhance your natural brows with shaping. We'll sugar between, under, and above the brow, plus trim any long, stray hairs.",
      },
      {
        name: "Full Face",
        duration: "",
        price: "$55",
        description:
          "Hair is removed from the forehead, cheeks, sideburns, lip, chin and a little under the jawbone. Does service not include eyebrows or nose.",
      },
      {
        name: "Nose",
        duration: "",
        price: "$10",
        description:
          "We don’t sugar these area, because this hair plays an important role in keeping you healthy, but we will trim it for free.",
      },
      {
        name: "Brazilian",
        duration: "",
        price: "$75",
        description: "",
      },
      {
        name: "Bikini",
        duration: "",
        price: "$55",
        note: "Note: 1cm hair max",
        description:
          "Please make sure the hair length in the bikini area is no longer than 1 cm. Otherwise, the procedure cannot be performed properly.",
      },
    ],
  },
  {
    category: "Vajacial",
    items: [
      {
        name: "Vajacial",
        duration: "",
        price: "$60",
        description:
          "Treatment which includes a cleanse, mild enzyme exfoliant, extractions of ingrown hairs, followed by a soothing mask, completed with a skin brightening serum or spot treatment.",
      },
    ],
  },
];

function ServiceRow({ item }) {
  return (
    <article
      className={`service-row ${item.image ? "service-row-has-image" : ""}`}
    >
      {item.image && (
        <div className="service-row-image">
          <img src={item.image} alt={item.name} />
        </div>
      )}

      <div className="service-row-left">
        <h3>{item.name}</h3>

        {item.note && <p className="service-note">{item.note}</p>}

        {item.description && (
          <p className="service-description">{item.description}</p>
        )}

        {item.details && item.details.length > 0 && (
          <ul className="service-list">
            {item.details.map((detail) => (
              <li key={detail}>{detail}</li>
            ))}
          </ul>
        )}

        {item.extra && <p className="service-extra">{item.extra}</p>}
      </div>

      <div className="service-row-right">
        {item.duration && <p className="service-duration">{item.duration}</p>}
        <p className="service-price">{item.price}</p>
      </div>
    </article>
  );
}

export default function ServicesPage() {
  return (
    <section className="services-page">
      <div className="container services-container">
        <div className="services-hero center">
          <p className="services-kicker">Our Treatments</p>
          <h1>Services</h1>
          <p className="subtext services-subtext">
            Explore our facial, skincare, and specialty treatments. Book
            directly through Vagaro when you&apos;re ready.
          </p>

          <div className="top-space">
            <a
              className="btn-primary"
              href="https://www.vagaro.com/juliabeauty"
              target="_blank"
              rel="noopener noreferrer"
            >
              Book on Vagaro
            </a>
          </div>
        </div>

        <div className="packages-section">
          <img
            src="/packages.jpg"
            alt="Treatment Packages"
            className="packages-image"
          />
        </div>

        <div className="services-sections">
          {servicesData.map((section) => (
            <section className="service-category" key={section.category}>
              <h2>{section.category}</h2>

              <div className="service-rows">
                {section.items.map((item) => (
                  <ServiceRow key={item.name} item={item} />
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}
