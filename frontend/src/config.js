// API Configuration
const API_BASE_URL = 'http://4.186.24.251:5000';

export const API_CONFIG = {
  BASE_URL: API_BASE_URL,
  AUTH_LOGIN: `${API_BASE_URL}/api/auth/login`,
  AUTH_REGISTER: `${API_BASE_URL}/api/auth/register`,
  TASKS: `${API_BASE_URL}/api/tasks`,
  TASKS_HISTORY: `${API_BASE_URL}/api/tasks/history`,
};

export default API_CONFIG;
