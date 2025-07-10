
import { useState } from 'react';
import { useAuth } from '../../../../../components/Authentication/Authentication';
import { useRouter } from 'next/navigation';

const LogoutButton = ({ variant = 'primary', size = 'medium', className = '' }) => {
    const [isLoading, setIsLoading] = useState(false);
    const { logout, user } = useAuth();
    const router = useRouter();

    const handleLogout = async () => {
        setIsLoading(true);
        try {
            await logout();
            router.push('/login'); // Redirect to login page after logout
        } catch (error) {
            console.error('Logout error:', error);
        } finally {
            setIsLoading(false);
        }
    };

    // Don't render if user is not logged in
    if (!user) {
        return null;
    }

    return (
        <>
            <button
                onClick={handleLogout}
                disabled={isLoading}
                className={`logout-btn ${variant} ${size} ${className} mt-20 w-full text-xl bg-gray-300 text-black py-2 rounded-2xl font-bold cursor-pointer hover:bg-gray-400 transition duration-300 ease-in-out`}    

            >
                {isLoading ? (
                    <>
                        <span className="spinner"></span>
                        Logging out...
                    </>
                ) : (
                    <>
                        <span className="logout-icon pe-3">🔐</span>
                        Logout
                    </>
                )}
            </button>


        </>
    );
};

export default LogoutButton;