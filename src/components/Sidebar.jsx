
import { Link,useLocation } from 'react-router-dom'
const Sidebar = () => {
    const location = useLocation();
    const isActive = (path) => {
        return location.pathname ===path;
    }
  return (
    <div className='w-full flex flex-col gap-1 bg-[#D9D9D9] min-h-[100vh]'>
        <div className='w-full text-center bg-[#0A8C27] py-2 border-b-2 border-green-700'>
            <h1 className='text-white font-bold text-xl uppercase'>Category</h1>
        </div>
        <nav className='flex flex-col gap-2'>
        {linkData.map((link) => (
            <Link to={link.path} key={link.id} className={ isActive(link.path) ? `px-4 py-2 bg-[#0A8C27] text-white capitalize` : `px-4 py-2 capitalize `}>{link.name}</Link>
        ))}
        </nav>
    </div>
  )
}

export default Sidebar;


const linkData  = [
    {id: 1, name: "tools",path:"/"},
    {id: 2, name: "Material",path:"/material"},
    {id: 3, name: "Equipment",path:"/equipment"},
]