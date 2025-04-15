'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import BinaryDropdown from './BinaryDropdown';

const bases = ['ascii', 'binary', 'decimal', 'hex', 'octal'];
type BaseType = (typeof bases)[number];

const validRoutes = new Set(
  bases.flatMap(from =>
    bases
      .filter(to => to !== from)
      .map(to => `/conversion/${from}-to-${to}`)
  )
);

const BaseConverterNavigator = () => {
  const router = useRouter();
  const pathname = usePathname();

  const [from, setFrom] = useState<BaseType | null>(null);
  const [to, setTo] = useState<BaseType | null>(null);

  useEffect(() => {
    const match = pathname.match(/\/conversion\/([a-z]+)-to-([a-z]+)/);
    if (match) {
      const [_, rawFrom, rawTo] = match;
      if (
        bases.includes(rawFrom as BaseType) &&
        bases.includes(rawTo as BaseType)
      ) {
        setFrom(rawFrom as BaseType);
        setTo(rawTo as BaseType);
      } else {
        console.warn('Invalid base type in URL:', rawFrom, rawTo);
      }
    } else {
      console.warn('Pathname does not match expected format:', pathname);
    }
  }, [pathname]);

  const handleChange = (newFrom: BaseType, newTo: BaseType) => {
    if (newFrom === newTo) return;
    const newRoute = `/conversion/${newFrom}-to-${newTo}`;
    if (validRoutes.has(newRoute)) {
      router.push(newRoute);
    } else {
      console.warn('Invalid route:', newRoute);
    }
  };

  if (!from || !to) return null;

  return (
    <BinaryDropdown
      fromOptions={bases}
      toOptions={bases}
      selectedFrom={from}
      selectedTo={to}
      onChange={handleChange}
    />
  );
};

export default BaseConverterNavigator;
