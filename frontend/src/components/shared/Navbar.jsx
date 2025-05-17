import React, { useState } from 'react';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { Button } from '../ui/button';
import { Avatar, AvatarImage } from '../ui/avatar';
import { LogOut, Menu, User2, X } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { USER_API_END_POINT } from '@/utils/constant';
import { setUser } from '@/redux/authSlice';
import { toast } from 'sonner';
import { assets } from '../../assets/assets';

const Navbar = () => {
    const { user } = useSelector(store => store.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [menuOpen, setMenuOpen] = useState(false);

    const logoutHandler = async () => {
        try {
            const res = await axios.get(`${USER_API_END_POINT}/logout`, { withCredentials: true });
            if (res.data.success) {
                dispatch(setUser(null));
                navigate('/');
                toast.success(res.data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error(error.response?.data?.message || "Logout failed.");
        }
    };

    return (
        <nav className="bg-white border-b shadow-sm sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex justify-between items-center">
                {/* Logo */}
                <Link to="/" className="flex items-center gap-2">
                    <img src={assets.logo} alt="Job Portal Logo" className="h-16 w-auto max-h-20 cursor-pointer" />
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-10">
                    <ul className="flex items-center gap-6 font-medium text-gray-700">
                        {
                            user && user.role === 'recruiter' ? (
                                <>
                                    <li><Link to="/admin/companies" className="hover:text-[#6A38C2] transition">Companies</Link></li>
                                    <li><Link to="/admin/jobs" className="hover:text-[#6A38C2] transition">Jobs</Link></li>
                                </>
                            ) : (
                                <>
                                    <li><Link to="/" className="hover:text-[#6A38C2] transition">Home</Link></li>
                                    <li><Link to="/jobs" className="hover:text-[#6A38C2] transition">Jobs</Link></li>
                                    <li><Link to="/browse" className="hover:text-[#6A38C2] transition">Browse</Link></li>
                                </>
                            )
                        }
                    </ul>
                </div>

                {/* User/Profile/Login */}
                <div className="hidden md:flex items-center gap-3">
                    {
                        !user ? (
                            <div className="flex items-center gap-2">
                                <Link to="/login"><Button variant="outline">Login</Button></Link>
                                <Link to="/signup"><Button className="bg-[#6A38C2] hover:bg-[#5b30a6] text-white">Signup</Button></Link>
                            </div>
                        ) : (
                            <Popover>
                                <PopoverTrigger asChild>
                                    <Avatar className="cursor-pointer">
                                        <AvatarImage src={user?.profile?.profilePhoto || "/default-avatar.png"} alt="User Avatar" />
                                    </Avatar>
                                </PopoverTrigger>
                                <PopoverContent className="w-80">
                                    <div>
                                        <div className="flex items-center gap-3 mb-2">
                                            <Avatar>
                                                <AvatarImage src={user?.profile?.profilePhoto || "/default-avatar.png"} />
                                            </Avatar>
                                            <div>
                                                <h4 className="font-medium">{user?.fullname}</h4>
                                                <p className="text-sm text-muted-foreground">{user?.profile?.bio}</p>
                                            </div>
                                        </div>
                                        <div className="flex flex-col gap-2 text-gray-700">
                                            {
                                                user?.role === 'student' && (
                                                    <div className="flex items-center gap-2">
                                                        <User2 size={18} />
                                                        <Link to="/profile">
                                                            <Button variant="link" className="p-0 h-auto">View Profile</Button>
                                                        </Link>
                                                    </div>
                                                )
                                            }
                                            <div className="flex items-center gap-2">
                                                <LogOut size={18} />
                                                <Button onClick={logoutHandler} variant="link" className="p-0 h-auto">Logout</Button>
                                            </div>
                                        </div>
                                    </div>
                                </PopoverContent>
                            </Popover>
                        )
                    }
                </div>

                {/* Mobile Menu Icon */}
                <div className="md:hidden">
                    <button onClick={() => setMenuOpen(!menuOpen)}>
                        {menuOpen ? <X className="text-gray-700" /> : <Menu className="text-gray-700" />}
                    </button>
                </div>
            </div>

            {/* Mobile Dropdown Menu */}
            {
                menuOpen && (
                    <div className="md:hidden px-4 pb-4 bg-white shadow">
                        <ul className="flex flex-col gap-4 font-medium text-gray-700">
                            {
                                user && user.role === 'recruiter' ? (
                                    <>
                                        <li><Link to="/admin/companies" onClick={() => setMenuOpen(false)}>Companies</Link></li>
                                        <li><Link to="/admin/jobs" onClick={() => setMenuOpen(false)}>Jobs</Link></li>
                                    </>
                                ) : (
                                    <>
                                        <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
                                        <li><Link to="/jobs" onClick={() => setMenuOpen(false)}>Jobs</Link></li>
                                        <li><Link to="/browse" onClick={() => setMenuOpen(false)}>Browse</Link></li>
                                    </>
                                )
                            }
                        </ul>

                        {/* Auth Buttons */}
                        <div className="mt-4 flex flex-col gap-2">
                            {
                                !user ? (
                                    <>
                                        <Link to="/login" onClick={() => setMenuOpen(false)}><Button variant="outline" className="w-full">Login</Button></Link>
                                        <Link to="/signup" onClick={() => setMenuOpen(false)}><Button className="bg-[#6A38C2] hover:bg-[#5b30a6] w-full text-white">Signup</Button></Link>
                                    </>
                                ) : (
                                    <>
                                        {user?.role === 'student' && (
                                            <Link to="/profile" onClick={() => setMenuOpen(false)}>
                                                <Button variant="link" className="w-full justify-start text-left">View Profile</Button>
                                            </Link>
                                        )}
                                        <Button onClick={() => { logoutHandler(); setMenuOpen(false); }} variant="link" className="w-full justify-start text-left">Logout</Button>
                                    </>
                                )
                            }
                        </div>
                    </div>
                )
            }
        </nav>
    );
};

export default Navbar;
