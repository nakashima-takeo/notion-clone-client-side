import { Link } from "@remix-run/react";

export default function Header(){
  return(
    <div className="flex w-full h-10 items-center justify-between bg-gray-200">
      <div className="ml-5">
        <Link to="/">
          Home
        </Link>
      </div>
      <div className="space-x-4 mr-5">
        <Link to="/login">
          Login
        </Link>
        <Link to="/register">
          Register
        </Link>
      </div>
    </div>
  )
}
