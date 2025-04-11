"use client"
export const setLocalStorageToCookie = () => {
    const email = localStorage.getItem("email");
    if (email) {
        document.cookie = `email=${email}; path=/;`;
    }
};