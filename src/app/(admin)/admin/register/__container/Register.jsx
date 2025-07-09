"use client" ;
import { useState } from 'react';
import { useAuth } from '../../../../../components/Authentication/Authentication';
import { useRouter } from 'next/navigation';

const Registration = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password_confirmation: ''
    });
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const { register } = useAuth();
    const router = useRouter();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        
        // Clear error for this field when user starts typing
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email format is invalid';
        }

        if (!formData.password) {
            newErrors.password = 'Password is required';
        } else if (formData.password.length < 8) {
            newErrors.password = 'Password must be at least 8 characters';
        }

        if (!formData.password_confirmation) {
            newErrors.password_confirmation = 'Password confirmation is required';
        } else if (formData.password !== formData.password_confirmation) {
            newErrors.password_confirmation = 'Passwords do not match';
        }

        return newErrors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrors({});
        setLoading(true);

        // Client-side validation
        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            setLoading(false);
            return;
        }

        try {
            const result = await register(
                formData.name,
                formData.email,
                formData.password,
                formData.password_confirmation
            );

            if (result.success) {
                router.push('/admin'); // Redirect to dashboard after successful registration
            } else {
                if (result.errors) {
                    // Handle Laravel validation errors
                    const backendErrors = {};
                    Object.keys(result.errors).forEach(key => {
                        backendErrors[key] = result.errors[key][0]; // Get first error message
                    });
                    setErrors(backendErrors);
                } else {
                    setErrors({ general: result.message || 'Registration failed' });
                }
            }
        } catch (error) {
            setErrors({ general: 'Network error. Please try again.' });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="registration-container">
            <div className="registration-form">
                <h2>Create Account</h2>
                
                <form onSubmit={handleSubmit}>
                    {/* General Error Message */}
                    {errors.general && (
                        <div className="error-message general-error">
                            {errors.general}
                        </div>
                    )}

                    {/* Name Field */}
                    <div className="form-group">
                        <label htmlFor="name">Full Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className={errors.name ? 'error' : ''}
                            placeholder="Enter your full name"
                            disabled={loading}
                        />
                        {errors.name && (
                            <span className="error-message">{errors.name}</span>
                        )}
                    </div>

                    {/* Email Field */}
                    <div className="form-group">
                        <label htmlFor="email">Email Address</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className={errors.email ? 'error' : ''}
                            placeholder="Enter your email"
                            disabled={loading}
                        />
                        {errors.email && (
                            <span className="error-message">{errors.email}</span>
                        )}
                    </div>

                    {/* Password Field */}
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            className={errors.password ? 'error' : ''}
                            placeholder="Enter your password"
                            disabled={loading}
                        />
                        {errors.password && (
                            <span className="error-message">{errors.password}</span>
                        )}
                        <small className="password-hint">
                            Password must be at least 8 characters long
                        </small>
                    </div>

                    {/* Confirm Password Field */}
                    <div className="form-group">
                        <label htmlFor="password_confirmation">Confirm Password</label>
                        <input
                            type="password"
                            id="password_confirmation"
                            name="password_confirmation"
                            value={formData.password_confirmation}
                            onChange={handleChange}
                            className={errors.password_confirmation ? 'error' : ''}
                            placeholder="Confirm your password"
                            disabled={loading}
                        />
                        {errors.password_confirmation && (
                            <span className="error-message">{errors.password_confirmation}</span>
                        )}
                    </div>

                    {/* Submit Button */}
                    <button 
                        type="submit" 
                        className="submit-btn"
                        disabled={loading}
                    >
                        {loading ? 'Creating Account...' : 'Create Account'}
                    </button>
                </form>

                {/* Login Link */}
                <div className="login-link">
                    <p>Already have an account? <a href="/login">Sign In</a></p>
                </div>
            </div>

            <style jsx>{`
                .registration-container {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    min-height: 100vh;
                    background-color: #f5f5f5;
                    padding: 20px;
                }

                .registration-form {
                    background: white;
                    padding: 40px;
                    border-radius: 8px;
                    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
                    width: 100%;
                    max-width: 800px;
                }

                h2 {
                    text-align: center;
                    margin-bottom: 30px;
                    color: #333;
                    font-size: 24px;
                }

                .form-group {
                    margin-bottom: 20px;
                }

                label {
                    display: block;
                    margin-bottom: 5px;
                    font-weight: 500;
                    color: #555;
                }

                input {
                    width: 100%;
                    padding: 12px;
                    border: 1px solid #ddd;
                    border-radius: 4px;
                    font-size: 16px;
                    transition: border-color 0.3s;
                }

                input:focus {
                    outline: none;
                    border-color: #007bff;
                }

                input.error {
                    border-color: #dc3545;
                }

                input:disabled {
                    background-color: #f8f9fa;
                    cursor: not-allowed;
                }

                .error-message {
                    color: #dc3545;
                    font-size: 14px;
                    margin-top: 5px;
                    display: block;
                }

                .general-error {
                    background-color: #f8d7da;
                    color: #721c24;
                    padding: 10px;
                    border-radius: 4px;
                    margin-bottom: 20px;
                    border: 1px solid #f5c6cb;
                }

                .password-hint {
                    color: #6c757d;
                    font-size: 12px;
                    margin-top: 5px;
                    display: block;
                }

                .submit-btn {
                    width: 100%;
                    padding: 12px;
                    background-color: #007bff;
                    color: white;
                    border: none;
                    border-radius: 4px;
                    font-size: 16px;
                    cursor: pointer;
                    transition: background-color 0.3s;
                }

                .submit-btn:hover:not(:disabled) {
                    background-color: #0056b3;
                }

                .submit-btn:disabled {
                    background-color: #6c757d;
                    cursor: not-allowed;
                }

                .login-link {
                    text-align: center;
                    margin-top: 20px;
                }

                .login-link p {
                    color: #666;
                    margin: 0;
                }

                .login-link a {
                    color: #007bff;
                    text-decoration: none;
                }

                .login-link a:hover {
                    text-decoration: underline;
                }

                @media (max-width: 480px) {
                    .registration-form {
                        padding: 20px;
                    }
                }
            `}</style>
        </div>
    );
};

export default Registration;