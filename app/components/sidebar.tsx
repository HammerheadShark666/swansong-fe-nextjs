import Link from "next/link";
import { useRouter } from "next/navigation";
import { KeyboardEvent } from 'react'; 

export default function Sidebar({ isOpen, toggle, }: { isOpen: boolean, toggle: () => void }) { 

  const router = useRouter();

  const handleOnKeyDown = (e : KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      router.push("/search?criteria=" + e.currentTarget.value);
      e.currentTarget.value = ""; 
      toggle();
    }
  }

  return (
    <>
      <div
        className="sidebar-container w-screen h-full fixed overflow-hidden bg-white grid pt-[110px] left-0 z-10"
        style={{
          opacity: `${isOpen ? "1" : "0"}`,
          top: ` ${isOpen ? "0" : "-100%"}`,
        }}
      >
        <button className="absolute right-0 p-5" onClick={toggle}>
          {/* Close icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"
            />
          </svg>
        </button>

        <div className="grid col-span-1 grid-col-12">

        <ul className="sidebar-nav leading-relaxed text-left px-10 text-xl">
          <li>
            <Link href="/albums" onClick={toggle}>
              <p>Albums</p>
            </Link>
          </li>
          <li>
            <Link href="/artists" onClick={toggle}>
              <p>Artists</p>
            </Link>
          </li>
          <li>
            <Link href="/members" onClick={toggle}>
              <p>Members</p>
            </Link>
          </li> 
          <li>
            <div className="md:block pt-4">                
              <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 md:pt-0 pointer-events-none">
                  <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                  </svg>
                </div>
                <input onKeyDown={handleOnKeyDown} type="search" id="default-search" className="block w-full p-3 ps-10 text-sm text-gray-900 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..." required />
              </div>   
            </div>
          </li>        
        </ul>
      </div> 
      </div>
    </>
  );
};