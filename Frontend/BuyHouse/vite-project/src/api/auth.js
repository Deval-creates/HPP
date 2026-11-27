const API_BASE_URL = 'https://house-price-backend-lzi6.onrender.com'; 

// 1. Signup Function
export const signupUser = async (fullName, email, password) => {
  const response = await fetch(`${API_BASE_URL}/signup`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ 
      full_name: fullName, 
      email: email, 
      password: password 
    }), 
  });

  const data = await response.json();
  if (!response.ok) throw new Error(data.detail || 'Signup failed');
  return data;
};

// 2. Login Function
export const loginUser = async (email, password) => {
  const response = await fetch(`${API_BASE_URL}/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  });

  const data = await response.json();
  if (!response.ok) throw new Error(data.detail || 'Login failed');
  return data;
};

// 3. Authentication Check Function
export const isAuthenticated = () => {
  const token = localStorage.getItem('token');
  return !!token; // Agar token hai toh true, warna false
};

// 4. Logout Function
export const logout = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('userEmail');
  localStorage.removeItem('userName');
  
  // Page ko refresh karein taaki Navbar update ho jaye
  window.location.reload(); 
};

// 5. Helper function for authorized requests (Favourites ke liye)
export const getAuthHeaders = () => {
  const token = localStorage.getItem('token');
  return {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  };
};