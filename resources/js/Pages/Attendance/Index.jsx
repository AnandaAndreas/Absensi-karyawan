import AttendanceTable from '@/Components/AttendanceTable';
import Pagination from '@/Components/Pagination';
import UsersTable from '@/Components/UsersTable';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';

export default function AttendanceIndex({ attendances }) {
    console.log(attendances);

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Attendance
                </h2>
            }
        >
            <Head title="Attendance" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <AttendanceTable attendances={attendances} />
                            <Pagination links={attendances.links} />
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
