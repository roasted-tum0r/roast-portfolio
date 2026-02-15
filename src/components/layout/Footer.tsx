export default function Footer() {
    return (
        <footer className="py-12 bg-black border-t border-white/10 text-center">
            <div className="container mx-auto px-6">
                <p className="text-white/40 text-sm">
                    Copyright © {new Date().getFullYear()} Anirban Samaddar. All rights reserved.
                </p>
            </div>
        </footer>
    );
}
