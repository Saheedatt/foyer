import SideNav from "./Sidebar";

const Dashboard = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <SideNav />
      <main className="flex-1 transition-all duration-300 md:ml-64">
        <div className="container mx-auto p-4 md:p-6">
          <h2 className="text-2xl font-bold mb-6 pl-12 md:pl-0">
            Your activated devices
          </h2>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2">
            <div className="col-span-full lg:col-span-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                <div className="bg-white p-4 rounded shadow">Device 1</div>
                <div className="bg-white p-4 rounded shadow">Device 2</div>
                <div className="bg-white p-4 rounded shadow">Device 3</div>
              </div>
            </div>

            <div className="col-span-full sm:col-span-1 lg:col-span-1">
              <div className="bg-white p-4 rounded shadow mb-6">
                <h3 className="text-lg font-semibold mb-2">Temperature</h3>
                {/* Temperature content */}
              </div>
            </div>

            <div className="col-span-full md:col-span-2 lg:col-span-2">
              <div className="bg-white p-4 rounded shadow mb-6">
                <h3 className="text-lg font-semibold mb-2">
                  Other factors like usage
                </h3>
                {/* Usage content */}
              </div>
            </div>

            <div className="col-span-full sm:col-span-1 lg:col-span-1">
              <div className="bg-white p-4 rounded shadow">
                <h3 className="text-lg font-semibold mb-2">Humidification</h3>
                {/* Humidification content */}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
