import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { HeaderMenuItems } from "@/lib/navigation";
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

export const Navbar = () => {


  return (

    <nav className="flex  px-10 py-4 w-full items-center">
      {/* left :logo */}
      <div className="shrink-0">
        <Image
          src="/Brand_logo.png"
          alt="Brand logo"
          height={50}
          width={100}
        ></Image>
      </div>


    {/* center:Menu items */}
      <div className="flex flex-row items-center gap-8 ml-16 ">
        {HeaderMenuItems.map((mainItem) => {
          const columnCount = mainItem.subItems?.length || 4;

          return (
            <DropdownMenu key={mainItem.label}>
              <DropdownMenuTrigger>
                <Link href={mainItem.href}>
                  <p className="font-semibold">{mainItem.label}</p>
                </Link>
              </DropdownMenuTrigger>

              <DropdownMenuContent align="start" sideOffset={8}>
                {mainItem.isMegaMenu ? (
                  <div className={`grid grid-cols-${columnCount} gap-6 p-6 w-auto max-w-[900px] min-w-[600px]`}>
                    {mainItem.subItems?.map((column, columnIndex) => (
                      <div key={columnIndex} className="p-4 min-w-[200px]">
                        {column.map((item, itemIndex) => (
                          <div key={itemIndex}>

                            {itemIndex === 0 && item.listheading && (
                              <h4 className="font-semibold text-gray-500 text-xs text-captilize p-2 mb-2">{item.listheading}</h4>
                            )}


                            {item.Image && (<Image
                              alt="Ellty product"
                              src={item.Image || ""}
                              width={500}
                              height={500}
                              className="rounded-sm w-full h-full"
                            />)}

                            {!item.label && (
                              <div>
                                <p className="font-bold text-wrap text-lg mb-3 mt-2 ">{item.heading}</p>
                                <p className="text-sm text-gray-400">{item.subheading}</p>
                              </div>
                            )}

                            {item.label && <Link
                              href={item.href || "#"}
                              className="block py-2 text-sm font-semibold items- p-2  hover:bg-gray-100 rounded-sm"
                            >
                              {item.label}
                              {item.description && (
                                <span className="block text-xs text-gray-500">{item.description}</span>
                              )}
                            </Link>}
                          </div>
                        ))}

                      </div>
                    ))}

                  </div>
                ) : (<div>No MegaLayout</div>)}
              </DropdownMenuContent>

            </DropdownMenu>
          )
        })}
      </div>

      {/* right: Auth Buttons */}
      <div className="flex ml-auto gap-3">
      <Button variant={"secondary"}  >
        <Link href={"/login"}>
          Log in
        </Link>
      </Button>

      <Button className="">
        <Link href={"/signup"}>
          sign up
        </Link>
      </Button>
      </div>

    </nav>
  )
}