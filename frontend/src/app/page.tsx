import { Card, Title, Text, Metric } from "@tremor/react";

export default function Home() {
  return (
    <main className="p-12 min-h-screen bg-slate-50">
      <div className="max-w-4xl mx-auto space-y-6">
        
        {/* Header Section */}
        <div className="flex flex-col gap-2">
          <Title className="text-3xl font-bold text-slate-800">
            AI Data Analyst
          </Title>
          <Text className="text-slate-500">
            Upload your CSV and ask questions in plain English.
          </Text>
        </div>

        {/* Upload Section Placeholder */}
        <Card className="mt-6 border-dashed border-2 border-slate-300 shadow-sm">
          <div className="flex flex-col items-center justify-center h-48 cursor-pointer hover:bg-slate-50 transition-colors">
            <div className="p-4 rounded-full bg-blue-50 text-blue-500 mb-3">
              {/* Simple Upload Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5" />
              </svg>
            </div>
            <Text className="font-medium text-slate-700">Click to upload CSV</Text>
            <Text className="text-sm text-slate-400">or drag and drop</Text>
          </div>
        </Card>

        {/* Stats Grid Placeholder */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card decoration="top" decorationColor="blue">
            <Text>Total Rows</Text>
            <Metric>--</Metric>
          </Card>
          <Card decoration="top" decorationColor="indigo">
            <Text>Columns</Text>
            <Metric>--</Metric>
          </Card>
          <Card decoration="top" decorationColor="fuchsia">
            <Text>Missing Values</Text>
            <Metric>--</Metric>
          </Card>
        </div>

      </div>
    </main>
  );
}