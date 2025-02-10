import Pagination from '@/Components/Pagination';
import UsersTable from '@/Components/UsersTable';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';

export default function UserIndex({ users }) {
    // console.log(users);

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Users
                </h2>
            }
        >
            <Head title="Users" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className='flex justify-between items-center mb-2'>
                        <label className='font-bold'>
                            Users : {users.total}
                        </label>
                        <Link
                            href={route('users.create')}
                            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
                        >
                            Create User
                        </Link>
                    </div>

                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <UsersTable users={users} />
                            <Pagination links={users.links} />
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
