import { Building2, GraduationCap, UserCircle } from "lucide-react";
import RegistrationCard from "./RegistrationCard";
import RegistrationCardWithInput from "./RegistrationCardWithInput";
import { REGISTER_INSTITUTION_LINK } from "@/constants/navLinks";
import CardsView from "./CardsView";

const Registro = () => (
  <div className="bg-gradient-to-br from-base-100 to-base-200 flex items-center justify-center px-4 py-12">
    <div className="w-full max-w-6xl">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Únete a ParabolicLab
        </h1>
        <p className="text-lg text-base-content/70 max-w-2xl mx-auto">
          Selecciona el tipo de registro que corresponda a tu situación
        </p>
      </div>
      <CardsView />
    </div>
  </div>
);

export default Registro;
