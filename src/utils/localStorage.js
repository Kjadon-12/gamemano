"use client"
export const setToLocalStorage = (email , password) => {
    localStorage.setItem("email" , email);
    localStorage.setItem("password" , password)
}

export const getFromLocalStorage = () => {
  const email =  localStorage.getItem("email");
   const password = localStorage.getItem("password")
   return({email , password})
}
export const setLocalStorageToCookie = () => {
    const email = localStorage.getItem("email");
    if (email) {
        document.cookie = `email=${email}; path=/;`;
    }
};

export const deleteFromCookie = () => {
    document.cookie = `email=0; path=/;`; // overwrite with empty value
    localStorage.removeItem("email");    // optional: remove from localStorage too
  };