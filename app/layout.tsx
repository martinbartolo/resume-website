import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Nav from './components/nav';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Martin Bartolo',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<body className={inter.className}>
				<Nav />
				{children}
			</body>
		</html>
	);
}
