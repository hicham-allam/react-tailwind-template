export default function Chat() {
  return (
    <div className="flex flex-col h-screen bg-gray-100">
      {/* Chat Header */}
      <header className="bg-white shadow p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">Chat App</h1>
        <div className="flex items-center space-x-4">
          <span className="text-gray-700">Hello, {user?.username || user?.email}</span>
          <button
            onClick={logout}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
          >
            Logout
          </button>
        </div>
      </header>

      {/* Main Chat Area */}
      <main className="flex-1 overflow-hidden flex">
        {/* Sidebar */}
        <div className="w-64 bg-white border-r p-4 hidden md:block">
          <h2 className="font-semibold mb-4">Channels</h2>
          {/* Channel list would go here */}
        </div>

        {/* Chat Messages */}
        <div className="flex-1 flex flex-col">
          <div className="flex-1 overflow-y-auto p-4">
            {/* Messages would go here */}
            <div className="text-center text-gray-500 py-8">
              Select a channel to start chatting
            </div>
          </div>

          {/* Message Input */}
          <div className="p-4 border-t bg-white">
            <form className="flex space-x-2">
              <input
                type="text"
                placeholder="Type a message..."
                className="flex-1 border rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}