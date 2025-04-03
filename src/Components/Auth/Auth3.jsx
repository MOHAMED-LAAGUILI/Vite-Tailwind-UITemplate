import { useState } from "react";
import { Eye, EyeOff, Loader2 } from "lucide-react";

export default function Auth3() {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState({});
  const [formFocus, setFormFocus] = useState({
    email: false,
    password: false
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) {
      setErrors({ ...errors, [name]: null });
    }
  };

  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.email) newErrors.email = "L'email est requis";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Format d'email invalide";
    if (!formData.password) newErrors.password = "Le mot de passe est requis";
    else if (formData.password.length < 8) newErrors.password = "Minimum 8 caractères";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    
    setIsLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log('Form submitted:', formData);
    } catch (error) {
      console.error('Login error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleFocus = (field) => setFormFocus({ ...formFocus, [field]: true });
  const handleBlur = (field) => setFormFocus({ ...formFocus, [field]: false });

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 via-purple-50 to-blue-100 dark:from-gray-900 dark:via-purple-900/20 dark:to-blue-900/20 p-4">
      <div className="bg-white dark:bg-gray-800/95 backdrop-blur-md rounded-2xl shadow-xl dark:shadow-purple-900/20 w-full max-w-md p-8 transition-all duration-300 hover:shadow-2xl">
        <div className="text-center mb-8">
          <div className="flex justify-center items-center mb-6 group">
            <div className="border-2 border-gray-800 dark:border-gray-200 rounded-lg p-1.5 transition-all duration-300 group-hover:border-purple-500 dark:group-hover:border-purple-400">
              <span className="text-2xl font-bold text-gray-800 dark:text-white group-hover:text-purple-500 dark:group-hover:text-purple-400">I</span>
            </div>
            <span className="text-2xl font-bold ml-2 text-gray-800 dark:text-white group-hover:text-purple-500 dark:group-hover:text-purple-400">NPACT</span>
          </div>
          <h2 className="text-2xl font-semibold text-purple-600 dark:text-purple-400 mb-3">Content de vous revoir</h2>
          <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
            Connectez-vous avec votre email ou nom dutilisateur
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label 
              htmlFor="email" 
              className={`block text-sm font-medium transition-colors duration-200 ${
                formFocus.email ? 'text-purple-600 dark:text-purple-400' : 'text-gray-700 dark:text-gray-300'
              }`}
            >
              Email ou Nom dutilisateur <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              onFocus={() => handleFocus('email')}
              onBlur={() => handleBlur('email')}
              className={`w-full px-4 py-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg border transition-all duration-200 focus:outline-none ${
                errors.email 
                  ? 'border-red-400 focus:border-red-500 focus:ring-1 focus:ring-red-200 dark:focus:ring-red-900/50' 
                  : 'border-gray-200 dark:border-gray-700 focus:border-purple-500 dark:focus:border-purple-400 focus:ring-1 focus:ring-purple-200 dark:focus:ring-purple-900/50'
              } text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500`}
              placeholder="email@exemple.com"
              required
            />
            {errors.email && <p className="text-red-500 dark:text-red-400 text-xs mt-1">{errors.email}</p>}
          </div>

          <div className="space-y-2">
            <label 
              htmlFor="password" 
              className={`block text-sm font-medium transition-colors duration-200 ${
                formFocus.password ? 'text-purple-600 dark:text-purple-400' : 'text-gray-700 dark:text-gray-300'
              }`}
            >
              Mot de passe <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                onFocus={() => handleFocus('password')}
                onBlur={() => handleBlur('password')}
                className={`w-full px-4 py-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg border transition-all duration-200 focus:outline-none pr-12 ${
                  errors.password 
                    ? 'border-red-400 focus:border-red-500 focus:ring-1 focus:ring-red-200 dark:focus:ring-red-900/50' 
                    : 'border-gray-200 dark:border-gray-700 focus:border-purple-500 dark:focus:border-purple-400 focus:ring-1 focus:ring-purple-200 dark:focus:ring-purple-900/50'
                } text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500`}
                placeholder="••••••••"
                required
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className={`absolute right-3 top-1/2 -translate-y-1/2 transition-colors duration-200 ${
                  formFocus.password ? 'text-purple-500 dark:text-purple-400' : 'text-gray-500 dark:text-gray-400 hover:text-gray-600 dark:hover:text-gray-300'
                }`}
              >
                {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
              </button>
            </div>
            {errors.password && <p className="text-red-500 dark:text-red-400 text-xs mt-1">{errors.password}</p>}
          </div>

          <div className="flex items-center justify-between">
            <label className="flex items-center cursor-pointer">
              <div className="relative">
                <input 
                  type="checkbox" 
                  id="remember-me" 
                  checked={rememberMe}
                  onChange={() => setRememberMe(!rememberMe)}
                  className="sr-only peer"
                />
                <div className="w-10 h-5 bg-gray-200 dark:bg-gray-600 peer-checked:bg-purple-500 dark:peer-checked:bg-purple-400 rounded-full transition-colors duration-200"></div>
                <div className="absolute left-1 top-1 w-3 h-3 bg-white rounded-full shadow transform peer-checked:translate-x-5 transition-transform duration-200"></div>
              </div>
              <span className="ml-2 text-sm text-gray-600 dark:text-gray-300">Se souvenir de moi</span>
            </label>
            <a href="#" className="text-sm text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 transition-colors">
              Mot de passe oublié?
            </a>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full flex justify-center items-center py-3 px-4 rounded-lg text-sm font-medium text-white bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 disabled:opacity-75 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 transition-all duration-300"
          >
            {isLoading ? <Loader2 className="h-5 w-5 animate-spin" /> : 'Se connecter'}
          </button>

          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200 dark:border-gray-700"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-400">ou continuer avec</span>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3">
            {[ 
              { icon: <GoogleIcon />, color: 'text-gray-700' },
              { icon: <FacebookIcon />, color: 'text-[#1877F2]' },
              { icon: <AppleIcon />, color: 'text-gray-700' }
            ].map((btn, idx) => (
              <button
                key={idx}
                type="button"
                className="flex justify-center items-center py-3 border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 dark:focus:ring-offset-gray-800 transition-all duration-200"
              >
                <span className={`${btn.color} dark:text-opacity-90 h-5 w-5`}>{btn.icon}</span>
              </button>
            ))}
          </div>

          <p className="text-center text-sm text-gray-600 dark:text-gray-300 mt-6">
            Pas de compte?{' '}
            <a href="#" className="text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 font-medium transition-colors">
              Créer un compte
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}

// SVG Components
const GoogleIcon = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
  </svg>
);

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const AppleIcon = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
    <path d="M16.365 1.43c0 1.14-.493 2.27-1.177 3.08-.744.9-1.99 1.57-2.987 1.57-.12 0-.23-.02-.3-.03-.01-.06-.04-.22-.04-.39 0-1.15.572-2.27 1.206-2.98.804-.94 2.142-1.64 3.248-1.68.03.13.05.28.05.43zm4.565 15.71c-.03.07-.463 1.58-1.518 3.12-.945 1.34-1.94 2.71-3.43 2.71-1.517 0-1.9-.88-3.63-.88-1.698 0-2.302.91-3.67.91-1.377 0-2.332-1.26-3.428-2.8-1.287-1.82-2.323-4.63-2.323-7.28 0-4.28 2.797-6.55 5.552-6.55 1.448 0 2.675.95 3.6.95.865 0 2.222-1.01 3.902-1.01.613 0 2.886.06 4.374 2.19-.13.09-2.383 1.37-2.383 4.19 0 3.26 2.854 4.42 2.955 4.45z"/>
  </svg>
);