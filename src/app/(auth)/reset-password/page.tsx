import AuthHeroBanner from "@/components/shared/AuthHeroBanner";
import ResetPasswordForm from "./_components/ResetPassword";

export default function ResetPasswordPage() {
  return (
    <div className="relative">
      <AuthHeroBanner />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full mx-auto z-50">
        <ResetPasswordForm />
      </div>
    </div>
  );
}
