import React from 'react'

export default function StaffDirectoryData() {

    
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
        },
        {
          name: "Emily Chen",
          role: "Data Scientist",
          email: "emily.c@company.com",
          status: "Active",
          deviceType: "MacBook Pro"
        },
        {
          name: "David Wilson",
          role: "DevOps Engineer",
          email: "david.w@company.com",
          status: "Active",
          deviceType: "Windows Laptop"
        },
        {
          name: "Lisa Martinez",
          role: "Frontend Developer",
          email: "lisa.m@company.com",
          status: "Remote",
          deviceType: "MacBook Air"
        },
        {
          name: "James Thompson",
          role: "Backend Developer",
          email: "james.t@company.com",
          status: "Active",
          deviceType: "Windows Laptop"
        },
        {
          name: "Rachel Kim",
          role: "QA Engineer",
          email: "rachel.k@company.com",
          status: "On Leave",
          deviceType: "MacBook Pro"
        },
        {
          name: "Alex Rodriguez",
          role: "Technical Lead",
          email: "alex.r@company.com",
          status: "Active",
          deviceType: "Windows Laptop"
        },
        {
          name: "Sophie Anderson",
          role: "Mobile Developer",
          email: "sophie.a@company.com",
          status: "Active",
          deviceType: "MacBook Pro"
        },
        {
          name: "Marcus Lee",
          role: "Security Engineer",
          email: "marcus.l@company.com",
          status: "Remote",
          deviceType: "Windows Laptop"
        },
        {
          name: "Priya Patel",
          role: "Full Stack Developer",
          email: "priya.p@company.com",
          status: "Active",
          deviceType: "MacBook Pro"
        },
        {
          name: "Daniel Kim",
          role: "Cloud Architect",
          email: "daniel.k@company.com",
          status: "Active",
          deviceType: "Windows Laptop"
        },
        {
          name: "Emma Wilson",
          role: "UI Designer",
          email: "emma.w@company.com",
          status: "On Leave",
          deviceType: "iPad Pro"
        },
        {
          name: "Carlos Mendez",
          role: "Database Administrator",
          email: "carlos.m@company.com",
          status: "Active",
          deviceType: "Windows Laptop"
        },
        {
          name: "Aisha Khan",
          role: "Machine Learning Engineer",
          email: "aisha.k@company.com",
          status: "Remote",
          deviceType: "MacBook Pro"
        },
        {
          name: "Ryan Cooper",
          role: "System Administrator",
          email: "ryan.c@company.com",
          status: "Active",
          deviceType: "Windows Laptop"
        },
        {
          name: "Maya Patel",
          role: "DevOps Engineer",
          email: "maya.p@company.com",
          status: "Active",
          deviceType: "MacBook Pro"
        },
        {
          name: "Thomas Wright",
          role: "Network Engineer",
          email: "thomas.w@company.com",
          status: "On Leave",
          deviceType: "Windows Laptop"
        },
        {
          name: "Olivia Chen",
          role: "Software Architect",
          email: "olivia.c@company.com",
          status: "Active",
          deviceType: "MacBook Pro"
        },
        {
          name: "Lucas Garcia",
          role: "Mobile Developer",
          email: "lucas.g@company.com",
          status: "Remote",
          deviceType: "iPad Pro"
        },
        {
          name: "Isabella Martinez",
          role: "Frontend Developer",
          email: "isabella.m@company.com",
          status: "Active",
          deviceType: "MacBook Air"
        },
        {
          name: "Ethan Taylor",
          role: "Backend Developer",
          email: "ethan.t@company.com",
          status: "Active",
          deviceType: "Windows Laptop"
        },
        {
          name: "Ava Johnson",
          role: "UX Researcher",
          email: "ava.j@company.com",
          status: "On Leave",
          deviceType: "MacBook Pro"
        },
        {
          name: "Noah Brown",
          role: "Security Analyst",
          email: "noah.b@company.com",
          status: "Active",
          deviceType: "Windows Laptop"
        },
        {
          name: "Sophia Lee",
          role: "Data Engineer",
          email: "sophia.l@company.com",
          status: "Remote",
          deviceType: "MacBook Pro"
        },
        {
          name: "William Chen",
          role: "Cloud Engineer",
          email: "william.c@company.com",
          status: "Active",
          deviceType: "Windows Laptop"
        },
        {
          name: "Charlotte Wilson",
          role: "Product Designer",
          email: "charlotte.w@company.com",
          status: "Active",
          deviceType: "iPad Pro"
        },
        {
          name: "Benjamin Kim",
          role: "Full Stack Developer",
          email: "benjamin.k@company.com",
          status: "On Leave",
          deviceType: "MacBook Pro"
        }
      ];

      return (
        <>
        <div className='w-[80%] my-[4rem] mx-auto'>
        <h1 className='w-[90%]'>Staff Directory</h1>
        </div>
   
        <div className='w-[80%] h-[calc(100vh-200px)] flex flex-col justify-start items-center bg-gray-400 mx-auto my-[1rem] py-4'>
          {/* Table Container */}
          <div className='w-[90%] overflow-auto px-2'>
            {/* Header Row */}
            <div className='w-full h-auto bg-gray-200 grid grid-cols-[250px_250px_300px_150px_200px] m-0 sticky top-0'>
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
              <div key={index} className='w-full h-auto bg-white grid grid-cols-[250px_250px_300px_150px_200px] m-0 border-b border-gray-200'>
                <div className='w-[100%] h-[100%] px-0.75 py-2  bg-white'>
                  {staff.name}
                </div>
                <div className='w-[100%] h-[100%] px-0.75 py-2  bg-white'>
                  {staff.role}
                </div>
                <div className='w-[100%] h-[100%] px-0.75 py-2  bg-white'>
                  {staff.email}
                </div>
                <div className='w-[100%] h-[100%] px-0.75 py-2  bg-white'>
                  {staff.status}
                </div>
                <div className='w-[100%] h-[100%] px-0.75 py-2  bg-white'>
                  {staff.deviceType}
                </div>
              </div>
            ))}
          </div>
        </div>
        </>
  )
}
