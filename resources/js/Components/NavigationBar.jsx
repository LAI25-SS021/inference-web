/* eslint-disable prettier/prettier */
export default function NavigationBar() {
  return (
    <header className="z-999 h-[6vh]">
      <div className="fixed left-0 right-0 top-0 bg-slate-50">
        <nav className="flex flex-col items-center">
          <div className="text-2xl">RupaKoe</div>
          <ol className="flex space-x-4">
            <li>
              <a className="link" href="#">
                Tentang Kami
              </a>
            </li>
            <li>|</li>
            <li>
              <a className="link" href="#">
                Coba Sekarang
              </a>
            </li>
          </ol>
        </nav>
      </div>
    </header>
  );
}
