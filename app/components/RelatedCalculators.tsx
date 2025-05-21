import Link from 'next/link';

type RelatedCalculatorsProps = {
  title?: string;
  links: { href: string; label: string }[];
};

export default function RelatedCalculators({
  title = 'Related Calculators',
  links,
}: RelatedCalculatorsProps) {
  return (
    <div className="related-calculators">
      <div className="related-calculators-container">
        <h3>{title}</h3>
        {links.map((link, index) => (
          <Link key={index} href={link.href} className="related-calculators-item">
            <p>{link.label}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
