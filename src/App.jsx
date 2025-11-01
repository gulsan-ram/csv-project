import { useState } from "react";
import { Upload } from "lucide-react";

export default function App() {
  const [activeTab, setActiveTab] = useState("upload");

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-400 to-indigo-600 flex flex-col items-center p-6">

      {/* Header */}
      <div className="text-center mt-6">
        <h1 className="text-4xl font-bold text-white">CSV Analytics Dashboard</h1>
        <p className="text-white/80">Upload, analyze, and visualize your CSV data</p>
      </div>

      {/* Tabs */}
      <div className="flex gap-4 mt-8 bg-white/20 backdrop-blur-sm p-3 rounded-xl shadow-lg">
        {[
          { id: "upload", label: "Upload CSV" },
          { id: "preview", label: "Data Preview" },
          { id: "stats", label: "Statistics" },
          { id: "viz", label: "Visualizations" }
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-5 py-2 rounded-lg text-white font-medium transition ${
              activeTab === tab.id
                ? "bg-white/30 shadow-md"
                : "hover:bg-white/10"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Upload Card */}
      {activeTab === "upload" && (
        <div className="bg-white w-[500px] mt-10 p-8 rounded-2xl shadow-xl text-center">
          <h2 className="text-2xl font-bold mb-2">Upload CSV File</h2>
          <p className="text-gray-500 mb-6">Drag and drop your CSV file or click to browse</p>

          <label className="border-2 border-dashed border-purple-400 rounded-xl p-10 flex flex-col items-center cursor-pointer text-gray-600 hover:bg-purple-50 transition">
            <Upload className="w-12 h-12 text-purple-500 mb-3" />
            Click to select or drag and drop
            <span className="text-sm text-gray-400">CSV files only</span>
            <input type="file" accept=".csv" className="hidden" />
          </label>
        </div>
      )}

      {/* Empty states for other tabs */}
      {activeTab !== "upload" && (
        <div className="bg-white w-[500px] mt-10 p-8 rounded-2xl shadow-xl text-center">
          <h2 className="text-xl font-semibold text-gray-700 mb-3">
            {activeTab === "preview" && "No data uploaded yet"}
            {activeTab === "stats" && "Statistics will appear here"}
            {activeTab === "viz" && "Visualizations will appear here"}
          </h2>
          <p className="text-gray-500">Upload a CSV to continue.</p>
        </div>
      )}
    </div>
  );
}

