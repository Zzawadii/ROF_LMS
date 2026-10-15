import StudentShell from "./components/StudentShell";

// Server Component Layout
export default function StudentLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <StudentShell>{children}</StudentShell>;
}
