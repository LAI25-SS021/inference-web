import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';

export default function GuestLayout({ children }) {
  return (
    <div className="flex min-h-screen flex-col items-center bg-gray-100 sm:justify-center sm:pt-0">
      <div className="w-full overflow-hidden px-12 py-8 sm:max-w-2xl sm:rounded-lg sm:bg-white sm:shadow-md lg:max-w-4xl xl:max-w-6xl">
        {children}
      </div>
    </div>
  );
}
