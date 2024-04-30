export default function Notice({ children }: { children: React.ReactNode }) {
    return (
        <div className="w-full h-12 flex flex-col justify-center items-center gap-4 top-0 left-0 bg-success text-white font-bold">
            {children}
        </div>
    );
}