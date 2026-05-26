export default function App() {
  const products = [
    {
      title: 'Lip Gloss',
      category: 'LIP COLLECTION',
      image:
        'https://images.unsplash.com/photo-1586495777744-4413f21062fa?q=80&w=1200&auto=format&fit=crop',
      desc: 'High-shine glossy lip formula designed for trendy beauty brands.',
    },
    {
      title: 'Velvet Lipstick',
      category: 'LIP COLLECTION',
      image:
        'https://images.unsplash.com/photo-1631214540553-ff044a3ff1d4?q=80&w=1200&auto=format&fit=crop',
      desc: 'Creamy matte lipstick with rich pigmentation and luxury finish.',
    },
    {
      title: 'Plumping Lip Oil',
      category: 'LIP CARE',
      image:
        'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1200&auto=format&fit=crop',
      desc: 'Hydrating lip oil with glossy shine and plumping effect.',
    },
    {
      title: 'Cream Blush',
      category: 'FACE COLLECTION',
      image:
        'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=1200&auto=format&fit=crop',
      desc: 'Soft cream blush with natural skin-like glow.',
    },
    {
      title: 'Glow Foundation',
      category: 'BASE MAKEUP',
      image:
        'https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=1200&auto=format&fit=crop',
      desc: 'Lightweight glow foundation with buildable coverage.',
    },
    {
      title: 'Concealer',
      category: 'BASE MAKEUP',
      image:
        'https://images.unsplash.com/photo-1625093742435-6fa192b6fb10?q=80&w=1200&auto=format&fit=crop',
      desc: 'Full-coverage concealer for flawless complexion.',
    },
    {
      title: 'Mascara',
      category: 'EYE COLLECTION',
      image:
        'https://images.unsplash.com/photo-1631730486572-2264f9c6b6f5?q=80&w=1200&auto=format&fit=crop',
      desc: 'Volume mascara with long-lasting curl effect.',
    },
    {
      title: 'Eyeliner',
      category: 'EYE COLLECTION',
      image:
        'https://images.unsplash.com/photo-1526045478516-99145907023c?q=80&w=1200&auto=format&fit=crop',
      desc: 'Precision eyeliner with waterproof performance.',
    },
    {
      title: 'Lip Liner',
      category: 'LIP COLLECTION',
      image:
        'https://images.unsplash.com/photo-1629198688000-71f23e745b6e?q=80&w=1200&auto=format&fit=crop',
      desc: 'Smooth lip liner pencil for defined lip looks.',
    },
    {
      title: 'Brow Pencil',
      category: 'BROW COLLECTION',
      image:
        'https://images.unsplash.com/photo-1583241800698-e8ab01830a3d?q=80&w=1200&auto=format&fit=crop',
      desc: 'Slim eyebrow pencil for natural brow shaping.',
    },
    {
      title: 'Tinted Brow Gel',
      category: 'BROW COLLECTION',
      image:
        'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?q=80&w=1200&auto=format&fit=crop',
      desc: 'Tinted brow gel with flexible hold and natural texture.',
    },
    {
      title: 'Brow Wax',
      category: 'BROW COLLECTION',
      image:
        'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1200&auto=format&fit=crop',
      desc: 'Strong-hold brow wax for laminated fluffy brows.',
    },
  ]

  const features = [
    'Low MOQ',
    'Cruelty Free',
    'Fast Sampling',
    'OEM & ODM',
    'Global Export',
    'Custom Packaging',
  ]

  const packaging = [
    {
      title: 'Luxury Packaging',
      image:
        'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&w=1200&auto=format&fit=crop',
    },
    {
      title: 'Minimal Packaging',
      image:
        'https://images.unsplash.com/photo-1526047932273-341f2a7631f9?q=80&w=1200&auto=format&fit=crop',
    },
    {
      title: 'Eco Packaging',
      image:
        'https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=1200&auto=format&fit=crop',
    },
  ]

  const process = [
    'Idea',
    'Formula',
    'Packaging',
    'Sampling',
    'Production',
    'Shipping',
  ]

  return (
    <div
      style={{
        fontFamily: 'Arial, sans-serif',
        background: '#f6f3ef',
        color: '#111',
        scrollBehavior: 'smooth',
      }}
    >
      {/* NAVBAR */}
      <header
        style={{
          position: 'fixed',
          top: 0,
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '24px 60px',
          background: 'rgba(255,255,255,0.85)',
          backdropFilter: 'blur(12px)',
          zIndex: 999,
          boxSizing: 'border-box',
          borderBottom: '1px solid rgba(0,0,0,0.05)',
        }}
      >
        <h2
          style={{
            letterSpacing: '4px',
            fontWeight: '400',
          }}
        >
          BEAUTY OEM
        </h2>

        <nav
          style={{
            display: 'flex',
            gap: '28px',
            fontSize: '14px',
          }}
        >
          <a
            href='#'
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: 'smooth',
              })
            }
            style={{ textDecoration: 'none', color: '#111' }}
          >
            Home
          </a>

          <a
            href='#products'
            onClick={() =>
              document
                .getElementById('products')
                .scrollIntoView({ behavior: 'smooth' })
            }
            style={{ textDecoration: 'none', color: '#111' }}
          >
            Products
          </a>

          <a
            href='#packaging'
            onClick={() =>
              document
                .getElementById('packaging')
                .scrollIntoView({ behavior: 'smooth' })
            }
            style={{ textDecoration: 'none', color: '#111' }}
          >
            Packaging
          </a>

          <a
            href='#oem'
            onClick={() =>
              document
                .getElementById('oem')
                .scrollIntoView({ behavior: 'smooth' })
            }
            style={{ textDecoration: 'none', color: '#111' }}
          >
            OEM
          </a>

          <a
            href='#contact'
            onClick={() =>
              document
                .getElementById('contact')
                .scrollIntoView({ behavior: 'smooth' })
            }
            style={{ textDecoration: 'none', color: '#111' }}
          >
            Contact
          </a>
        </nav>
      </header>

      {/* HERO */}
      <section
        style={{
          minHeight: '100vh',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          alignItems: 'center',
          gap: '80px',
          padding: '120px 60px 60px',
        }}
      >
        <div>
          <p
            style={{
              letterSpacing: '4px',
              color: '#777',
              marginBottom: '20px',
            }}
          >
            PREMIUM COSMETIC MANUFACTURER
          </p>

          <h1
            style={{
              fontSize: '88px',
              lineHeight: '1.05',
              fontWeight: '300',
              marginBottom: '30px',
            }}
          >
            Premium Makeup
            <br />
            Manufacturing
          </h1>

          <p
            style={{
              color: '#666',
              lineHeight: '1.9',
              fontSize: '18px',
              maxWidth: '620px',
              marginBottom: '40px',
            }}
          >
            OEM & ODM cosmetic manufacturing solutions for global beauty
            brands, retailers, and private label startups.
          </p>

          <div
            style={{
              display: 'flex',
              gap: '20px',
            }}
          >
            <button
              onClick={() =>
                document
                  .getElementById('contact')
                  .scrollIntoView({ behavior: 'smooth' })
              }
              style={{
                background: '#111',
                color: 'white',
                border: 'none',
                padding: '18px 40px',
                borderRadius: '999px',
                cursor: 'pointer',
              }}
            >
              Get A Quote
            </button>

            <button
              onClick={() =>
                document
                  .getElementById('products')
                  .scrollIntoView({ behavior: 'smooth' })
              }
              style={{
                background: 'transparent',
                border: '1px solid #111',
                padding: '18px 40px',
                borderRadius: '999px',
                cursor: 'pointer',
              }}
            >
              Explore Products
            </button>
          </div>
        </div>

        <img
          src='https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=1200&auto=format&fit=crop'
          alt='beauty'
          style={{
            width: '100%',
            height: '860px',
            objectFit: 'cover',
            borderRadius: '40px',
          }}
        />
      </section>

      {/* FEATURES */}
      <section
        style={{
          padding: '100px 60px',
          background: 'white',
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '30px',
          }}
        >
          {features.map((item, index) => (
            <div
              key={index}
              style={{
                background: '#f7f4ef',
                padding: '50px 30px',
                borderRadius: '30px',
                textAlign: 'center',
              }}
            >
              <h3
                style={{
                  fontWeight: '300',
                  fontSize: '28px',
                }}
              >
                {item}
              </h3>
            </div>
          ))}
        </div>
      </section>

      {/* PRODUCTS */}
      <section
        id='products'
        style={{
          padding: '120px 60px',
        }}
      >
        <div
          style={{
            textAlign: 'center',
            marginBottom: '80px',
          }}
        >
          <p
            style={{
              letterSpacing: '4px',
              color: '#777',
              marginBottom: '20px',
            }}
          >
            PRODUCT COLLECTION
          </p>

          <h2
            style={{
              fontSize: '68px',
              fontWeight: '300',
            }}
          >
            Modern Cosmetic Categories
          </h2>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '40px',
          }}
        >
          {products.map((product, index) => (
            <div
              key={index}
              style={{
                background: 'white',
                borderRadius: '30px',
                overflow: 'hidden',
                transition: '0.3s',
                cursor: 'pointer',
              }}
            >
              <img
                src={product.image}
                alt={product.title}
                style={{
                  width: '100%',
                  height: '420px',
                  objectFit: 'cover',
                }}
              />

              <div style={{ padding: '30px' }}>
                <p
                  style={{
                    letterSpacing: '3px',
                    color: '#888',
                    fontSize: '12px',
                    marginBottom: '12px',
                  }}
                >
                  {product.category}
                </p>

                <h3
                  style={{
                    fontSize: '34px',
                    fontWeight: '300',
                    marginBottom: '18px',
                  }}
                >
                  {product.title}
                </h3>

                <p
                  style={{
                    color: '#666',
                    lineHeight: '1.9',
                    marginBottom: '24px',
                  }}
                >
                  {product.desc}
                </p>

                <div
                  style={{
                    display: 'flex',
                    gap: '12px',
                    flexWrap: 'wrap',
                  }}
                >
                  <button
                    onClick={() =>
                      document
                        .getElementById('contact')
                        .scrollIntoView({ behavior: 'smooth' })
                    }
                    style={{
                      background: '#111',
                      color: 'white',
                      border: 'none',
                      padding: '12px 20px',
                      borderRadius: '999px',
                      cursor: 'pointer',
                    }}
                  >
                    Request Samples
                  </button>

                  <button
                    onClick={() =>
                      document
                        .getElementById('oem')
                        .scrollIntoView({ behavior: 'smooth' })
                    }
                    style={{
                      background: 'transparent',
                      border: '1px solid #111',
                      padding: '12px 20px',
                      borderRadius: '999px',
                      cursor: 'pointer',
                    }}
                  >
                    OEM Details
                  </button>
                </div>

                <div
                  style={{
                    marginTop: '20px',
                    display: 'grid',
                    gap: '8px',
                    color: '#777',
                    fontSize: '14px',
                  }}
                >
                  <span>• Flexible MOQ</span>
                  <span>• Custom Formula Support</span>
                  <span>• Packaging Customization</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PACKAGING */}
      <section
        id='packaging'
        style={{
          background: 'white',
          padding: '120px 60px',
        }}
      >
        <div
          style={{
            textAlign: 'center',
            marginBottom: '80px',
          }}
        >
          <p
            style={{
              letterSpacing: '4px',
              color: '#777',
              marginBottom: '20px',
            }}
          >
            PACKAGING SOLUTIONS
          </p>

          <h2
            style={{
              fontSize: '68px',
              fontWeight: '300',
            }}
          >
            Premium Packaging Design
          </h2>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '40px',
          }}
        >
          {packaging.map((item, index) => (
            <div
              key={index}
              style={{
                borderRadius: '30px',
                overflow: 'hidden',
                background: '#f7f4ef',
              }}
            >
              <img
                src={item.image}
                alt={item.title}
                style={{
                  width: '100%',
                  height: '420px',
                  objectFit: 'cover',
                }}
              />

              <div style={{ padding: '30px' }}>
                <h3
                  style={{
                    fontSize: '34px',
                    fontWeight: '300',
                  }}
                >
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* OEM */}
      <section
        id='oem'
        style={{
          padding: '120px 60px',
        }}
      >
        <div
          style={{
            textAlign: 'center',
            marginBottom: '80px',
          }}
        >
          <p
            style={{
              letterSpacing: '4px',
              color: '#777',
              marginBottom: '20px',
            }}
          >
            OEM & ODM PROCESS
          </p>

          <h2
            style={{
              fontSize: '68px',
              fontWeight: '300',
            }}
          >
            From Idea To Launch
          </h2>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '30px',
          }}
        >
          {process.map((item, index) => (
            <div
              key={index}
              style={{
                background: 'white',
                borderRadius: '30px',
                padding: '50px 30px',
                textAlign: 'center',
              }}
            >
              <p
                style={{
                  color: '#888',
                  marginBottom: '14px',
                }}
              >
                STEP {index + 1}
              </p>

              <h3
                style={{
                  fontSize: '32px',
                  fontWeight: '300',
                }}
              >
                {item}
              </h3>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section
        style={{
          background: 'white',
          padding: '120px 60px',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '60px',
          alignItems: 'center',
        }}
      >
        <img
          src='https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1200&auto=format&fit=crop'
          alt='about'
          style={{
            width: '100%',
            height: '760px',
            objectFit: 'cover',
            borderRadius: '40px',
          }}
        />

        <div>
          <p
            style={{
              letterSpacing: '4px',
              color: '#777',
              marginBottom: '20px',
            }}
          >
            ABOUT US
          </p>

          <h2
            style={{
              fontSize: '68px',
              lineHeight: '1.1',
              fontWeight: '300',
              marginBottom: '30px',
            }}
          >
            Beauty Manufacturing
            <br />
            With Global Vision
          </h2>

          <p
            style={{
              color: '#666',
              lineHeight: '2',
              fontSize: '18px',
              marginBottom: '40px',
            }}
          >
            We provide OEM & ODM cosmetic manufacturing services for modern
            beauty brands worldwide with trend-driven formulas and premium
            packaging solutions.
          </p>

          <div
            style={{
              display: 'grid',
              gap: '16px',
            }}
          >
            <div
              style={{
                background: '#f7f4ef',
                padding: '24px',
                borderRadius: '20px',
              }}
            >
              GMPC & ISO Certified
            </div>

            <div
              style={{
                background: '#f7f4ef',
                padding: '24px',
                borderRadius: '20px',
              }}
            >
              Cruelty-Free Formulas
            </div>

            <div
              style={{
                background: '#f7f4ef',
                padding: '24px',
                borderRadius: '20px',
              }}
            >
              Global Export Experience
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id='contact'
        style={{
          padding: '120px 20px',
          background: '#f6f3ef',
          textAlign: 'center',
        }}
      >
        <p
          style={{
            letterSpacing: '4px',
            color: '#777',
            marginBottom: '20px',
          }}
        >
          CONTACT US
        </p>

        <h2
          style={{
            fontSize: '72px',
            fontWeight: '300',
            lineHeight: '1.1',
            marginBottom: '30px',
          }}
        >
          Ready To Build
          <br />
          Your Beauty Brand?
        </h2>

        <p
          style={{
            color: '#666',
            fontSize: '18px',
            lineHeight: '1.9',
            maxWidth: '700px',
            margin: '0 auto 50px',
          }}
        >
          Contact us for OEM manufacturing, private label cosmetics, and custom
          packaging solutions.
        </p>

        <form
          action='https://formsubmit.co/your@email.com'
          method='POST'
          style={{
            maxWidth: '700px',
            margin: '0 auto',
            display: 'grid',
            gap: '20px',
          }}
        >
          <input
            type='text'
            placeholder='Your Name'
            required
            style={{
              padding: '18px 24px',
              borderRadius: '18px',
              border: '1px solid #ddd',
              fontSize: '16px',
            }}
          />

          <input
            type='email'
            placeholder='Company Email'
            required
            style={{
              padding: '18px 24px',
              borderRadius: '18px',
              border: '1px solid #ddd',
              fontSize: '16px',
            }}
          />

          <textarea
            placeholder='Tell us about your project'
            required
            style={{
              minHeight: '180px',
              padding: '24px',
              borderRadius: '18px',
              border: '1px solid #ddd',
              fontSize: '16px',
            }}
          />

          <button
            type='submit'
            style={{
              background: '#111',
              color: 'white',
              border: 'none',
              padding: '20px',
              borderRadius: '999px',
              cursor: 'pointer',
              fontSize: '15px',
            }}
          >
            Submit Inquiry
          </button>
        </form>
      </section>

      {/* FOOTER */}
      <footer
        style={{
          background: '#111',
          color: 'white',
          padding: '60px',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '40px',
          }}
        >
          <div>
            <h3
              style={{
                letterSpacing: '4px',
                fontWeight: '400',
                marginBottom: '20px',
              }}
            >
              BEAUTY OEM
            </h3>

            <p
              style={{
                color: '#aaa',
                lineHeight: '1.9',
              }}
            >
              Premium cosmetic manufacturing for global beauty brands.
            </p>
          </div>

          <div>
            <h4 style={{ marginBottom: '20px' }}>Contact</h4>

            <p style={{ color: '#aaa' }}>hello@beautyoem.com</p>

            <p style={{ color: '#aaa' }}>
              WhatsApp: +86 123456789
            </p>
          </div>
        </div>
      </footer>

      {/* WHATSAPP */}
      <a
        href='https://wa.me/86123456789'
        target='_blank'
        rel='noreferrer'
        style={{
          position: 'fixed',
          right: '30px',
          bottom: '30px',
          width: '64px',
          height: '64px',
          borderRadius: '50%',
          background: '#25D366',
          color: 'white',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textDecoration: 'none',
          fontSize: '30px',
          boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
          zIndex: 999,
        }}
      >
        W
      </a>
    </div>
  )
}