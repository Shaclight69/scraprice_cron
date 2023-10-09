import Image from "next/image";
import Link from "next/link";

const navIcons = [
  { src: "/assets/icons/search.svg", alt: "search" },
  { src: "/assets/icons/black-heart.svg", alt: "heart" },
  { src: "/assets/icons/user.svg", alt: "user" },
];

const Navbar = () => {
  return (
    <header className="w-full">
      <nav className="nav">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/assets/icons/spider.png"
            width={35}
            height={35}
            alt="logo"
          />

          <h1 className="font-extrabold text-3xl text-transparent bg-clip-text bg-gradient-to-r from-rose-800 to-rose-700">
            Scraprice
          </h1>
        </Link>

        <div className="flex items-center gap-5">
          {navIcons.map((icon) => (
            <Image
              key={icon.alt}
              src={icon.src}
              alt={icon.alt}
              width={28}
              height={28}
              className="object-contain"
            />
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
