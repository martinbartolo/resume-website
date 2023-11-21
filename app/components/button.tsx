export default function Button({children}: {children: React.ReactNode}) {
	return <div className="px-3 py-1 bg-blue-500 rounded-md font-semibold text-sm cursor-pointer hover:bg-blue-600">{children}</div>;
}
