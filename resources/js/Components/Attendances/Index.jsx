import { usePage } from "@inertiajs/react";
import SubmitAttendances from "./SubmitAttendances";
import SubmittedAttendances from "./SubmittedAttendances";
export default function Attendance(){
    const {submitted} = usePage().props;

    if (submitted) {
        return <SubmittedAttendances/> // info sudah absen
    } else{
        return <SubmitAttendances/> //form absen
    }

}