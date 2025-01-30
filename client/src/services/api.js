import axios from "axios";

const API = axios.create({ baseURL: import.meta.env.VITE_API_BASE_URL });

export const fetchInfo = () => API.get("/info");
export const fetchSkills = () => API.get("/skills");
export const fetchProjects = () => API.get("/project");
export const fetchTraining = () => API.get("/training");
export const fetchSchool = () => API.get("/school");
export const fetchVarsity = () => API.get("/varsity");
export const fetchExperience = () => API.get("/experience");
