
import { useQuery } from "@tanstack/react-query";


const useInstructors = () => {

    const { isLoading, refetch, data: instructors = [] } = useQuery({
        queryKey: ['instructors'],
        queryFn: async () => {
            const res = await fetch('http://localhost:4000/instructors/')
            
            return res.json()
        },
    },
    )

    return [instructors,isLoading,refetch];
};

export default useInstructors;