import AdminShell from "./components/AdminShell";

// Server Component Layout
export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <AdminShell>{children}</AdminShell>;
}
