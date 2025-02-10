import { Link } from "@inertiajs/react";

export default function UsersTable({users}) {
    return (
        <table className='min-w-full'>
            <thead>
                <tr className='border-b-2'>
                    <th className='px-6 py-3 text-left text-lg font-medium text-black'>Id</th>
                    <th className='px-6 py-3 text-left text-lg font-medium text-black'>Name</th>
                    <th className='px-6 py-3 text-left text-lg font-medium text-black'>Email</th>
                    <th className='px-6 py-3 text-left text-lg font-medium text-black'>Role</th>
                    <th className='px-6 py-3 text-left text-lg font-medium text-black'>&nbsp;</th>
                </tr>
            </thead>
            <tbody>
                {users.data.map(({ id, name, email,role }) => (
                    <tr key={id} className='border-b'>
                        <td className='px-6 py-4 whitespace-nowrap'>
                            {id}
                        </td>
                        <td className='px-6 py-4 whitespace-nowrap'>
                            {name}
                        </td>
                        <td className='px-6 py-4 whitespace-nowrap'>
                            {email}
                        </td>
                        <td className='px-6 py-4 whitespace-nowrap'>
                            {role}
                        </td>
                        <td className='px-6 py-4 whitespace-nowrap '>
                            <Link
                             className="inline-flex items-center rounded-md border border-transparent bg-gray-800 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white transition duration-150 ease-in-out hover:bg-gray-700 focus:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 active:bg-gray-900"
                             href={route('users.edit',id)}>
                                Edit
                            </Link>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}