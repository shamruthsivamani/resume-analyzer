import axios from "axios";

const API = axios.create({
  baseURL: "https://resume-analyzer-afax.onrender.com",
});

export const analyzeResume = (formData) =>
  API.post("/analyze/", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });