import { Link } from "@inertiajs/react";

export default function AttendanceTable({attendances}) {
    console.log(attendances + " == >");
    
    return (
        <table className='min-w-full'>
            <thead>
                <tr className='border-b-2'>
                    <th className='px-6 py-3 text-left text-lg font-medium text-black'>Date</th>
                    <th className='px-6 py-3 text-left text-lg font-medium text-black'>Name</th>
                    <th className='px-6 py-3 text-left text-lg font-medium text-black'>Role</th>
                    <th className='px-6 py-3 text-left text-lg font-medium text-black'>Status</th>
                    <th className='px-6 py-3 text-left text-lg font-medium text-black'>Description</th>
                    <th className='px-6 py-3 text-left text-lg font-medium text-black w-1/2'>Address</th>
                </tr>
            </thead>
            <tbody>
                {attendances.data.map(({ id, created_at, user, address, status,description }) => (
                    <tr key={id} className='border-b odd:bg-white even:bg-slate-200'>
                        <td className='px-6 py-4'>
                            {created_at}
                        </td>
                        <td className='px-6 py-4'>
                            {user.name}
                        </td>
                        <td className='px-6 py-4'>
                            {user.role}
                        </td>
                        <td className='px-6 py-4'>
                            {status}
                        </td>
                        <td className='px-6 py-4'>
                            {description}
                        </td>
                        <td className='px-6 py-4'>
                            {address}
                        </td>
                        
                    </tr>
                ))}
            </tbody>
        </table>
    )
}