
import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useRole = () => {
    const {user, loading} = useAuth();
    const [axiosSecure] = useAxiosSecure();

    const {data: role = [], isLoading: roleLoading} = useQuery({
        queryKey: ['role', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/role/${user?.email}`);
            return res.data;
        }
    })
    return [role, roleLoading]
}
export default useRole;

