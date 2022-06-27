import { useRouter } from 'next/router';
import Link from 'next/link';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';

export default function Navbar() {
  const router = useRouter();
  const paths = router.pathname.split('/').filter((p) => !!p);

  const pages = [{ text: 'Home', link: '/', active: paths.length === 0 }];

  for (let i = 0; i < paths.length; i++) {
    const part = paths[i];
    const text = part;
    const link = '/' + paths.slice(0, i + 1).join('/');
    pages.push({ text: text, link: link, active: link === router.pathname });
  }

  return (
    <Breadcrumb>
      {pages.map((page) => (
        <BreadcrumbItem active={page.active} key={page.text}>
          {page.active ? (
            <span>{page.text}</span>
          ) : (
            <Link href={page.link}>{page.text}</Link>
          )}
        </BreadcrumbItem>
      ))}
    </Breadcrumb>
  );
}
