'use client';
// import {
//   Navbar,
//   NavbarBrand,
//   NavbarContent,
//   NavbarItem,
//   Dropdown,
//   DropdownTrigger,
//   Avatar
// } from '@nextui-org/navbar';
// import {
//   Button,
//   DropdownItem,
//   DropdownMenu,
//   Input,
//   Link,
//   SearchIcon
// } from '@nextui-org/react';
// import React from 'react';

// // const AcmeLogo = () => (
// //   <svg width="100" height="100" viewBox="0 0 100 100">
// //     {/* SVG content here */}
// //   </svg>
// // );

// const Home = () => {
//   const menuItems = [
//     "Profile",
//     "Dashboard",
//     "Activity",
//     "Analytics",
//     "System",
//     "Deployments",
//     "My Settings",
//     "Team Settings",
//     "Help & Feedback",
//     "Log Out",
//   ];
//   return (
    
//     <Navbar shouldHideOnScroll>
//       <NavbarBrand>
//         <p className="font-bold text-inherit">ACME</p>
//       </NavbarBrand>
//       <NavbarContent className="hidden sm:flex gap-4" justify="center">
//         <NavbarItem>
//           <Link color="foreground" href="#">
//             Features
//           </Link>
//         </NavbarItem>
//         <NavbarItem isActive>
//           <Link href="#" aria-current="page">
//             Customers
//           </Link>
//         </NavbarItem>
//         <NavbarItem>
//           <Link color="foreground" href="#">
//             Integrations
//           </Link>
//         </NavbarItem>
//       </NavbarContent>
//       <NavbarContent justify="end">
//         <NavbarItem className="hidden lg:flex">
//           <Link href="/">Login</Link>
//         </NavbarItem>
//         <NavbarItem>
//           <Button as={Link} color="primary" href="/register" variant="flat">
//             Sign Up
//           </Button>
//         </NavbarItem>
//       </NavbarContent>
//     </Navbar>
//   );
// }
// export default Home

import React from 'react';

// Common classes
const NAV_LINK_CLASSES = "text-primary-foreground hover:text-primary-foreground/80";
const INPUT_CLASSES = "mt-1 block w-full px-3 py-2 border border-input rounded-md shadow-sm focus:outline-none focus:ring focus:ring-primary focus:border-transparent";
const inputClasses = "mt-1 block w-full px-3 py-2 border border-input dark:border-input-dark rounded-md shadow-sm focus:outline-none focus:ring focus:ring-primary dark:focus:ring-primary focus:border-transparent dark:focus:border-transparent";
const labelClasses = "block text-sm font-medium text-primary-foreground dark:text-primary-foreground";

// Navbar Component
const Navbar = () => {
    return (
        <nav className="flex items-center justify-between bg-primary p-4">
            <div className="text-primary-foreground text-lg font-bold">POS System</div>
            <div className="flex items-center space-x-4">
                <a href="#" className={NAV_LINK_CLASSES}>Home</a>
                <a href="#" className={NAV_LINK_CLASSES}>Products</a>
                <a href="#" className={NAV_LINK_CLASSES}>About</a>
                <a href="#" className={NAV_LINK_CLASSES}>Contact</a>
            </div>
        </nav>
    );
};

// UserInfo Component
const UserInfo = () => {
    return (
        <div className="flex items-center justify-end p-4">
            <div className="flex items-center space-x-2">
                <img src="https://placehold.co/50" alt="user-avatar" className="w-10 h-10 rounded-full" />
                <div className="text-primary-foreground">John Doe</div>
            </div>
        </div>
    );
};

// WelcomeCard Component
const WelcomeCard = () => {
    return (
        <div className="bg-card p-6 rounded-lg">
            <h2 className="text-xl font-bold mb-4">Welcome to our POS System</h2>
            <p className="text-zinc-500">HAHAHAHAHAHHAHAHAHHAHAHAHAHAHHAHAHAHAHHAH.</p>
        </div>
    );
};

// ContactForm Component
const ContactForm = () => {
    return (
        <div className="bg-card p-6 rounded-lg">
            <h2 className="text-xl font-bold mb-4">Contact Us</h2>
            <form className="space-y-4">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-zinc-700">Name</label>
                    <input type="text" id="name" name="name" className={INPUT_CLASSES} placeholder="Your Name" required />
                </div>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-zinc-700">Email</label>
                    <input type="email" id="email" name="email" className={INPUT_CLASSES} placeholder="Your Email" required />
                </div>
                <div>
                    <label htmlFor="message" className="block text-sm font-medium text-zinc-700">Message</label>
                    <textarea id="message" name="message" rows="4" className={INPUT_CLASSES} placeholder="Your Message" required></textarea>
                </div>
                <button type="submit" className="bg-primary text-primary-foreground hover:bg-primary/80 py-2 px-4 rounded-md">Submit</button>
            </form>
        </div>
    );
};

// CreateInvoiceForm Component
const CreateInvoiceForm = () => {
    return (
        <div className="bg-background dark:bg-background-dark min-h-screen flex items-center justify-center">
            <div className="max-w-lg w-full bg-card dark:bg-card rounded-lg shadow-lg overflow-hidden">
                <div className="px-6 py-8">
                    <div className="text-center">
                        <h2 className="text-2xl font-bold bg-black text-primary-foreground dark:text-primary-foreground">Create Invoice</h2>
                    </div>
                    <form className="mt-8 space-y-6">
                        <div>
                            <label htmlFor="client-name" className={labelClasses}>Customer Name</label>
                            <input type="text" id="client-name" name="client-name" className={inputClasses} placeholder="Enter client's name" required />
                        </div>
                        <div>
                            <label htmlFor="invoice-date" className={labelClasses}>Invoice Date</label>
                            <input type="date" id="invoice-date" name="invoice-date" className={inputClasses} required />
                        </div>
                        <div>
                            <label htmlFor="description" className={labelClasses}>Description</label>
                            <textarea id="description" name="description" rows="4" className={inputClasses} placeholder="Enter description"></textarea>
                        </div>
                        <div>
                            <label htmlFor="due-date" className={labelClasses}>Due Date</label>
                            <input type="date" id="due-date" name="due-date" className={inputClasses} required />
                        </div>
                        <div>
                            <label htmlFor="product-list" className={labelClasses}>Product List</label>
                            <div className="mt-1 grid grid-cols-2 gap-4">
                                <div>
                                    <input type="text" id="product-name" name="product-name" className={inputClasses} placeholder="Product Name" required />
                                </div>
                                <div>
                                    <input type="number" id="product-quantity" name="product-quantity" className={inputClasses} placeholder="Quantity" required />
                                </div>
                                <div>
                                    <input type="number" id="product-price" name="product-price" className={inputClasses} placeholder="Price" required />
                                </div>
                            </div>
                        </div>
                        <div>
                            <button type="submit" className="bg-primary text-primary-foreground hover:bg-primary/80 py-2 px-4 rounded-md w-full">Create Invoice</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

// App Component
const App = () => {
    return (
        <div>
            <Navbar />
            <UserInfo />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
                <WelcomeCard />
                <ContactForm />
            </div>
            <div className="p-4">
                <CreateInvoiceForm />
            </div>
        </div>
    );
};

export default App;
