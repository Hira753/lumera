import { Product, ProductCategory } from '../types';

export const PRODUCTS: Product[] = [
  {
    id: 'glow-revival-serum',
    name: 'Glow Revival Serum',
    category: 'Serums',
    price: 39,
    rating: 4.9,
    reviewCount: 142,
    shortDescription: 'Multi-molecular hyaluronic acid combined with niacinamide and adaptogenic peony extract.',
    fullDescription: 'Our signature Glow Revival Serum instantly infuses skin with moisture while fortifying the barrier against daily urban stressors. Formulated with five molecular weights of hyaluronic acid and bio-fermented Japanese peony, it plumps fine lines and imparts an unmistakable dewy luminescence.',
    image: '/src/assets/images/product_glow_serum_1790447908069.jpg',
    secondaryImage: '/src/assets/images/skincare_texture_glow_1790447867992.jpg',
    badge: 'Award Winner',
    volume: '30 ml / 1.0 fl. oz.',
    isBestSeller: true,
    texture: 'Lightweight, silky fluid with zero stickiness',
    skinType: 'All skin types, especially dehydrated and dull',
    benefits: [
      'Delivers 72-hour deep multi-layer hydration',
      'Refines pores and evens out irregular skin tone',
      'Strengthens the lipid barrier against environmental aggressors',
      'Leaves a breathable, candle-lit radiance under makeup'
    ],
    ingredients: [
      'Multi-Molecular Hyaluronic Acid Complex (2%)',
      'Bio-Active Niacinamide (5%)',
      'Fermented White Peony Extract',
      'Snow Mushroom Polysaccharides',
      'Vegetable Squalane from Sugarcane',
      'Centella Asiatica (Cica) Leaf Water'
    ],
    howToUse: 'Dispense 3–4 drops onto freshly cleansed, slightly damp face, neck, and décolletage. Gently press into skin with warm palms morning and evening before creams.',
    reviews: [
      {
        id: 'rev-1',
        author: 'Evelyn Vance',
        rating: 5,
        date: 'September 18, 2026',
        title: 'The glass-skin holy grail',
        comment: 'I have tested countless serums, but LUMÉRA is unmatched. It absorbs seamlessly without tackiness and gives that luminous, lit-from-within glow even on 4 hours of sleep.',
        verified: true
      },
      {
        id: 'rev-2',
        author: 'Camille Laurent',
        rating: 5,
        date: 'September 12, 2026',
        title: 'Gentle on sensitive skin',
        comment: 'So many serums make my skin turn red. This soothes instantly and my texture has smoothed out in just two weeks of daily morning use.',
        verified: true
      },
      {
        id: 'rev-3',
        author: 'Sophia Sterling',
        rating: 5,
        date: 'August 30, 2026',
        title: 'Luxurious ritual everyday',
        comment: 'The packaging, the dropper weight, the texture—everything about it feels like a $150 luxury spa bottle. Deserves every star.',
        verified: true
      }
    ]
  },
  {
    id: 'hydra-luxe-cream',
    name: 'Hydra Luxe Cream',
    category: 'Moisturizers',
    price: 32,
    rating: 4.8,
    reviewCount: 98,
    shortDescription: 'Rich whipped ceramide cream infused with cold-pressed marula oil and oat beta-glucan.',
    fullDescription: 'Hydra Luxe Cream wraps skin in a velvety cocoon of sustained nourishment. Engineered with a biomimetic ceramide complex, plant lipids, and soothing oat beta-glucan, it restores elasticity and locks in vital moisture without feeling heavy or greasy.',
    image: '/src/assets/images/product_hydra_cream_1790447921145.jpg',
    secondaryImage: '/src/assets/images/skincare_texture_glow_1790447867992.jpg',
    badge: 'Customer Favorite',
    volume: '50 ml / 1.7 oz.',
    isBestSeller: true,
    texture: 'Air-whipped cushion cream that melts instantly',
    skinType: 'Normal to dry, sensitive, or barrier-compromised skin',
    benefits: [
      'Replenishes essential ceramides to repair micro-tears in skin barrier',
      'Provides rich, continuous 24-hour hydration',
      'Calms redness and flaking caused by harsh weather or active acids',
      'Softens skin texture for a velvety, supple finish'
    ],
    ingredients: [
      'Biomimetic Ceramide Complex (NP, AP, EOP)',
      'Cold-Pressed Virgin Marula Oil',
      'Colloidal Oat Beta-Glucan',
      'Organic Shea Butter Extract',
      'Rice Bran Phytosterols',
      'Glycerin & Sodium PCA'
    ],
    howToUse: 'Warm a pea-sized amount between clean fingertips and press gently into face and neck as the final sealing step of your morning and evening rituals.',
    reviews: [
      {
        id: 'rev-4',
        author: 'Julianna Croft',
        rating: 5,
        date: 'September 22, 2026',
        title: 'Saved my peeling winter skin',
        comment: 'A true cushion of comfort. It melts in like butter and doesn’t clog my pores. I wake up with the plumpest, softest cheeks.',
        verified: true
      },
      {
        id: 'rev-5',
        author: 'Elena Rostova',
        rating: 4,
        date: 'September 08, 2026',
        title: 'Deeply moisturizing',
        comment: 'Rich without feeling greasy. Sits beautifully under sunscreen and makeup during long workdays.',
        verified: true
      }
    ]
  },
  {
    id: 'vitamin-c-radiance-serum',
    name: 'Vitamin C Radiance Serum',
    category: 'Serums',
    price: 45,
    rating: 5.0,
    reviewCount: 116,
    shortDescription: '15% stabilized THD ascorbate, ferulic acid, and golden Kakadu plum for luminous clarity.',
    fullDescription: 'A cutting-edge lipid-soluble Vitamin C elixir that penetrates deeper with zero stinging. Blended with ferulic acid, pure Vitamin E, and wild-harvested Australian Kakadu plum, it visibly fades dark spots, promotes collagen synthesis, and protects against photo-aging.',
    image: '/src/assets/images/hero_skincare_luxury_1790447841859.jpg',
    secondaryImage: '/src/assets/images/product_glow_serum_1790447908069.jpg',
    badge: 'Bestseller',
    volume: '30 ml / 1.0 fl. oz.',
    isBestSeller: true,
    texture: 'Translucent, golden silky nectar',
    skinType: 'All skin types targeting hyperpigmentation, sun damage, and dullness',
    benefits: [
      'Visibly fades stubborn sun spots and post-blemish discoloration',
      'Boosts cellular radiance and brightens complexions in 14 days',
      'Provides potent 8x antioxidant defense against UV and blue light',
      'Stabilized formula won’t oxidize or turn orange'
    ],
    ingredients: [
      'Tetrahexyldecyl Ascorbate (15% THD Vitamin C)',
      'Natural Ferulic Acid (0.5%)',
      'Kakadu Plum Fruit Extract (Highest natural C source)',
      'd-Alpha Tocopherol (Pure Vitamin E)',
      'Licorice Root Glabridin',
      'Jojoba Seed Esters'
    ],
    howToUse: 'Smooth 4 drops over clean dry skin each morning. Follow with your favorite LUMÉRA moisturizer and broad-spectrum SPF.',
    reviews: [
      {
        id: 'rev-6',
        author: 'Margot Davies',
        rating: 5,
        date: 'September 15, 2026',
        title: 'Noticeable brightening in 10 days',
        comment: 'My hyperpigmentation from past summer acne has faded by half. It doesn’t smell like hot dog water like other C serums. Absolute perfection.',
        verified: true
      },
      {
        id: 'rev-7',
        author: 'Claire B.',
        rating: 5,
        date: 'August 24, 2026',
        title: 'Gentle, potent, elegant',
        comment: 'Zero tingling or irritation. My dermatologist actually complimented the glow on my skin last week!',
        verified: true
      }
    ]
  },
  {
    id: 'gentle-cloud-cleanser',
    name: 'Gentle Cloud Cleanser',
    category: 'Cleansers',
    price: 28,
    rating: 4.8,
    reviewCount: 84,
    shortDescription: 'pH-balanced amino acid cleansing gel that dissolves impurities while protecting skin lipids.',
    fullDescription: 'Cleanse without stripping. The Gentle Cloud Cleanser transforms from a plush silk gel into a delicate micro-bubble cushion that sweeps away sunscreen, makeup, and pollution while maintaining your skin’s optimal 5.5 pH acid mantle.',
    image: '/src/assets/images/product_cloud_cleanser_1790447933144.jpg',
    secondaryImage: '/src/assets/images/hero_skincare_luxury_1790447841859.jpg',
    badge: 'Gentle Formula',
    volume: '150 ml / 5.1 fl. oz.',
    isBestSeller: true,
    texture: 'Pillowy foaming micro-gel',
    skinType: 'Sensitive, balanced, dry, or reactive skin',
    benefits: [
      'Removes waterproof makeup and SPF in a single wash',
      'Zero tightness, squeakiness, or post-wash irritation',
      'Preserves the delicate microbiome and moisture barrier',
      'Infused with calming Roman chamomile and green tea hydrosol'
    ],
    ingredients: [
      'Apple Amino Acid Surfactants',
      'Organic Roman Chamomile Flower Water',
      'Green Tea Leaf Hydrosol',
      'Pro-Vitamin B5 (Panthenol 2%)',
      'Plant-Derived Betaine',
      'Allantoin'
    ],
    howToUse: 'Pump 1–2 doses into wet hands, work into a rich micro-lather, massage gently over face in circular motions for 60 seconds, and rinse with lukewarm water.',
    reviews: [
      {
        id: 'rev-8',
        author: 'Hannah M.',
        rating: 5,
        date: 'September 19, 2026',
        title: 'No tight feeling ever',
        comment: 'Every foaming wash usually makes my skin feel like cardboard. Not this one. It feels like a cloud and leaves my skin supple and pristine.',
        verified: true
      }
    ]
  },
  {
    id: 'luminous-botanical-body-elixir',
    name: 'Luminous Botanical Body Elixir',
    category: 'Body Care',
    price: 48,
    rating: 4.9,
    reviewCount: 62,
    shortDescription: 'Dry-touch botanical body oil with shimmering golden mica, jasmine sambac, and baobab.',
    fullDescription: 'Indulge in head-to-toe golden radiance. This fast-absorbing dry body oil blends organic cold-pressed African baobab, jojoba, and Moroccan argan oil with delicate jasmine sambac and subtle mineral pigments for an alluring, sun-kissed sheen.',
    image: '/src/assets/images/product_body_oil_1790447946910.jpg',
    secondaryImage: '/src/assets/images/promo_lifestyle_skincare_1790447855919.jpg',
    badge: 'New Arrival',
    volume: '100 ml / 3.4 fl. oz.',
    texture: 'Ultra-fine satin dry oil with radiant mineral shimmer',
    skinType: 'All skin types seeking silky texture and full-body glow',
    benefits: [
      'Instant satin finish that will not transfer onto clothing',
      'Restores suppleness and elasticity to dry elbows, knees, and legs',
      'Envelopes the senses in a bespoke French jasmine and warm amber bouquet',
      'Rich in omega-6 and omega-9 essential fatty acids'
    ],
    ingredients: [
      'Organic Cold-Pressed Baobab Seed Oil',
      'Virgin Moroccan Argan Oil',
      'Golden Jojoba Seed Oil',
      'Jasmine Sambac Absolute',
      'Sustainably Sourced Golden Mineral Mica',
      'Tocopherol (Vitamin E)'
    ],
    howToUse: 'Shake gently before use. Massage generously over arms, collarbones, and legs onto damp skin right after bathing for maximum absorption.',
    reviews: [
      {
        id: 'rev-9',
        author: 'Vivienne St. Claire',
        rating: 5,
        date: 'September 21, 2026',
        title: 'Smells like a luxury hotel in Saint-Tropez',
        comment: 'The scent is mesmerizing and the sheen on the collarbones and shoulders is stunning. My skin feels like silk for 24 hours.',
        verified: true
      }
    ]
  },
  {
    id: 'velvet-barrier-repair-balm',
    name: 'Velvet Barrier Repair Balm',
    category: 'Moisturizers',
    price: 36,
    rating: 4.7,
    reviewCount: 51,
    shortDescription: 'Concentrated restoring balm with centella asiatica, madecassoside, and colloidal oat.',
    fullDescription: 'A restorative rescue treatment specifically formulated for sensitized, compromised, or post-treatment skin. Melts on contact into a protective shield that accelerates skin recovery and soothes dry patches overnight.',
    image: '/src/assets/images/skincare_texture_glow_1790447867992.jpg',
    secondaryImage: '/src/assets/images/product_hydra_cream_1790447921145.jpg',
    badge: 'SOS Rescue',
    volume: '45 ml / 1.5 oz.',
    texture: 'Silky solid-to-balm ointment',
    skinType: 'Extremely dry, sensitive, irritated, or retinol-flaking skin',
    benefits: [
      'Accelerates epidermal repair within 48 hours',
      'Relieves itching, tightness, and windburn',
      'Forms a breathable shield that locks in active treatments',
      'Hypoallergenic and fragrance-free'
    ],
    ingredients: [
      'Pure Madecassoside & Asiaticoside',
      'Colloidal Oatmeal (1.5%)',
      'Plant Squalane',
      'Ceramide EOP & NP',
      'Sunflower Seed Unsaponifiables',
      'Zinc PCA'
    ],
    howToUse: 'Warm a pea-sized amount between fingers and press onto compromised areas as the final step of nighttime skincare, or use as a targeted spot balm.',
    reviews: [
      {
        id: 'rev-10',
        author: 'Chloe Dupont',
        rating: 5,
        date: 'August 18, 2026',
        title: 'Cured my retinol burn overnight',
        comment: 'I overdid my retinoid and woke up with stinging red patches. This balm healed everything in less than two nights. Truly indispensable.',
        verified: true
      }
    ]
  },
  {
    id: 'rose-peptide-overnight-nectar',
    name: 'Rose & Peptide Overnight Nectar',
    category: 'Serums',
    price: 52,
    rating: 4.9,
    reviewCount: 78,
    shortDescription: 'Nighttime youth-activating serum with copper tripeptide, Damask rose, and bakuchiol.',
    fullDescription: 'Awaken to revitalized, supple skin. This nighttime elixir pairs copper peptides with gentle botanical bakuchiol and steam-distilled Bulgarian Damask rose water to stimulate natural collagen, refine texture, and enhance skin bounce.',
    image: '/src/assets/images/about_botanical_craft_1790447881053.jpg',
    secondaryImage: '/src/assets/images/product_glow_serum_1790447908069.jpg',
    badge: 'Youth Elixir',
    volume: '30 ml / 1.0 fl. oz.',
    texture: 'Dewy, rose-hued serum nectar',
    skinType: 'Mature, fatigued, or dull skin seeking firming and renewal',
    benefits: [
      'Improves dermal firmness and skin resilience in 21 days',
      'Smooths micro-creases around smile lines and forehead',
      'Bakuchiol provides retinol-like renewal without irritation or UV sensitivity',
      'Aromatherapeutic rose essence promotes tranquil sleep'
    ],
    ingredients: [
      'Copper Tripeptide-1 (GHK-Cu)',
      'Steam-Distilled Bulgarian Damask Rose Hydrosol',
      'Natural Bakuchiol (1%)',
      'Palmitoyl Tetrapeptide-7',
      'Tremella Fuciformis Mushroom',
      'Centella Asiatica Leaf Extract'
    ],
    howToUse: 'Smooth 3–5 drops over cleansed face and neck every evening before moisturizing. Inhale deeply to enjoy the soothing rose notes.',
    reviews: [
      {
        id: 'rev-11',
        author: 'Isabelle Moreau',
        rating: 5,
        date: 'September 10, 2026',
        title: 'Visible firmness',
        comment: 'I am 46 and notice real bounce back in my skin. The scent is calming and luxurious—never artificial. A true masterpiece.',
        verified: true
      }
    ]
  },
  {
    id: 'golden-camellia-face-oil',
    name: 'Golden Camellia Face Oil',
    category: 'Moisturizers',
    price: 42,
    rating: 4.9,
    reviewCount: 89,
    shortDescription: 'Single-estate Japanese camellia japonica seed oil with evening primrose and rosehip.',
    fullDescription: 'Treasured by Geishas for centuries, pure Tsubaki (Camellia Japonica) oil is rich in oleic acid and antioxidants. Cold-pressed from volcanic Goto Island seeds, it absorbs effortlessly to restore dewy plumpness and seal in hydration.',
    image: '/src/assets/images/promo_lifestyle_skincare_1790447855919.jpg',
    secondaryImage: '/src/assets/images/product_hydra_cream_1790447921145.jpg',
    badge: 'Artisanal Batch',
    volume: '30 ml / 1.0 fl. oz.',
    texture: 'Ultra-lightweight cushion oil with rapid absorption',
    skinType: 'Dry, normal, combination, and sensitive',
    benefits: [
      'Locks in moisture for a luminous, non-greasy finish',
      'Fights free radical oxidation with natural vitamin E and polyphenols',
      'Can be mixed with foundation for an ethereal red-carpet glow',
      'Nourishes lashes, cuticles, and split ends as a multi-use elixir'
    ],
    ingredients: [
      'Cold-Pressed Camellia Japonica Seed Oil (Goto Island)',
      'Organic Virgin Rosehip Fruit Oil',
      'Evening Primrose Seed Extract',
      'Golden Sea Kelp Bio-Lipids',
      'Meadowfoam Seed Oil',
      'Natural Vitamin E'
    ],
    howToUse: 'Warm 2–3 drops between palms and gently press onto high points of the face as the crowning step of your skincare ritual, day or night.',
    reviews: [
      {
        id: 'rev-12',
        author: 'Grace H.',
        rating: 5,
        date: 'September 04, 2026',
        title: 'The ultimate glow secret',
        comment: 'I mix one drop with my liquid foundation and it gives that expensive, model-off-duty glow that lasts 12 hours. Will repurchase forever.',
        verified: true
      }
    ]
  }
];

export const CATEGORIES: { id: ProductCategory; name: string; description: string; image: string }[] = [
  {
    id: 'All',
    name: 'Full Collection',
    description: 'Every intentional formula for your daily skincare ritual.',
    image: '/src/assets/images/hero_skincare_luxury_1790447841859.jpg'
  },
  {
    id: 'Serums',
    name: 'Serums',
    description: 'Targeted high-potency elixirs designed to penetrate deep and transform skin tone.',
    image: '/src/assets/images/product_glow_serum_1790447908069.jpg'
  },
  {
    id: 'Moisturizers',
    name: 'Moisturizers',
    description: 'Cushioning creams and botanical oils to lock in hydration and repair the lipid barrier.',
    image: '/src/assets/images/product_hydra_cream_1790447921145.jpg'
  },
  {
    id: 'Cleansers',
    name: 'Cleansers',
    description: 'pH-balanced purifying formulas that wash away the day without stripping moisture.',
    image: '/src/assets/images/product_cloud_cleanser_1790447933144.jpg'
  },
  {
    id: 'Body Care',
    name: 'Body Care',
    description: 'Silken body elixirs and nurturing oils for an all-over luminous ritual.',
    image: '/src/assets/images/product_body_oil_1790447946910.jpg'
  }
];
