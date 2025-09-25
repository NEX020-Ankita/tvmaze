import { RouterProvider } from "react-router/dom";

import Show from "./show";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        
          <Show />
          <main className="container mx-auto p-4 flex flex-col lg:flex-row gap-8">
            {/* Main Content Area */}
            <div className="flex-1">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4"></div>
            </div>
          </main>
        </div>
  );
};
export default HomePage;