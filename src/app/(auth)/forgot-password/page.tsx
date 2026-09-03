import AuthHeroBanner from "@/components/shared/AuthHeroBanner";
import ForgotPasswordForm from "./_components/ForgotPasswordForm";

export default function page() {
  return (
    <div className="relative">
      <AuthHeroBanner />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full mx-auto z-50">
        <ForgotPasswordForm />
      </div>
    </div>
  );
}
