
import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useSelectedClass = () => {
    const [axiosSecure] = useAxiosSecure();
    const { user, loading } = useAuth();

    const { data: classes = [], refetch } = useQuery({
        queryKey: ['classes', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure(`/classes/selected?email=${user?.email}`);
            return res.data;
        }
    })

    return [classes, refetch];
};

export default useSelectedClass;

