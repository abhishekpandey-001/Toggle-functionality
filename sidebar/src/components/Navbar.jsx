import { GiHamburgerMenu } from "react-icons/gi";
import Wrapper from "./Wrapper";
import { useState } from "react";

const Navbar = () => {

    const [sidebar, SetSidebar] = useState(false);

    const handleSidebar = () => {
        SetSidebar(true);
    }

    return (
        <Wrapper>

            {sidebar ? (<div className="fixed inset-0 bg-[#242424] z-50 relative">
                <div className="text-center p-1.5 flex flex-col gap-2">
                    <div>Contact</div>
                    <div>Careers</div>
                    <div>Products</div>
                </div>

                <button
                    className="absolute top-3 right-3 w-7 h-7 flex items-center justify-center text-sm cursor-pointer"
                    onClick={() => SetSidebar(false)}
                >
                    ❌
                </button>
            </div>) :

                (<div className="flex items-center justify-between px-8 py-3">
                    <div>
                        ShopingArena
                    </div>

                    <div className="flex justify-around gap-10 hidden min-[380px]:flex max-[424px]:gap-3">
                        <div>
                            Contact
                        </div>

                        <div>
                            Careers
                        </div>

                        <div>Products</div>
                    </div>

                    {/* Sidebar feature for responsiveness */}

                    <button className="hidden max-[380px]:block cursor-pointer"
                        onClick={handleSidebar}
                    >
                        <GiHamburgerMenu />
                    </button>
                </div>)}



        </Wrapper>
    )
}

export default Navbar
