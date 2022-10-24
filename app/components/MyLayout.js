import Navbar from "./Navbar";

function MyLayout({children}){
return (
<div className="bg-zinc-900 text-zinc-50 text-center">
<Navbar />
    {children}
    <div> JOVAYU &copy; 2022</div>
</div>
)
}

export default MyLayout