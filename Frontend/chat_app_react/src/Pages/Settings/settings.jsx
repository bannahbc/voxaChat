import React, { useState } from "react";
import { HeartIcon } from "@heroicons/react/16/solid";
export function Settings() {
  return (
    <MainContent
      leftContent={<SettingsLeft/>}
      rightContent={<p>Settings Right Panel</p>}
    />
  );
}

const SettingsLeft=()=>{
    const sideItems = [
        {
            id:1,
            title:"Account",
            icon:{HeartIcon},
            small_title:"account info ,security notification,"
        },
        {
            id:2,
            title:"Account",
            icon:{HeartIcon},
            small_title:"account info ,security notification,"
        },
        {
            id:3,
            title:"Account",
            icon:{HeartIcon},
            small_title:"account info ,security notification,"
        },
        {
            id:4,
            title:"Account",
            icon:{HeartIcon},
            small_title:"account info ,security notification,"
        },
        {
            id:1,
            title:"Account",
            icon:{HeartIcon},
            small_title:"account info ,security notification,"
        },
        {
            id:2,
            title:"Account",
            icon:{HeartIcon},
            small_title:"account info ,security notification,"
        },
        {
            id:3,
            title:"Account",
            icon:{HeartIcon},
            small_title:"account info ,security notification,"
        },
        {
            id:4,
            title:"Account",
            icon:{HeartIcon},
            small_title:"account info ,security notification,"
        },
        {
            id:1,
            title:"Account",
            icon:{HeartIcon},
            small_title:"account info ,security notification,"
        },
        {
            id:2,
            title:"Account",
            icon:{HeartIcon},
            small_title:"account info ,security notification,"
        },
        {
            id:3,
            title:"Account",
            icon:{HeartIcon},
            small_title:"account info ,security notification,"
        },
        {
            id:4,
            title:"Account",
            icon:{HeartIcon},
            small_title:"account info ,security notification,"
        },
        {
            id:1,
            title:"Account",
            icon:{HeartIcon},
            small_title:"account info ,security notification,"
        },
        {
            id:2,
            title:"Account",
            icon:{HeartIcon},
            small_title:"account info ,security notification,"
        },
        {
            id:3,
            title:"Account",
            icon:{HeartIcon},
            small_title:"account info ,security notification,"
        },
        {
            id:4,
            title:"Account",
            icon:{HeartIcon},
            small_title:"account info ,security notification,"
        },
        {
            id:1,
            title:"Account",
            icon:{HeartIcon},
            small_title:"account info ,security notification,"
        },
        {
            id:2,
            title:"Account",
            icon:{HeartIcon},
            small_title:"account info ,security notification,"
        },
        {
            id:3,
            title:"Account",
            icon:{HeartIcon},
            small_title:"account info ,security notification,"
        },
        {
            id:4,
            title:"Account",
            icon:{HeartIcon},
            small_title:"account info ,security notification,"
        },
        {
            id:1,
            title:"Account",
            icon:{HeartIcon},
            small_title:"account info ,security notification,"
        },
        {
            id:2,
            title:"Account",
            icon:{HeartIcon},
            small_title:"account info ,security notification,"
        },
        {
            id:3,
            title:"Account",
            icon:{HeartIcon},
            small_title:"account info ,security notification,"
        },
        {
            id:4,
            title:"Account",
            icon:{HeartIcon},
            small_title:"account info ,security notification,"
        },
    ]
    return(
        <div className="settingsLeftItems">
            <ul className="flex flex-col gap-3">
                {
                    sideItems.map((item)=>{
                        return(

                <li key={item.id} className="flex items-center gap-5 bg-[var(--color-glass)] rounded-xl p-2 shadow-md">
                    <div className="icon">
                        <HeartIcon  className="h-6 w-6"/>
                    </div>
                    <div className="settingsList flex flex-col">
                        <div className="title text-md">
                            <h3 className="text-[var(--color-text)]">{item.title}</h3>
                        </div>
                        <div className="small-title text-sm">
                            <p>{item.small_title}</p>
                        </div>
                    </div>
                </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

const MainContent = ({ leftContent, rightContent }) => {
  const [selectedContact, setSelectedContact] = useState(null);

  return (
    <div className="mainBody flex flex-1 h-[calc(100vh-4rem)] w-full">
      {/* Left Side */}
      <div
        className={` w-72 border-r border-[var(--color-border)] ${
          selectedContact ? "hidden" : "block"
        } lg:block h-full overflow-y-auto overflow-x-hidden`}
      >
        <SearchInput onChange={(e) => console.log(e.target.value)} />

            <hr className="border-r border-[var(--color-border)] mt-1" />

        <div className="leftSideContent mt-2 mx-2">

        {leftContent}
        </div>
      </div>

      {/* Right Side */}
      <div
        className={`flex-1 flex flex-col ${
          selectedContact ? "block" : "hidden"
        } lg:flex h-full overflow-y-auto overflow-x-hidden`}
      >
        {rightContent}
      </div>
    </div>
  );
};


const SearchInput = ({ placeholder = "Search...", onChange }) => {
  return (
    <div className="sticky  max-w-sm mx-3 rounded-2xl mt-2">
      <input
        type="text"
        placeholder={placeholder}
        onChange={onChange}
        className="w-full pl-10 pr-4 py-2 rounded-md border border-[var(--color-border)] bg-[var(--color-bg)] text-[var(--color-text)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] transition-all duration-200"
      />
      <svg
        className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-[var(--color-muted)] pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M16.65 16.65A7.5 7.5 0 1116.65 2a7.5 7.5 0 010 14.65z" />
      </svg>
    </div>
  );
};
