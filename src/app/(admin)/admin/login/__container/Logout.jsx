
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
                className={`logout-btn ${variant} ${size} ${className}`}
            >
                {isLoading ? (
                    <>
                        <span className="spinner"></span>
                        Logging out...
                    </>
                ) : (
                    <>
                        <span className="logout-icon">👋</span>
                        Logout
                    </>
                )}
            </button>

            <style jsx>{`
                .logout-btn {
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    gap: 6px;
                    border: none;
                    border-radius: 6px;
                    font-weight: 500;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    text-decoration: none;
                    font-family: inherit;
                    position: relative;
                    overflow: hidden;
                }

                .logout-btn:disabled {
                    cursor: not-allowed;
                    opacity: 0.6;
                }

                /* Variants */
                .logout-btn.primary {
                    background-color: #dc3545;
                    color: white;
                    border: 1px solid #dc3545;
                }

                .logout-btn.primary:hover:not(:disabled) {
                    background-color: #c82333;
                    border-color: #bd2130;
                    transform: translateY(-1px);
                    box-shadow: 0 4px 8px rgba(220, 53, 69, 0.3);
                }

                .logout-btn.secondary {
                    background-color: transparent;
                    color: #dc3545;
                    border: 1px solid #dc3545;
                }

                .logout-btn.secondary:hover:not(:disabled) {
                    background-color: #dc3545;
                    color: white;
                    transform: translateY(-1px);
                    box-shadow: 0 4px 8px rgba(220, 53, 69, 0.3);
                }

                .logout-btn.minimal {
                    background-color: transparent;
                    color: #6c757d;
                    border: none;
                    padding: 6px 12px;
                }

                .logout-btn.minimal:hover:not(:disabled) {
                    color: #dc3545;
                    background-color: #f8f9fa;
                    transform: none;
                    box-shadow: none;
                }

                .logout-btn.danger {
                    background-color: #ff4757;
                    color: white;
                    border: 1px solid #ff4757;
                }

                .logout-btn.danger:hover:not(:disabled) {
                    background-color: #ff3838;
                    border-color: #ff3838;
                    transform: translateY(-1px);
                    box-shadow: 0 4px 8px rgba(255, 71, 87, 0.3);
                }

                /* Sizes */
                .logout-btn.small {
                    padding: 6px 12px;
                    font-size: 12px;
                }

                .logout-btn.medium {
                    padding: 8px 16px;
                    font-size: 14px;
                }

                .logout-btn.large {
                    padding: 12px 24px;
                    font-size: 16px;
                }

                /* Icon */
                .logout-icon {
                    font-size: 14px;
                    transition: transform 0.3s ease;
                }

                .logout-btn:hover:not(:disabled) .logout-icon {
                    transform: scale(1.1);
                }

                /* Spinner */
                .spinner {
                    width: 14px;
                    height: 14px;
                    border: 2px solid transparent;
                    border-top: 2px solid currentColor;
                    border-radius: 50%;
                    animation: spin 1s linear infinite;
                }

                @keyframes spin {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }

                /* Responsive */
                @media (max-width: 768px) {
                    .logout-btn {
                        padding: 8px 12px;
                        font-size: 12px;
                    }
                }
            `}</style>
        </>
    );
};

export default LogoutButton;