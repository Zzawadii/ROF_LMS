import React from "react";
import UsersTableClient from "./components/UsersTableClient";

// User Data Type Definition
interface User {
  id: string;
  name: string;
  email: string;
  role: "Admin" | "Mentor" | "Student";
  division: "Junior" | "Senior" | "—";
  status: "Active" | "Pending" | "Inactive";
}

// Sample Data - In a real app, this would be fetched from a database
const INITIAL_USERS: User[] = [
  { id: "1", name: "ROF Administrator", email: "admin@rof.ac.rw", role: "Admin", division: "—", status: "Active" },
  { id: "2", name: "Alice Mukamana", email: "alice.mukamana@rof.ac.rw", role: "Admin", division: "—", status: "Active" },
  { id: "3", name: "Jean Claude Nsabimana", email: "jean.claude@rof.ac.rw", role: "Mentor", division: "Junior", status: "Active" },
  { id: "4", name: "Aline Nyirahabimana", email: "aline.nyira@rof.ac.rw", role: "Mentor", division: "Junior", status: "Active" },
  { id: "5", name: "Eric Munyaneza", email: "eric.munyaneza@rof.ac.rw", role: "Mentor", division: "Junior", status: "Active" },
  { id: "6", name: "Grace Uwase", email: "grace.uwase@rof.ac.rw", role: "Mentor", division: "Junior", status: "Active" },
  { id: "7", name: "David Nkundiye", email: "david.nkundiye@rof.ac.rw", role: "Mentor", division: "Senior", status: "Active" },
  { id: "8", name: "Diane Uwimana", email: "diane.uwimana@rof.ac.rw", role: "Mentor", division: "Senior", status: "Active" },
  { id: "9", name: "Fabrice Rukundo", email: "fabrice.rukundo@rof.ac.rw", role: "Mentor", division: "Senior", status: "Active" },
  { id: "10", name: "Solange Iradukunda", email: "solange.iradukunda@rof.ac.rw", role: "Mentor", division: "Senior", status: "Active" },
  { id: "11", name: "Innocent Rwema", email: "innocent.rwema@rof.ac.rw", role: "Mentor", division: "Junior", status: "Pending" },
  { id: "12", name: "Betty Uwera", email: "betty.uwera@rof.ac.rw", role: "Mentor", division: "Senior", status: "Pending" },
];

export default function UsersPage() {
  // In a real app, you might fetch users here:
  // const users = await fetchUsers();

  return (
    <main className="min-h-screen bg-[#E6EBF2] p-6 md:p-10 text-gray-800 font-sans">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900 tracking-tight">Users</h1>
        <p className="text-sm text-gray-500 mt-1 font-medium">
          Every account on the platform — students, mentors and administrators.
        </p>
      </div>

      {/* Client Component with interactive features */}
      <UsersTableClient initialUsers={INITIAL_USERS} />
    </main>
  );
}
