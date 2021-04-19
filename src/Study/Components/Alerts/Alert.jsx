import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


// ================= SUCCESS MESSAGE =============== //
 export const showToastSuccess = () => {
    toast("Votre message a été envoyé avec succès", {
        position: toast.POSITION.TOP_CENTER
      })
   
};
// ================= WELCOME MESSAGE =============== //
export const showToastWelCome = (name) => {
  console.log("bienvenue")
    toast.success(`Bienvenue sur JUNGOSTYUDY  ${name}`, {
        position: toast.POSITION.TOP_CENTER
      })
   
};
// ================= WELCOMEBACK MESSAGE =============== //
export const showToastWelComeback = (name) => {
   
    toast.success(`Content de vous revoir ${name}`, {    
        position: toast.POSITION.TOP_RIGHT
      })
   
};
// ================= ERROR MESSAGE =============== //
 export const showToastError = () => {
    toast.error("Quelque chose c'est mal passé ", {
        position: toast.POSITION.TOP_CENTER
      })
   
};
