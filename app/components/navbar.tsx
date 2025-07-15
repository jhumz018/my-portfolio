'use client';

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from '@heroui/navbar';
import { Button } from '@heroui/button';
import Link from 'next/link';

const NavbarComponent = () => {
  return (
    <Navbar position="static" className="w-full flex justify-center py-10">
      <div className="flex w-full justify-center ">
        {/* <NavbarBrand>
          <p className="font-bold text-inherit">ACME</p>
        </NavbarBrand> */}

        <NavbarContent className="hidden sm:flex gap-20" justify="center">
          <NavbarItem>
            <Link href="#" className="text-foreground text-4xl">
              Home
            </Link>
          </NavbarItem>
          <NavbarItem isActive>
            <Link href="#" aria-current="page" className="text-foreground text-4xl">
              Projects
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link href="#" className="text-foreground text-4xl">
              Hobbies
            </Link>
          </NavbarItem>
                    <NavbarItem>
            <Link href="#" className="text-foreground text-4xl">
              Contact
            </Link>
          </NavbarItem>
        </NavbarContent>

        {/* <NavbarContent justify="end">
          <NavbarItem className="hidden lg:flex">
            <Link href="#">Login</Link>
          </NavbarItem>
          <NavbarItem>
            <Link href="#">
              <Button color="primary" variant="flat">
                Sign Up
              </Button>
            </Link>
          </NavbarItem>
        </NavbarContent> */}
      </div>
    </Navbar>
  );
};

export default NavbarComponent;
