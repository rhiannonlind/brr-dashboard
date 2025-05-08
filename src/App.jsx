import './App.css'
import Header from './Header'
import Banner from './Banner'

function App() {
  // Hardcoded data
  const staffData = [
    {
      name: "John Smith",
      role: "Software Engineer",
      email: "john.smith@company.com",
      status: "Active",
      deviceType: "MacBook Pro"
    },
    {
      name: "Sarah Johnson",
      role: "Product Manager",
      email: "sarah.j@company.com",
      status: "Active",
      deviceType: "Windows Laptop"
    },
    {
      name: "Mike Brown",
      role: "UX Designer",
      email: "mike.b@company.com",
      status: "On Leave",
      deviceType: "iPad Pro"
    }
  ];

  return (
    <div className='flex'>
      <Header />
      <div className='w-[80%] ml-[20%]'>
        <Banner />
        <div className='w-[80%] h-auto flex flex-col justify-center items-center bg-gray-400 mx-auto my-[2rem]'>
          {/* Header Row */}
          <div className='w-[90%] h-auto bg-gray-200 grid grid-cols-5 m-0'>
            <div className='w-[100%] h-[100%] bg-gray-300 border-1 border-black px-0.75'>
              <h3>Name</h3>
            </div>
            <div className='w-[100%] h-[100%] bg-gray-300 border-1 border-black px-0.75'>
              <h3>Role</h3>
            </div>
            <div className='w-[100%] h-[100%] bg-gray-300 border-1 border-black px-0.75'>
              <h3>Email</h3>
            </div>
            <div className='w-[100%] h-[100%] bg-gray-300 border-1 border-black px-0.75'>
              <h3>Status</h3>
            </div>
            <div className='w-[100%] h-[100%] bg-gray-300 border-1 border-black px-0.75'>
              <h3>Device Type</h3>
            </div>
          </div>

          {/* Data Rows */}
          {staffData.map((staff, index) => (
            <div key={index} className='w-[90%] h-auto bg-white grid grid-cols-5 m-0 border-b border-gray-200'>
              <div className='w-[100%] h-[100%] px-0.75 py-2'>
                {staff.name}
              </div>
              <div className='w-[100%] h-[100%] px-0.75 py-2'>
                {staff.role}
              </div>
              <div className='w-[100%] h-[100%] px-0.75 py-2'>
                {staff.email}
              </div>
              <div className='w-[100%] h-[100%] px-0.75 py-2'>
                {staff.status}
              </div>
              <div className='w-[100%] h-[100%] px-0.75 py-2'>
                {staff.deviceType}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
