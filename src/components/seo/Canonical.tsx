import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

const SITE = 'https://vidify.site';

export const Canonical = () => {
  const { pathname } = useLocation();
  // Strip trailing slash (except root) for consistent canonicals.
  const clean = pathname === '/' ? '/' : pathname.replace(/\/+$/, '');
  const url = `${SITE}${clean}`;
  return (
    <Helmet>
      <link rel="canonical" href={url} />
      <meta property="og:url" content={url} />
    </Helmet>
  );
};
