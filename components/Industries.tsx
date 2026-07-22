import React from 'react';

const industries = [
  {
    name: 'Apartment Buildings',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&q=75',
    alt: 'Apartment building courtyard seating area',
  },
  {
    name: 'Office Spaces',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=75',
    alt: 'Modern open office with desks and chairs',
  },
  {
    name: 'Car Dealerships',
    image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=600&q=75',
    alt: 'Cars in a dealership showroom',
  },
  {
    name: 'Industrial Spaces',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=75',
    alt: 'Industrial warehouse interior',
  },
  {
    name: 'Educational Facilities',
    image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600&q=75',
    alt: 'School hallway with lockers',
  },
  {
    name: 'Healthcare Facilities',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&q=75',
    alt: 'Healthcare facility corridor',
  },
  {
    name: 'Retail Spaces',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&q=75',
    alt: 'Retail clothing store interior',
  },
  {
    name: 'Financial Institutions',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&q=75',
    alt: 'Financial institution interior',
  },
  {
    name: 'Commercial Real Estate',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=75',
    alt: 'Commercial real estate building facade',
  },
  {
    name: 'Entertainment Facilities',
    image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=600&q=75',
    alt: 'Movie theater seating',
  },
];

export const Industries: React.FC = () => {
  return (
    <section id="industries" className="py-10 sm:py-14 md:py-16 lg:py-20 bg-[var(--bg)] border-b border-[var(--border)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-6 sm:mb-10 md:mb-12">
          <h2 className="font-serif text-[1.55rem] sm:text-[2.15rem] md:text-[2.4rem] text-[var(--text)] tracking-tight leading-tight">
            Industries
          </h2>
          <p className="mt-2 sm:mt-3 text-[var(--text-muted)] text-[13px] sm:text-[15px] md:text-base max-w-xl leading-relaxed">
            Independent providers matched to the spaces you manage—across commercial property types.
          </p>
        </header>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-3 gap-y-6 sm:gap-x-5 sm:gap-y-10">
          {industries.map((item) => (
            <article key={item.name} className="group flex flex-col items-stretch">
              <div className="relative z-10 w-[90%] sm:w-[88%]">
                <div className="rounded border sm:rounded-md border-secondary/70 bg-[var(--bg)] px-1.5 sm:px-3 py-1 sm:py-2 text-left">
                  <h3 className="font-sans text-[10px] sm:text-[13px] md:text-sm font-bold text-[var(--text)] tracking-tight leading-snug">
                    {item.name}
                  </h3>
                </div>
                <span className="absolute left-2 sm:left-3 top-full h-2 sm:h-3 w-px bg-secondary/70" aria-hidden />
                <span className="absolute right-2 sm:right-3 top-full h-2 sm:h-3 w-px bg-secondary/70" aria-hidden />
              </div>

              <div className="relative w-full overflow-hidden rounded-b-lg sm:rounded-b-xl rounded-t border border-[var(--border)] bg-[var(--surface)] pt-2 sm:pt-3 shadow-[0_8px_20px_-14px_rgba(0,0,0,0.55)] transition-transform duration-500 group-hover:-translate-y-0.5">
                <div className="aspect-[5/4] sm:aspect-[4/3] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    loading="lazy"
                  />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
