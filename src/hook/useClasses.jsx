

import { useQuery } from "@tanstack/react-query";


const useClasses = () => {
    const {  data: classes = [], refetch } = useQuery({
        queryKey: ['classes'],
        queryFn: async () => {
            const res = await fetch('http://localhost:4000/classes');
            return res.json();
        }
    })

    return [classes, refetch];
};

export default useClasses;





