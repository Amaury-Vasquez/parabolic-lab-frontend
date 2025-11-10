"use client";
import { HamburgerMenu } from "amvasdev-ui";
import { CircleUserRound, LogIn, Menu, Rocket, UserPlus } from "lucide-react";
import Link from "next/link";
import CustomLink from "@/components/CustomLink";
import { NavLink, LOGIN_LINK, REGISTER_LINK } from "@/constants/navLinks";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const AUTH_LINKS = [
  {
    href: LOGIN_LINK,
    label: "Iniciar Sesión",
    icon: <LogIn size="16" strokeWidth="2.5" />,
  },
  {
    href: REGISTER_LINK,
    label: "Registrarse",
    icon: <UserPlus size="16" strokeWidth="2.5" />,
  },
];

interface NavbarProps {
  navigationItems?: NavLink[];
  showHamburger?: boolean;
  showAuthLinks?: boolean;
}

const Navbar = ({
  navigationItems = [],
  showHamburger = true,
  showAuthLinks = true,
}: NavbarProps) => {
  const pathname = usePathname();

  return (
    <nav className="navbar bg-base-100 fixed top-0 left-0 right-0 z-50 shadow-md">
      {/* Hamburger Menu - Left */}
      <div className="navbar-start">
        {showHamburger && navigationItems.length > 0 ? (
          // We are adding pathname as a key to close the component when we navigate to another page
          <HamburgerMenu icon={Menu} key={pathname}>
            <ul className="flex flex-col gap-2 min-w-64 max-w-full">
              {navigationItems.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="w-full">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </HamburgerMenu>
        ) : null}
      </div>

      {/* App Name - Center */}
      <div className="navbar-center">
        <CustomLink href="/" variant="ghost" className="text-xl">
          <Rocket size="18" className="text-primary" />
          ParabolicLab
        </CustomLink>
      </div>

      {/* Auth Links - Right */}
      <div className="navbar-end gap-2 hidden lg:flex">
        {showAuthLinks ? (
          <>
            {AUTH_LINKS.map((link) => (
              <CustomLink
                key={link.label}
                href={link.href}
                variant="ghost"
                size="sm"
                className={clsx({
                  "text-primary": pathname === link.href,
                })}
              >
                {link.icon}
                {link.label}
              </CustomLink>
            ))}
          </>
        ) : null}
      </div>
      <div className="navbar-end lg:hidden">
        <HamburgerMenu icon={CircleUserRound} key={pathname} position="right">
          <ul className="flex flex-col gap-2 min-w-64 max-w-full">
            {AUTH_LINKS.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className={clsx("w-full", {
                    "text-primary": pathname === link.href,
                  })}
                >
                  {link.icon}
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </HamburgerMenu>
      </div>
    </nav>
  );
};

export default Navbar;
