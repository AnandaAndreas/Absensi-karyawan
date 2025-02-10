import Pagination from '@/Components/Pagination';
import UsersTable from '@/Components/UsersTable';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Transition } from '@headlessui/react';
import { Link, useForm, Head } from '@inertiajs/react';
import Selectbox from '@/Components/Selectbox';
import roles from '@/../data/roles.json'
import { useEffect, useState } from 'react';
import { Loader } from '@googlemaps/js-api-loader';

export default function SubmitAttendances() {
    

    const loader = new Loader({
        apiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
        version: 'weekly',
        libraries: ['geocoder']
    })
    
    const [transitioning, setTransitioning] = useState(false);

    const { data, setData, post, transform, errors, processing, recentlySuccessful } =
        useForm({
            status: 'attend',
            description: '',
            latitude: '',
            longitude: '',
            prepareData: {},
            address: ''
        });
    
    const getLatLing = (e) => {
        e.preventDefault();
        navigator.geolocation.getCurrentPosition(
            function (position){
                createGeocoder(position.coords);
            },
            function (){
                alert("tidak bisa mendapatkan lokasi")
            }
        )
    }

    function createGeocoder(coordinates){
        console.log('Masuk 57');
        loader.importLibrary('geocoding').then(() => {
            
            const geocoder = new google.maps.Geocoder();
            geocoder
                .geocode({
                    location: {
                        lat: coordinates.latitude,
                        lng: coordinates.longitude
                    }
                })
                .then((response) =>{
                    if (!response.results[0]) {
                        alert('Tidak dapat menemukan lokasi');
                        return;
                    }
                    setData('prepareData',{
                            latitude: coordinates.latitude,
                            longitude: coordinates.longitude,
                            address: response.results[0].formatted_address
                        } )
                })
        })
    }


    useEffect(() => {
        if(
            data.prepareData.hasOwnProperty('address')
        ){
            transform((data) => ({
                ...data.prepareData,
                status: data.status,
                description: data.description
            }));

            post(route('attendances.submit'), {
                preserveScroll: true,
                onSuccess: () => {
                    alert('Presensi berhasil disubmit');
                },
                onError: (errors) => {
                    console.log(errors);
                }
            });
        }
    }, [data.prepareData])

    useEffect(() => {
        if (data.status === 'attend') {
            setTransitioning(false);
        }else{
            setTransitioning(true);
        }
    }, [data.status])

    return (

        <form onSubmit={getLatLing} className="mt-6 space-y-6">
            <div>
                <InputLabel htmlFor="name" value="Silahkan Lakukan Presensi" />

                <Selectbox
                    onChange={(e) =>
                        setData('status', e.target.value)
                    }
                    className='border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm mt-1 block w-full'
                    options={[
                        { value: 'attend', label: 'Hadir' },
                        { value: 'leave', label: 'Cuti' },
                        { value: 'sick', label: 'Sakit' },
                        { value: 'permit', label: 'Izin' },
                        { value: 'business_trip', label: 'Perjalanan Dinas' },
                        { value: 'remote', label: 'Kerja Remote (diluar kantor)' },
                    ]}
                />

                <InputError className="mt-2" message={errors.name} />
            </div>
            <Transition
                show={transitioning}
                enter="transition ease-in-out"
                enterFrom="opacity-0"
                leave="transition ease-in-out"
                leaveTo="opacity-0"
            >
                <div>
                    <InputLabel htmlFor="description" value="Penjelasan" />

                    <TextInput
                        id="description"
                        className="mt-1 block w-full"
                        value={data.description}
                        onChange={(e) => setData('description', e.target.value)}
                        required
                        isFocused
                        autoComplete="description"
                    />

                    <InputError className="mt-2" message={errors.name} />
                </div>
            </Transition>

            <div className="flex items-center gap-4">
                <PrimaryButton disabled={processing}>Presensi</PrimaryButton>


            </div>
        </form>
    );
}
