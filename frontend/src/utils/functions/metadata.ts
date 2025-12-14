import { Metadata } from 'next';

export const generateMetadata = ({
  title = `${process.env.NEXT_PUBLIC_APP_NAME || 'Party flow'}  `,
  description = 'Plateforme tout en un pour organiser des fêtes et des événements mémorables avec vos amis et votre famille.',
  image = '/thumbnail.png',
  noIndex = false,
}: {
  title?: string;
  description?: string;
  image?: string | null;
  icons?: Metadata['icons'];
  noIndex?: boolean;
} = {}): Metadata => ({
  title,
  description,
  openGraph: {
    title,
    description,
    ...(image && { images: [{ url: image }] }),
  },
  twitter: {
    title,
    description,
    ...(image && { card: 'summary_large_image', images: [image] }),
    creator: '@RushclinTakam',
  },
  // metadataBase: new URL(process.env.APP_DOMAIN!),
  ...(noIndex && { robots: { index: false, follow: false } }),
});
