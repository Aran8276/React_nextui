import { Link } from "react-router-dom";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Input,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  Avatar,
} from "@nextui-org/react";
import { Moon, Search, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export default function App() {
  const [theme, setTheme] = useState("light");
  const root = window.document.documentElement;
  const localStorage = window.localStorage;

  useEffect(() => {
    if (localStorage.getItem("theme")) {
      const savedTheme = localStorage.getItem("theme");
      document.documentElement.setAttribute("class", savedTheme);
      return;
    }

    if (theme == "dark") {
      document.documentElement.setAttribute("class", "dark");
      localStorage.setItem("theme", "dark");
      return;
    }
    if (theme == "light") {
      document.documentElement.setAttribute("class", "light");
      localStorage.setItem("theme", "light");
      return;
    }
  }, []);

  const switchThemes = (type) => {
    if (type == "dark") {
      setTheme("dark");
      localStorage.setItem("theme", "dark");
      root.classList.remove("light");
      root.classList.add("dark");
      return;
    }
    if (type == "light") {
      setTheme("light");
      localStorage.setItem("theme", "light");
      root.classList.remove("dark");
      root.classList.add("light");
      return;
    }
    return;
  };

  return (
    <Navbar isBordered>
      <NavbarContent justify="start">
        <NavbarBrand className="mr-4">
          <div className="">Zahra</div>
          <p className="hidden sm:block font-bold text-inherit">XI RPL 1</p>
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-3">
          <NavbarItem>
            <Link to="/">Resto</Link>
          </NavbarItem>
          <NavbarItem>
            <Link to="/produk">Produk</Link>
          </NavbarItem>
          <NavbarItem>
            <Link to="/negara">Negara</Link>
          </NavbarItem>
        </NavbarContent>
      </NavbarContent>

      {/* <NavbarContent as="div" className="items-center" justify="end">
        <Input
          classNames={{
            base: "max-w-full sm:max-w-[10rem] h-10",
            mainWrapper: "h-full",
            input: "text-small",
            inputWrapper:
              "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
          }}
          placeholder="Type to search..."
          size="sm"
          startContent={<Search />}
          type="search"
        /> */}

      <NavbarContent as="div" className="items-center" justify="end">
        <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <Avatar
              isBordered
              as="button"
              className="transition-transform"
              color="secondary"
              name="Jason Hughes"
              size="sm"
              src="https://i.pinimg.com/564x/4a/b1/2a/4ab12ae9e73fd59c1ca67b892f90c558.jpg"
            />
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions" variant="flat">
            <DropdownItem key="profile" className="h-14 gap-2">
              <p className="font-semibold">Signed in as</p>
              <p className="font-semibold">User@example.com</p>
            </DropdownItem>
            <DropdownItem key="settings">My Settings</DropdownItem>
            <DropdownItem key="team_settings">Team Settings</DropdownItem>
            <DropdownItem key="analytics">Analytics</DropdownItem>
            <DropdownItem key="system">System</DropdownItem>
            <DropdownItem key="configurations">Configurations</DropdownItem>
            <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
            <DropdownItem key="logout" color="danger">
              Log Out
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>

        <Dropdown className="dropdown" placement="bottom-end">
          <DropdownTrigger>
            <div tabIndex={0} role="button" className="btn m-1">
              Theme
              <svg
                width="12px"
                height="12px"
                className="inline-block h-2 w-2 ml-2 fill-current opacity-60"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 2048 2048"
              >
                <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
              </svg>
            </div>
          </DropdownTrigger>

          <DropdownMenu
            tabIndex={0}
            className="dropdown-content bg-base-300 rounded-box z-[1] w-52 p-2 shadow-2xl"
          >
            <DropdownItem key="dark" onClick={() => switchThemes("light")}>
              <div className="flex space-x-4">
                <Sun />
                <span>Light Mode</span>
              </div>
            </DropdownItem>
            <DropdownItem key="light" onClick={() => switchThemes("dark")}>
              <div className="flex space-x-4">
                <Moon />
                <span>Dark Mode</span>
              </div>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>
    </Navbar>
  );
}
